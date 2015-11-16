/// <reference path="../typings/_references.d.ts" />

import {Injectable, Inject} from 'ng-forward';

const HTTP = new WeakMap();
const LOG = new WeakMap();

@Injectable()
@Inject('$http', '$log')
class MixtapesService {
  constructor($http, $log) {
    HTTP.set(this, $http);
    LOG.set(this, $log);
    this.apiHost = '/api';
    this.name = 'Mixtapes Service';
  }

  getAllMixtapes() {
    return HTTP.get(this).get(`${this.apiHost}/audio`)
      .then(results => results.data )
      .catch(err => LOG.get(this).log(err));
  }

  getMixtape(id) {
    return HTTP.get(this).get(`${this.apiHost}/audio/${id}`)
      .then(results => results.data )
      .catch(err => LOG.get(this).log(err));
  }
}

export default MixtapesService;
