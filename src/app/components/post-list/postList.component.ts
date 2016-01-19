import {Component} from 'angular2/core';
import {NgFor} from 'angular2/common';
import { ROUTER_DIRECTIVES } from 'angular2/router';

import { PostService } from '../../services/post.service';

@Component({
  selector: 'post-list',
  templateUrl: '/app/components/post-list/postList.component.html',
  bindings: [PostService],
  directives: [ROUTER_DIRECTIVES, NgFor]
})

export class PostListComponent {

  public newPost: string;

  public titles: Array<string>;

  constructor(postService: PostService) {
    this.titles = postService.getTitles() || [];
  }

  public addPost() {
    this.titles.push(this.newPost);
    this.newPost = '';
  }
}