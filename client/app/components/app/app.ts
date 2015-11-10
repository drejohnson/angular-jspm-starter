import 'angular';
import { Component, Inject } from 'ng-forward';
import APP_COMPONENTS from '../components';
import APP_PIPES from '../../pipes/pipes';
import { OnConfig, OnRun } from '../../core/blocks/blocks';

import STYLES from './app.css!';

const LOG = new WeakMap();

angular.module('app.config', ['ui.router', 'ngMaterial'])
  .run(OnRun)
  .config(OnConfig);

/*
 * App Component
 * Top Level Component
 */

@Component({
  selector: 'app',
  pipes: [APP_PIPES],
  directives: [APP_COMPONENTS],
  providers: ['app.config'],
  bindings: [STYLES],
  controllerAs: 'vm',
  // include our .html and .css file
  // styles: [STYLES],
  template: `
  <div layout="row" layout-fill flex>
     <sidenav layout="row"></sidenav>
     <div layout="column" flex>
       <toolbar></toolbar>
       <md-content layout="column" flex layout-padding ui-view></md-content>
     </div>
   </div>
  `
})
@Inject('$log')
export class App {
  title: string;
  constructor($log) {
    this.title = 'App';
    LOG.set(this, $log);
    LOG.get(this).log(`${this.title} component`);
  }
}
