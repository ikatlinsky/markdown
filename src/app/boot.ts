import 'angular2/bundles/angular2-polyfills';
import {bootstrap} from 'angular2/platform/browser';
import {MarkdownAppComponent} from './markdownApp';


import {LocalStorageService} from './services/localStorage.service'

bootstrap(MarkdownAppComponent, [LocalStorageService]);