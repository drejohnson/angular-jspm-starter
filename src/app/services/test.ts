/// <reference path="../../typings/_references.d.ts" />

import {Injectable, Inject} from 'ng-forward';

@Injectable()
@Inject('$log')
export class TestService {
  name: string;
  constructor($log) {
    this.name = 'Test Service';
  }
  getService() {
    return this.name;
  }
}

export const TEST_SERVICE_BINDINGS = [
  TestService
];
