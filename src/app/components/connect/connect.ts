import { Component, Inject } from 'ng-forward';
import html from '../../common/template';
import TEMPLATE from './connect.html!text';
import STYLES from './connect.css!';

/*
 * App Component
 * Top Level Component
 */

const INIT = new WeakMap();
const SERVICE = new WeakMap();
const LOG = new WeakMap();

angular.module('connect.config', ['ui.router'])
  .config(($stateProvider) => {
    $stateProvider
      .state('connect', {
        url: '/connect',
        template: '<connect></connect>',
        resolve: {}
      });
  });

// Simple external file component example
@Component({
  selector: 'connect',
  directives: [],
  providers: ['connect.config'],
  bindings: [STYLES],
  controllerAs: 'vm',
  // include our .html and .css file
  styles: [],
  template: TEMPLATE
})
@Inject('$log')
export default class Connect {
  title: string;
  constructor($log) {
    this.title = 'Connect';
    LOG.set(this, $log);
    INIT.set(this, () => {
      // LOG.get(this).log(` component`);
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
