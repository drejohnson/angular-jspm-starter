import { Component, Inject, Resolve } from 'ng-forward';
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
@Inject('PageTitleService', '$log', 'auth')
export default class Profile {
  public title:string;
  public requiresLogin:boolean;
  public profile:any;
  @Resolve()
  @Inject('PageTitleService', 'PageMetaTagsService')
  static setTags(PageTitleService, PageMetaTagsService) {
    return {
      title: PageTitleService.setTitle('Profile'),
      description: PageMetaTagsService.setMetaDescription('This is profile page description'),
      image: PageMetaTagsService.setMetaImage('/images/logos/logo-red.svg')
    };
  }
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
