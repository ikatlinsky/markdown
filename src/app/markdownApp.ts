import {Component} from 'angular2/core';
import {NgFor} from 'angular2/common';

import {ROUTER_PROVIDERS, RouteConfig, RouteParams} from 'angular2/router';

import { MarkdownEditorComponent } from './components/editor/editor.component';
import { PostService } from './services/post.service';

@Component({
  selector: 'markdown-app',
  templateUrl: '/app/markdownApp.html',
  bindings: [PostService],
  directives: [MarkdownEditorComponent, NgFor]
})

export class MarkdownAppComponent {

  public titles: Array<string>;

  constructor(postService: PostService) {
    this.titles = postService.getTitles() || [];
  }

  public addPost(title: string) {
    this.titles.push(title);
  }
}