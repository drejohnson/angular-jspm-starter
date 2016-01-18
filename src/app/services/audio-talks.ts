/// <reference path="../../typings/tsd.d.ts" />

import {Injectable, Inject} from 'ng-forward';

const HTTP = new WeakMap();
const LOG = new WeakMap();

@Injectable()
@Inject('$http', '$log')
class AudioTalksService {
  constructor(public $http, public $log) {
    HTTP.set(this, $http);
    LOG.set(this, $log);
    this.apiHost = '/api';
    this.name = 'AudioTalks Service';
  }

  getAllAudioTalks() {
    return HTTP.get(this).get(`${this.apiHost}/audio`)
      .then(results => results.data )
      .catch(err => LOG.get(this).log(err));
  }

  getAudioTalk(id) {
    return HTTP.get(this).get(`${this.apiHost}/audio/${id}`)
      .then(results => results.data )
      .catch(err => LOG.get(this).log(err));
  }
}

export const AUDIO_TALK_SERVICE_BINDINGS = [
  AudioTalksService
];
