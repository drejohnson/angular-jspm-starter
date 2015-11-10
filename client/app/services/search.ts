/// <reference path="../typings/_references.d.ts" />

import {Injectable, Inject} from 'ng-forward';

const HTTP = new WeakMap();
const LOG = new WeakMap();

@Injectable()
@Inject('$http', '$log')
class SearchService {
  constructor($http, $log) {
    HTTP.set(this, $http);
    LOG.set(this, $log);
    this.apiHost = '/api';
    this.name = 'Search Service';
  }

  getSearches(query) {
    return HTTP.get(this).get(`${this.apiHost}/search/${query}`)
      .then(results => results.data )
      .catch(err => LOG.get(this).log(err));
  }
}

export default SearchService;
