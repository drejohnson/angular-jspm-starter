/// <reference path="../../typings/tsd.d.ts" />

import {Injectable, Inject} from 'ng-forward';

@Injectable()
@Inject('$q', '$timeout')
export class TestService {
  // name: string;
  public title:string;
  constructor(private $q, private $timeout) {}
  
  public getValue() {
    this.title = 'Test Service';
    return this.$q(resolve => {
      this.$timeout(() => resolve('Async ' + this.title), 3000);
    });
  }
}

export const TEST_SERVICE_BINDINGS = [
  TestService
];
