import axios from 'axios';

export class UserServiceImpl {
  static load(req, res) {
    const {userId = ''} = req.params;

    const userPromise = UserServiceImpl.getUser(userId);
    const petsPromise = UserServiceImpl.getUserPets(userId);

    Promise.all([userPromise, petsPromise]).then(([user, pets]) => {
      res.status(200).send({
        success: true,
        user,
        pets,
      });
    }).catch(() => {
      res.status(400).send({
        success: false,
        errors: {
          message: 'User not found.'
        }
      });
    });
  }

  static async getUser(userId) {
    return axios.get(`${process.env.BACKEND_URL}/api/users/${userId}`)
      .then(({data}) => data.user);
  }

  static async getUserPets(userId) {
    return axios.get(`${process.env.BACKEND_URL}/api/users/${userId}/pets`)
      .then(({data}) => data.pets);
  }
}
