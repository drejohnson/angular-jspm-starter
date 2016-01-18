/// <reference path="../../typings/tsd.d.ts" />

import {Injectable, Inject} from 'ng-forward';

interface IPageTitleService {
  getTitle():string;
	setTitle(title:string):void;
}

@Injectable()
@Inject()
export class PageTitleService implements IPageTitleService {
  pageTitle:string;

  constructor() {}

  getTitle():string {
		return this.pageTitle;
	}

	setTitle(title:string):void {
		this.pageTitle = title;
	}
}

export const PAGE_TITLE_SERVICE_BINDINGS = [
  PageTitleService,
];
