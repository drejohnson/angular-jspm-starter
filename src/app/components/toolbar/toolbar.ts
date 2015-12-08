import { Component, Inject } from 'ng-forward';
import html from '../../common/template';
import TEMPLATE from './toolbar.html!text';
import STYLES from './toolbar.css!';

import Logout from '../logout/logout';

/*
 * App Component
 * Top Level Component
 */

// Simple external file component example
@Component({
  selector: 'toolbar',
  directives: [Logout],
  providers: [],
  bindings: [STYLES],
  controllerAs: 'vm',
  // include our .html and .css file
  styles: [],
  template: TEMPLATE
})
@Inject('auth', '$timeout', '$mdSidenav', '$mdUtil', '$log')
export default class Toolbar {
  title: string;
  openLeftMenu: any;
  constructor(public auth, public $timeout, public $mdSidenav, public $mdUtil, public $log) {
    Object.assign(this, {
      title: 'toolbar'
    });
    const buildToggler = (navID) => {
      navID = navID || 'left';
      const debounceFn = this.$mdUtil.debounce(() => {
        this.$mdSidenav(navID)
          .toggle()
          .then(() => {
            this.$log.log('Sidenav toggle(' + navID + ') initialized');
          });
      }, 200);
      return debounceFn;
    };
    this.openLeftMenu = buildToggler('left');
  }
};
