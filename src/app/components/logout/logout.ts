import { Component, Inject } from 'ng-forward';
import html from '../../common/template';
import TEMPLATE from './logout.html!text';
import STYLES from './logout.css!';

/*
 * App Component
 * Top Level Component
 */

const AUTH = new WeakMap();
const LOCATION = new WeakMap();
const MDTOAST = new WeakMap();
const LOG = new WeakMap();

angular.module('logout.config', ['ui.router'])
  .config(($stateProvider) => {
    $stateProvider
      .state('logout', {
        url: '/logout',
        template: null,
        resolve: {
        }
      });
  });

// Simple external file component example
@Component({
  selector: 'logout',
  directives: [],
  providers: ['logout.config'],
  bindings: [STYLES],
  controllerAs: 'vm',
  // include our .html and .css file
  styles: [],
  template: TEMPLATE
})
@Inject('$log', '$location', '$auth', '$mdToast')
export default class Logout {
  title: string;
  constructor($log, $location, $auth, $mdToast) {
    this.title = 'Logout';
    LOG.set(this, $log);
    LOCATION.set(this, $location);
    AUTH.set(this, $auth);
    MDTOAST.set(this, $mdToast);
    INIT.set(this, () => {
      LOG.get(this).log(`${this.title} component`);

      if (!AUTH.get(this).isAuthenticated()) { return; }
      AUTH.get(this).logout().then(() => {
        MDTOAST.get(this).show(
          MDTOAST.get(this).simple()
          .content('You have been logged out!')
          .position('top left')
          .hideDelay(3000));
        LOCATION.get(this).path('/');
      });
      LOG.get(this).log('Logged out');
    });
    // On load
    this.resolve();
  }

  /**
   * Handles on load processing, and loading initial data
 */
  resolve() {
    INIT.get(this)();
  }
};
