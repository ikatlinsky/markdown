import {Injectable} from 'angular2/core';

import {LocalStorageService} from './localStorage.service'

@Injectable()
export class PostService {

  private storage: any;
  private storageKey: string = 'markdown-app';

  private posts: Object;

  constructor(LocalStorage: LocalStorageService) {
    this.storage = LocalStorage;
    this.posts = {};

    this.getPosts();
  }

  private checkPosts() {
    if(!this.posts) {
      this.getPosts();
    }
  }

  public getTitles() {
    const titles = [];

    this.checkPosts();

    Object.keys(this.posts).forEach(title => titles.push(title));

    return titles;
  }

  public getPost(title: string) {
    this.checkPosts();

    return this.posts[title];
  }

  public getPosts() {
    this.posts = this.storage.retrieve(this.storageKey) || {};

    return this.posts;
  }

  public savePost(title: string, post: string) {
    this.checkPosts();

    this.posts[title] = post;

    this.storage.store(this.storageKey, this.posts);
  }

  public deletePost(title: string) {
    this.checkPosts();

    delete this.posts[title];

    this.storage.store(this.storageKey, this.posts);
  }

}