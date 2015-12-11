import { Component, Inject, Resolve } from 'ng-forward';
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
@Inject('PageTitleService', 'TestService', '$log')
// Home Controller
export default class Home {
  public title:string;
  public desc:string;
  public num:string;
  @Resolve()
  @Inject('PageTitleService', 'PageMetaTagsService')
  static setTags(PageTitleService, PageMetaTagsService) {
    return {
      title: PageTitleService.setTitle('Home'),
      description: PageMetaTagsService.setMetaDescription('This is home page description'),
      image: PageMetaTagsService.setMetaImage('/images/logos/logo-red.svg')
    };
  }
  constructor(private PageTitleService, private TestService, private $log) {
    this.title = PageTitleService.getTitle();
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
