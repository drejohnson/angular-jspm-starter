import { Component, Inject } from 'ng-forward';
import html from '../../common/template';
import TEMPLATE from './profile.html!text';
import STYLES from './profile.css!';

/*
 * App Component
 * Top Level Component
 */

// Simple external file component example
@Component({
  selector: 'profile',
  directives: [],
  providers: [],
  bindings: [STYLES],
  controllerAs: 'vm',
  template: TEMPLATE
})
@Inject('$log', 'auth')
export default class Profile {
  title: string;
  requiresLogin: boolean;
  profile: any;
  constructor(public $log, public auth) {
    this.title = 'Profile';
    // On load
    this.resolve();
  }

  resolve() {
    // this.auth = this.auth;
    this.profile = this.auth.profile;
    this.$log.log(this.profile);
  }
};
