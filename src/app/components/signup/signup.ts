import { Component, Inject } from 'ng-forward';
import html from '../../common/template';
import TEMPLATE from './signup.html!text';
import STYLES from './signup.css!';

/*
 * App Component
 * Top Level Component
 */

const AUTH = new WeakMap();
const LOCATION = new WeakMap();
const MDTOAST = new WeakMap();
const LOG = new WeakMap();

angular.module('signup.config', ['ui.router'])
  .config(($stateProvider) => {
    $stateProvider
      .state('signup', {
        url: '/signup',
        template: '<signup></signup>',
        resolve: {
          skipIfLoggedIn: ($q, $auth) => {
            const deferred = $q.defer();
            if ($auth.isAuthenticated()) {
              deferred.reject();
            } else {
              deferred.resolve();
            }
            return deferred.promise;
          }
        }
      });
  });

// Simple external file component example
@Component({
  selector: 'signup',
  directives: [],
  providers: ['signup.config'],
  bindings: [STYLES],
  controllerAs: 'vm',
  // include our .html and .css file
  styles: [],
  template: TEMPLATE
})
@Inject('$log', '$location', '$auth', '$mdToast')
export default class Signup {
  title: string;
  user: any;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  constructor($log, $location, $auth, $mdToast) {
    this.title = 'Signup';
    this.user = {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      password: this.password
    };
    LOCATION.set(this, $location);
    AUTH.set(this, $auth);
    MDTOAST.set(this, $mdToast);
    LOG.set(this, $log);
    LOG.get(this).log(`${this.title} component`);
  }

  signup() {
    AUTH.get(this).signup(this.user).then((response) => {
      AUTH.get(this).setToken(response);
      LOCATION.get(this).path('/');
      MDTOAST.get(this).show(
        MDTOAST.get(this).simple()
        .content('You have successfully created a new account and have been signed-in')
        .position('top left')
        .hideDelay(3000));
    })
    .catch((response) => {
      MDTOAST.get(this).show(
        MDTOAST.get(this).simple()
        .content(response.data.message)
        .position('top left')
        .hideDelay(3000));
    });
  }
};
