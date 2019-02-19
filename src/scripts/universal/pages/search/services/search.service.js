import axios from 'axios';
import { configs } from '../../../../server/utils/config';

export class SearchService {
    static load(filters) {

        const { frontend } = configs();

        return axios.get(`${ frontend.url }/api/search-page`, {
            params: filters,
        }).then(({ data }) => data);
    }

    static search(filters) {

        const { frontend } = configs();

        return axios.get(`${ frontend.url }/api/search-page/search`, {
            params: filters,
        }).then(({ data }) => data);
    }
}
