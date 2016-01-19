import 'angular2/bundles/angular2-polyfills';
import {bootstrap} from 'angular2/platform/browser';

import {Component, provide} from 'angular2/core';

import { APP_BASE_HREF, ROUTER_PROVIDERS, ROUTER_DIRECTIVES, RouteConfig, RouteParams } from 'angular2/router';

import {LocalStorageService} from './services/localStorage.service'
import { PostListComponent } from './components/post-list/postList.component';
import { PostComponent } from './components/post/post.component';

@Component({
  selector: 'app',
  templateUrl: '/app/app.html',
  directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
  { path: '/', component: PostListComponent, as: 'PostList' },
  { path: '/post/:name', component: PostComponent, as: 'Post' }
])
export class App {
}

bootstrap(App, [LocalStorageService, ROUTER_PROVIDERS, provide(APP_BASE_HREF, { useValue: '/' })]);