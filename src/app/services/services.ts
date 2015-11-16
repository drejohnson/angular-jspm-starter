/// <reference path="../../typings/_references.d.ts" />

import {ACCOUNT_SERVICE_BINDINGS} from './account';


export * from './account';
// Include bindings that you want to have globally throughout our app
export var APP_SERVICES_BINDINGS: Array<any> = [
  ACCOUNT_SERVICE_BINDINGS
];
