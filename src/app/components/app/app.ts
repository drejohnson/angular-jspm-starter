import 'angular';
import { Component, StateConfig, Inject } from 'ng-forward';
import APP_PIPES from '../../pipes/pipes';
import { OnConfig, OnRun } from '../../core/blocks/blocks';

import Toolbar from '../toolbar/toolbar';
import Sidenav from '../sidenav/sidenav';

import Home from '../home/home';
import Connect from '../connect/connect';
import Login from '../login/login';
import Logout from '../logout/logout';
import Signup from '../signup/signup';
import Profile from '../profile/profile';

import STYLES from './app.css!';

angular.module('app.core', [])
  .run(OnRun)
  .config(OnConfig);

/*
 * App Component
 * Top Level Component
 */

@Component({
  selector: 'app',
  pipes: [APP_PIPES],
  directives: [Sidenav, Toolbar],
  providers: ['app.core'],
  bindings: [STYLES],
  controllerAs: 'vm',
  // include our .html and .css file
  // styles: [STYLES],
  template: `
  <div layout="row" layout-fill flex>
     <sidenav layout="row"></sidenav>
     <div layout="column" flex>
       <toolbar></toolbar>
       <md-content layout="column" flex ng-outlet></md-content>
     </div>
   </div>
  `
})
@StateConfig([
  { name: 'home', url: '/', component: Home },
  { name: 'connect', url: '/connect', component: Connect }
])
@Inject('$log')
export class App {
  title: string;
  constructor(public $log) {
    this.title = 'App';
    this.$log.log(`${this.title} component`);
  }
}
