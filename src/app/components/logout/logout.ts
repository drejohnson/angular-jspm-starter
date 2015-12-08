import { Component, Inject } from 'ng-forward';
import html from '../../common/template';
import TEMPLATE from './logout.html!text';
import STYLES from './logout.css!';

// declare the specific property on our own
interface Logout {
  store: any;
};

/*
 * App Component
 * Top Level Component
 */

// Simple external file component example
@Component({
  selector: 'logout',
  directives: [],
  providers: [],
  bindings: [STYLES],
  controllerAs: 'vm',
  // include our .html and .css file
  styles: [],
  template: TEMPLATE
})
@Inject('$log', '$location', 'auth', 'store')
export default class Logout {
  title: string;
  logout: any;
  constructor(public $log, public $location, public auth, public store) {
    this.title = 'Logout',

    // On load
    this.resolve();
  }

  /**
   * Handles on load processing, and loading initial data
 */
  resolve() {
    this.logout = () => {
      this.auth.signout();
      this.store.remove('profile');
      this.store.remove('token');
      this.$location.path('/');
    };
  }
};
