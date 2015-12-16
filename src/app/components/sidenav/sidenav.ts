import { Component, Inject } from 'ng-forward';
import html from '../../common/template';
import TEMPLATE from './sidenav.html!text';
import STYLES from './sidenav.css!';

/*
 * App Component
 * Top Level Component
 */

// Simple external file component example
@Component({
  selector: 'sidenav',
  directives: [],
  providers: [],
  bindings: [STYLES],
  controllerAs: 'vm',
  template: TEMPLATE
})
@Inject('$mdSidenav', '$log')
export default class Sidenav {
  private title: string;
  private sections:any;
  constructor(private MenuService, private $mdSidenav, private $log) {
    Object.assign(this, {
      $mdSidenav,
      $log,
      title: 'sidenav',
      openLeftMenu: () => $mdSidenav('left').toggle(),
      sections: [
        {
          name: 'Docu-Series',
          state: 'docu-series'
        },
        {
          name: 'Radio-TV-Film',
          type: 'link',
          state: 'radio-tv-film'
        },
        {
          name: 'Music',
          state: 'music'
        },
        {
          name: 'Comedy',
          state: 'comedy'
        },
        {
          name: 'Lifestyle',
          state: 'lifestyle'
        },
        {
          name: 'Audio + Talk',
          state: 'audio-talk'
        },
        {
          name: 'Blog',
          state: 'blog'
        }
      ]
    });
  }
};
