import axios from 'axios';

export class SearchService {
  static load(filters) {
    return axios.get(`${process.env.FRONTEND_URL}/api/search-page`, {
      params: filters,
    }).then(({data}) => data);
  }

  static search(filters) {
    return axios.get(`${process.env.FRONTEND_URL}/api/search-page/search`, {
      params: filters,
    }).then(({data}) => data);
  }
}
