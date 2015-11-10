/// <reference path="../typings/_references.d.ts" />

import {Injectable, Inject} from 'ng-forward';

const HTTP = new WeakMap();
const LOG = new WeakMap();

@Injectable()
@Inject('$http', '$log')
class VideosService {
  constructor($http, $log) {
    HTTP.set(this, $http);
    LOG.set(this, $log);
    this.apiHost = '/api';
    this.name = 'Videos Service';
  }

  getAllVideos() {
    return HTTP.get(this).get(`${this.apiHost}/videos`)
      .then(results => results.data )
      .catch(err => LOG.get(this).log(err));
  }

  getFeatured() {
    return HTTP.get(this).get(`${this.apiHost}/featured`)
      .then(results => results.data )
      .catch(err => LOG.get(this).log(err));
  }

  getChannel(channel) {
    return HTTP.get(this).get(`${this.apiHost}/videos/channel/${channel}`)
      .then(results => results.data )
      .catch(err => LOG.get(this).log(err));
  }

  getVideo(id) {
    return HTTP.get(this).get(`${this.apiHost}/videos/${id}`)
      .then(results => results.data )
      .catch(err => LOG.get(this).log(err));
  }

  getRelated(id) {
    return HTTP.get(this).get(`${this.apiHost}/related/${id}`)
      .then(results => results.data )
      .catch(err => LOG.get(this).log(err));
  }
}

export default VideosService;
