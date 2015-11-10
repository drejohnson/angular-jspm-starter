/// <reference path="../typings/_references.d.ts" />

import {Injectable, Inject} from 'ng-forward';

const HTTP = new WeakMap();
const LOG = new WeakMap();

@Injectable()
@Inject('$http', '$log')
class PostsService {
  constructor($http, $log) {
    HTTP.set(this, $http);
    LOG.set(this, $log);
    this.apiHost = '/api';
    this.name = 'Posts Service';
  }

  getAllPosts() {
    return HTTP.get(this).get(`${this.apiHost}/posts`)
      .then(results => results.data )
      .catch(err => LOG.get(this).log(err));
  }

  getPost(id) {
    return HTTP.get(this).get(`${this.apiHost}/posts/${id}`)
      .then(results => results.data )
      .catch(err => LOG.get(this).log(err));
  }
}

export default PostsService;
