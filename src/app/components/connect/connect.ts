import { Component, Inject } from 'ng-forward';
import html from '../../common/template';
import TEMPLATE from './connect.html!text';
import STYLES from './connect.css!';

/*
 * App Component
 * Top Level Component
 */

// Simple external file component example
@Component({
  selector: 'connect',
  directives: [],
  // providers: ['connect.config'],
  bindings: [STYLES],
  controllerAs: 'vm',
  // include our .html and .css file
  styles: [],
  template: TEMPLATE
})
@Inject('$log')
export default class Connect {
  title: string;
  constructor(public $log) {
    this.title = 'Connect';
    // On load
    this.resolve();
  }

  /**
   * Handles on load processing, and loading initial data
 */
  resolve() {
    this.$log.log(`${this.title} component`);
  }
};
