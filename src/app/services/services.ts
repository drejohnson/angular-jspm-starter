/// <reference path="../../typings/_references.d.ts" />

import {ACCOUNT_SERVICE_BINDINGS} from './account';
import {TEST_SERVICE_BINDINGS} from './test';


export * from './account';
export * from './test';
// Include bindings that you want to have globally throughout our app
export var APP_SERVICES_BINDINGS: Array<any> = [
  ACCOUNT_SERVICE_BINDINGS,
  TEST_SERVICE_BINDINGS
];
