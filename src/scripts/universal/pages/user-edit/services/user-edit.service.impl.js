import axios from 'axios';
import { configs } from '../../../../server/utils/config';

export class UserEditServiceImpl {
    static userEditPageSave(req, res) {
        const { backend } = configs();

        const { body, cookies, params, auth } = req;

        if (params.userId && params.userId !== auth.user._id) {
            return res
                .status(403)
                .send({
                    success: false,
                    errors: {
                        message: 'You are not authorized for this action.'
                    }
                })
        }

        axios
            .put(`${ backend.url }/api/users/${ auth.user._id }`, body, {
                headers: {
                    authorization: cookies.jwt ? cookies.jwt : ''
                },
            })
            .then(({ data }) => {
                res.status(200).send({
                    success: true,
                    user: data.user,
                });
            })
            .catch((error) => {
                res.status(400).send({
                    success: false,
                    errors: {
                        message: 'Something went wrong.'
                    }
                });
            });
    }
}
