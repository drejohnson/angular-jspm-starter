import { Component, Inject } from 'ng-forward';
import html from '../../common/template';
import TEMPLATE from './profile.html!text';
import STYLES from './profile.css!';

/*
 * App Component
 * Top Level Component
 */

const SERVICE = new WeakMap();
const AUTH = new WeakMap();
const LOCATION = new WeakMap();
const MDTOAST = new WeakMap();
const LOG = new WeakMap();

angular.module('profile.config', ['ui.router'])
  .config(($stateProvider) => {
    $stateProvider
      .state('profile', {
        url: '/profile',
        template: '<profile></profile>',
        resolve: {
          loginRequired: ($q, $location, $auth) => {
            const deferred = $q.defer();
            if ($auth.isAuthenticated()) {
              deferred.resolve();
            } else {
              $location.path('/login');
            }
            return deferred.promise;
          }
        }
      });
  });

// Simple external file component example
@Component({
  selector: 'profile',
  directives: [],
  providers: ['profile.config'],
  bindings: [STYLES],
  controllerAs: 'vm',
  template: TEMPLATE
})
@Inject('$log', '$auth', '$mdToast', 'AccountService')
export default class Profile {
  title: string;
  user: any;
  constructor($log, $auth, $mdToast, AccountService) {
    this.title = 'Profile';
    LOCATION.set(this, $location);
    AUTH.set(this, $auth);
    MDTOAST.set(this, $mdToast);
    SERVICE.set(this, AccountService);
    LOG.set(this, $log);
    LOG.get(this).log(`${this.title} component`);
    this.getProfile();
  }

  getProfile() {
    AccountService.getProfile().then((response) => {
      this.user = response.data;
    })
    .catch((response) => {
      MDTOAST.get(this).show(
        MDTOAST.get(this).simple()
        .content(response.data.message, response.status)
        .position('top left')
        .hideDelay(3000));
    });
  }

  updateProfile() {
    AccountService.updateProfile(this.user).then((response) => {
      MDTOAST.get(this).show(
        MDTOAST.get(this).simple()
        .content('Profile has been updated')
        .position('top left')
        .hideDelay(3000));
    })
    .catch((response) => {
      MDTOAST.get(this).show(
        MDTOAST.get(this).simple()
        .content(response.data.message, response.status)
        .position('top left')
        .hideDelay(3000));
    });
  }

  link(provider) {
    AUTH.get(this).link(provider).then(() => {
      MDTOAST.get(this).show(
        MDTOAST.get(this).simple()
        .content('You have successfully linked a ' + provider + ' account')
        .position('top left')
        .hideDelay(3000));
    })
    .catch((response) => {
      MDTOAST.get(this).show(
        MDTOAST.get(this).simple()
        .content(response.data.message, response.status)
        .position('top left')
        .hideDelay(3000));
    });
  }

  unlink(provider) {
    AUTH.get(this).unlink(provider).then(() => {
      MDTOAST.get(this).show(
        MDTOAST.get(this).simple()
        .content('You have unlinked a ' + provider + ' account')
        .position('top left')
        .hideDelay(3000));
      this.getProfile();
    })
    .catch((response) => {
      MDTOAST.get(this).show(
        MDTOAST.get(this).simple()
        .content(response.data ? response.data.message : 'Could not unlink ' + provider + ' account', response.status)
        .position('top left')
        .hideDelay(3000));
    });
  }
};
