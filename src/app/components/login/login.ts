import { Component, Inject } from 'ng-forward';
import html from '../../common/template';
import TEMPLATE from './login.html!text';
import STYLES from './login.css!';

/*
 * App Component
 * Top Level Component
 */

const INIT = new WeakMap();
const AUTH = new WeakMap();
const LOCATION = new WeakMap();
const MDTOAST = new WeakMap();
const LOG = new WeakMap();

angular.module('login.config', ['ui.router'])
  .config(($stateProvider) => {
    $stateProvider
      .state('login', {
        url: '/login',
        template: '<login></login>',
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
  selector: 'login',
  directives: [],
  providers: ['login.config'],
  bindings: [STYLES],
  controllerAs: 'vm',
  // include our .html and .css file
  styles: [],
  template: TEMPLATE
})
@Inject('$log', '$location', '$auth', '$mdToast')
export default class Login {
  title: string;
  user: any;
  email: string;
  password: string;
  constructor($log, $location, $auth, $mdToast) {
    this.title = 'Login';
    this.user = {
      email: this.email,
      password: this.password
    };
    LOG.set(this, $log);
    LOCATION.set(this, $location);
    AUTH.set(this, $auth);
    MDTOAST.set(this, $mdToast);
    LOG.get(this).log(`${this.title} component`);
  }
  login() {
    AUTH.get(this).login(this.user).then(() => {
      MDTOAST.get(this).show(
        MDTOAST.get(this).simple()
        .content('You have successfully signed in!')
        .position('top left')
        .hideDelay(3000));
      LOCATION.get(this).path('/');
    })
    .catch((error) => {
      MDTOAST.get(this).show(
        MDTOAST.get(this).simple()
        .content(error.data.message, error.status)
        .position('top left')
        .hideDelay(3000));
    });
  }

  authenticate(provider) {
    AUTH.get(this).authenticate(provider).then(() => {
      MDTOAST.get(this).show(
        MDTOAST.get(this).simple()
        .content('You have successfully signed in with ' + provider + '!')
        .position('top left')
        .hideDelay(3000));
      $location.path('/');
    })
    .catch((error) => {
      if (error.error) {
        // Popup error - invalid redirect_uri, pressed cancel button, etc.
        MDTOAST.get(this).show(
          MDTOAST.get(this).simple()
          .content(error.error)
          .position('top left')
          .hideDelay(3000));
      } else if (error.data) {
        // HTTP response error from server
        MDTOAST.get(this).show(
          MDTOAST.get(this).simple()
          .content(error.data.message, error.status)
          .position('top left')
          .hideDelay(3000));
      } else {
        MDTOAST.get(this).show(
          MDTOAST.get(this).simple()
          .content(error)
          .position('top left')
          .hideDelay(3000));
      }
    });
  };
};
