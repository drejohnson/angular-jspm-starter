/// <reference path="../../typings/tsd.d.ts" />

import {Injectable, Inject} from 'ng-forward';

@Injectable()
@Inject('$q', '$timeout')
export class TestService {
  // name: string;
  private title:string;
  constructor(private $q, private $timeout) {
    this.title = 'Test Service';
  }
  public getValue() {
    return this.$q(resolve => {
      this.$timeout(() => resolve('Async ' + this.title), 3000);
    });
  }
}

export const TEST_SERVICE_BINDINGS = [
  TestService
];
