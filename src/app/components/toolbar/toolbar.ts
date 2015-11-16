import { Component, Inject } from 'ng-forward';
import html from '../../common/template';
import TEMPLATE from './toolbar.html!text';
import STYLES from './toolbar.css!';

/*
 * App Component
 * Top Level Component
 */

const INIT = new WeakMap();
const LOG = new WeakMap();
const AUTH = new WeakMap();

// Simple external file component example
@Component({
  selector: 'toolbar',
  directives: [],
  providers: [],
  bindings: [STYLES],
  controllerAs: 'vm',
  // include our .html and .css file
  styles: [],
  template: TEMPLATE
})
@Inject('$timeout', '$mdSidenav', '$mdUtil', '$auth', '$log')
export default class Toolbar {
  title: string;
  $mdUtil: any;
  $mdSidenav: any;
  openLeftMenu: any;
  isAuthenticated: any;
  constructor($timeout, $mdSidenav, $mdUtil, $auth, $log) {
    Object.assign(this, {
      $timeout,
      $mdSidenav,
      $mdUtil,
      title: 'toolbar'
    });
    LOG.set(this, $log);
    AUTH.set(this, $auth);
    const buildToggler = (navID) => {
      navID = navID || 'left';
      const debounceFn = this.$mdUtil.debounce(() => {
        this.$mdSidenav(navID)
          .toggle()
          .then(() => {
            LOG.get(this).log('Sidenav toggle(' + navID + ') initialized');
          });
      }, 200);
      return debounceFn;
    };
    this.openLeftMenu = buildToggler('left');
    this.isAuthenticated = () => AUTH.get(this).isAuthenticated();
  }
};
