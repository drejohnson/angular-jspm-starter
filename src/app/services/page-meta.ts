/// <reference path="../../typings/tsd.d.ts" />

import {Injectable, Inject} from 'ng-forward';

interface IPageMetaTagsService {
  getMetaDescription():string;
	setMetaDescription(title:string):void;
  getMetaImage():string;
	setMetaImage(title:string):void;
}

@Injectable()
@Inject()
export class PageMetaTagsService implements IPageMetaTagsService {
  metaDescription: string;
  metaImage: string;

  constructor() {}

  getMetaDescription():string {
		return this.metaDescription;
	}

	setMetaDescription(description:string):void {
		this.metaDescription = description;
	}

  getMetaImage():string {
		return this.metaImage;
	}

	setMetaImage(image:string):void {
		this.metaImage = image;
	}

}

export const PAGE_META_SERVICE_BINDINGS = [
  PageMetaTagsService,
];
