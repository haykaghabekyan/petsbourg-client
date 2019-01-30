import axios from 'axios';

export class UserEditService {
    static async loadUserEditPage(userId) {
        return {
            user: {},
            pets: [],
        };
    }
}
