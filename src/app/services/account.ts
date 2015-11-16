/// <reference path="../../typings/_references.d.ts" />

import {Injectable, Inject} from 'ng-forward';

const HTTP = new WeakMap();
const LOG = new WeakMap();

@Injectable()
@Inject('$http', '$log')
export class AccountService {
  name: string;
  apiHost: string;
  constructor($http, $log) {
    HTTP.set(this, $http);
    LOG.set(this, $log);
    this.apiHost = '/api';
    this.name = 'Account Service';
  }
  getProfile() {
    return HTTP.get(this).get(`${this.apiHost}/me`);
  }
  updateProfile(profileData) {
    return HTTP.get(this).put(`${this.apiHost}/me`, profileData);
  }
}

export const ACCOUNT_SERVICE_BINDINGS = [
  AccountService
];
