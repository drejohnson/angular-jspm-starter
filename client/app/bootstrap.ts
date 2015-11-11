/// <reference path="../typings/_references.d.ts" />

import 'angular';
import 'angular-animate';
import 'angular-sanitize';
import 'angular-material';
import 'angular-ui-router';
import 'reflect-metadata';
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
  // Angular's router services/bindings
  'ngSanitize',
  'ngAnimate',
  'ngMaterial',
  'ui.router'

  // Our collection of services from /services
  // APP_SERVICES_BINDINGS
];

/*
 * Bootstrap our Angular app with a top level component `App` and inject
 * our Services and Providers into Angular's dependency injection
 */

bootstrap(App, [
  UNIVERSAL_BINDINGS
]);
