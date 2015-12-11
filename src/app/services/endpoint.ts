/// <reference path="../../typings/tsd.d.ts" />

import {Injectable, Inject} from 'ng-forward';

@Injectable()
@Inject('$q')
export class EndpointService {
  private baseUri:string = "http://localhost:8080/api/";
  private title:string;

  constructor() {}

  public getUrl(moduleName:string):string {
    return this.baseUri + moduleName + ".json";
  }

  public getUrlForId(moduleName:string, id:number):string {
    return this.getUrl(moduleName) + "/" + id;
  }
}

export const ENDPOINT_SERVICE_BINDINGS = [
  EndpointService
];
