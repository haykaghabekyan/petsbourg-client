import axios from 'axios';
import {config} from '../../../config/config'

export class SearchService {
  static load(filters) {
    return axios.get(`${config.frontendUrl}/api/search-page`, {
      params: filters,
    }).then(({data}) => data);
  }

  static search(filters) {
    return axios.get(`${config.frontendUrl}/api/search-page/search`, {
      params: filters,
    }).then(({data}) => data);
  }
}
