/// <reference path="../../typings/_references.d.ts" />

import {Injectable, Inject} from 'ng-forward';

@Injectable()
@Inject('$q', '$timeout')
export class TestService {
  name: string;
  constructor(private $q, private $timeout) {
    this.name = 'Test Service';
  }
  getValue() {
    return this.$q(resolve => {
      this.$timeout(() => resolve('Async ' + this.name), 3000);
    });
  }
}

export const TEST_SERVICE_BINDINGS = [
  TestService
];
