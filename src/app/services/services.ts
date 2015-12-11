/// <reference path="../../typings/tsd.d.ts" />

import {PAGE_TITLE_SERVICE_BINDINGS} from './page-title';
import {PAGE_META_SERVICE_BINDINGS} from './page-meta';
import {TEST_SERVICE_BINDINGS} from './test';

export * from './page-title';
export * from './page-meta';
export * from './test';
// Include bindings that you want to have globally throughout our app
export var APP_SERVICES_BINDINGS:Array<any> = [
  PAGE_TITLE_SERVICE_BINDINGS,
  PAGE_META_SERVICE_BINDINGS,
  TEST_SERVICE_BINDINGS
];
