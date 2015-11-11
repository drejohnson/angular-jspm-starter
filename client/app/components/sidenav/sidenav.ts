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
  title: string;
  constructor($mdSidenav, $log) {
    Object.assign(this, {
      $mdSidenav,
      $log,
      title: 'sidenav',
      openLeftMenu: () => $mdSidenav('left').toggle(),
      // navigation: [
      //   { state: 'docu-series', label: 'Docu-Series' },
      //   { state: 'radio-tv-film', label: 'Radio-TV-Film' },
      //   { state: 'music', label: 'Music' },
      //   { state: 'comedy', label: 'Comedy' },
      //   { state: 'lifestyle', label: 'Lifestyle' }
      // ],
      section: [
        {
          name: 'Channels',
          type: 'toggle',
          routes: [
            {
              name: 'Docu-Series',
              type: 'link',
              state: 'docu-series'
            },
            {
              name: 'Radio-TV-Film',
              type: 'link',
              state: 'radio-tv-film'
            },
            {
              name: 'Music',
              type: 'link',
              state: 'music'
            },
            {
              name: 'Comedy',
              type: 'link',
              state: 'comedy'
            },
            {
              name: 'Lifestyle',
              type: 'link',
              state: 'lifestyle'
            }
          ]
        }
      ]
    });
  }
};
