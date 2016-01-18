/// <reference path="../../typings/tsd.d.ts" />

import {Injectable, Inject} from 'ng-forward';

@Injectable()
@Inject('$http', '$log')
class VideoService {
  apiHost: string;
  name: string;
  constructor(public $http, public $log) {
    this.apiHost = '/api';
    this.name = 'Videos Service';
  }

  getAllVideos() {
    return this.$http.get(`${this.apiHost}/videos`)
      .then(results => results.data )
      .catch(err => this.$log.log(err));
  }

  getFeatured() {
    return this.$http.get(`${this.apiHost}/featured`)
      .then(results => results.data )
      .catch(err => this.$log.log(err));
  }

  getChannel(channel) {
    return this.$http.get(`${this.apiHost}/videos/channel/${channel}`)
      .then(results => results.data )
      .catch(err => this.$log.log(err));
  }

  getVideo(id) {
    return this.$http.get(`${this.apiHost}/videos/${id}`)
      .then(results => results.data )
      .catch(err => this.$log.log(err));
  }

  getRelated(id) {
    return this.$http.get(`${this.apiHost}/related/${id}`)
      .then(results => results.data )
      .catch(err => this.$log.log(err));
  }
}

export const VIDEO_SERVICE_BINDINGS = [
  VideoService
];
