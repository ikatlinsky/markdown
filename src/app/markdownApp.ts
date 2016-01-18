import {Component} from 'angular2/core';

import { MarkdownEditorComponent } from './components/editor/editor.component';
import { LocalStorageService } from './services/localStorage.service';

@Component({
  selector: 'markdown-app',
  templateUrl: '/app/markdownApp.html',
  directives: [MarkdownEditorComponent]
})

export class MarkdownAppComponent {

  constructor() {

  }
}