import 'angular';
import { Component, StateConfig, Inject } from 'ng-forward';
import APP_PIPES from '../../pipes/pipes';
import { OnConfig, OnRun } from '../../core/blocks/blocks';

import Toolbar from '../toolbar/toolbar';
import Sidenav from '../sidenav/sidenav';

import Home from '../home/home';
import Connect from '../connect/connect';
import Profile from '../profile/profile';
// import Logout from '../logout/logout';

import MD_STYLES from 'angular-material/angular-material.css!';
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
  bindings: [MD_STYLES, STYLES],
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
  { name: 'connect', url: '/connect', component: Connect },
  { name: 'profile', url: '/profile', component: Profile, data: { requiresLogin: true } }
])
@Inject('PageTitleService', '$log')
export class App {
  title: string;
  constructor(public PageTitleService, public $log) {
    this.title = 'App';
    this.$log.log(`${this.title} component`);
  }
  getTitle() {
    return this.PageTitleService.getTitle();
  }
}
