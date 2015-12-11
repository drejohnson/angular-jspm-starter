/// <reference path="../typings/tsd.d.ts" />

import 'reflect-metadata';
import 'angular';
import 'angular-animate';
import 'angular-cookies';
import 'angular-sanitize';
import 'angular-material';
import 'angular-ui-router';
import 'angular-storage';
import 'angular-jwt';
import 'auth0-angular';
import { bootstrap } from 'ng-forward';

/*
 * App Services
 * our collection of injectables services
 */
import {APP_SERVICES_BINDINGS} from './services/services';

/*
 * App Component
 * our top level component that holds all of our components
 */
import {App} from './components/app/app';

/*
 * Universal injectables
 */
const UNIVERSAL_BINDINGS = [
  'ngSanitize',
  'ngCookies',
  'ngAnimate',
  'ngMaterial',
  'auth0',
  'angular-storage',
  'angular-jwt',
  'ui.router',
  // Our collection of services from /services
  APP_SERVICES_BINDINGS
];

/*
 * Bootstrap our Angular app with a top level component `App` and inject
 * our Services and Providers into Angular's dependency injection
 */

bootstrap(App, [
  UNIVERSAL_BINDINGS
]);
