import { Component, Inject } from 'ng-forward';
import html from '../../common/template';
import TEMPLATE from './home.html!text';
import STYLES from './home.css!';

/*
 * App Component
 * Top Level Component
 */

const INIT = new WeakMap();
const SERVICE = new WeakMap();
const LOG = new WeakMap();
const ELEM = new WeakMap();
const ATTRS = new WeakMap();

angular.module('home.config', [])
  .config(($stateProvider) => {
    $stateProvider
      .state('home', {
        url: '/',
        template: '<home x-large></home>',
        resolve: {}
      });
  });

@Component({
  selector: 'home',
  directives: [],
  providers: ['home.config'],
  bindings: [STYLES],
  controllerAs: 'vm',
  // include our .html and .css file
  styles: [],
  template: TEMPLATE
})
@Inject('$log', '$attrs', '$element')
// Home Controller
export default class Home {
  title: string;
  constructor($log, $attrs, $element) {
    LOG.set(this, $log);
    ELEM.set(this, $element);
    ATTRS.set(this, $attrs);
    this.title = 'Home';
    INIT.set(this, () => {
      LOG.get(this).log(`${this.title} component`);
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
}
