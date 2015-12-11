import { Component, Inject, Resolve } from 'ng-forward';
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
  providers: [],
  bindings: [STYLES],
  controllerAs: 'vm',
  // include our .html and .css file
  styles: [],
  template: TEMPLATE
})
@Inject('$http', 'auth', 'store', '$location', '$log')
export default class Connect {
  title: string;
  connect: any;

  @Resolve()
  @Inject('PageTitleService', 'PageMetaTagsService')
  static setTags(PageTitleService, PageMetaTagsService) {
    return {
      title: PageTitleService.setTitle('Connect'),
      description: PageMetaTagsService.setMetaDescription('This is connect page description'),
      image: PageMetaTagsService.setMetaImage('/images/logos/logo-red.svg')
    };
  }
  constructor(public $http, public auth, public store, public $location, public $log) {
    this.title = 'Connect';
    // On load
    this.resolve();
  }

  /**
   * Handles on load processing, and loading initial data
 */
  resolve() {
    this.connect = () => {
      this.auth.signin({}, (profile, id_token, access_token, state, refresh_token) => {
        // Success callback
        this.store.set('profile', profile);
        this.store.set('token', id_token);
        this.$location.path('/profile');
      }, (error) => {
        // Error callback
        this.$log.log('There was an error logging in', error);
      });
    };
    this.$log.log(`${this.title} component`);
  }
};
