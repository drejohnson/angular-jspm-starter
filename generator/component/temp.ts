import { Component, Inject } from 'ng-forward';
import html from '../../common/template';
import TEMPLATE from './<%= name %>.html!text';
import STYLES from './<%= name %>.css!';

/*
 * App Component
 * Top Level Component
 */

const INIT = new WeakMap();
const SERVICE = new WeakMap();
const LOG = new WeakMap();

angular.module('<%= name %>.config', ['ui.router'])
  .config(($stateProvider) => {
    $stateProvider
      .state('<%= name %>', {
        url: '/<%= name %>',
        template: '<<%= name %>></<%= name %>>',
        resolve: {}
      });
  });

// Simple external file component example
@Component({
  selector: '<%= name %>',
  directives: [],
  providers: ['<%= name %>.config'],
  bindings: [STYLES],
  controllerAs: 'vm',
  // include our .html and .css file
  styles: [],
  template: TEMPLATE
})
@Inject('$log')
export default class <%= camelCaseName %> {
  title: string;
  constructor($log) {
    this.title = '<%= upCaseName %>';
    LOG.set(this, $log);
    INIT.set(this, () => {
      // LOG.get(this).log(`${this.title} component`);
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
