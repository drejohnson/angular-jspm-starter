/// <reference path="../../typings/_references.d.ts" />

import {TEST_SERVICE_BINDINGS} from './test';


export * from './test';
// Include bindings that you want to have globally throughout our app
export var APP_SERVICES_BINDINGS: Array<any> = [
  TEST_SERVICE_BINDINGS
];
