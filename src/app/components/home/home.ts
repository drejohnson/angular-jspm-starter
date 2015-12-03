import { Component, Inject } from 'ng-forward';
import html from '../../common/template';
import TEMPLATE from './home.html!text';
import STYLES from './home.css!';

/*
 * App Component
 * Top Level Component
 */

@Component({
  selector: 'home',
  directives: [],
  providers: [],
  bindings: [STYLES],
  controllerAs: 'vm',
  // include our .html and .css file
  styles: [],
  template: TEMPLATE
})
@Inject('TestService', '$log')
// Home Controller
export default class Home {
  title: string;
  num: string;
  constructor(public TestService, public $log) {
    this.title = 'Home';
    // On load
    this.resolve();
  }

  /**
   * Handles on load processing, and loading initial data
 */
  resolve() {
    this.$log.log(`${this.title} component`);
    this.TestService.getValue().then(val => this.num = val);
  }
}
