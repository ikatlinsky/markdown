import {Component} from 'angular2/core';

import {LocalStorageService} from '../../services/localStorage.service';
import {MarkdownService} from '../../services/markdown.service';

@Component({
    selector: 'markdown-editor',
    templateUrl: '/app/components/editor/editor.component.html',
    bindings: [MarkdownService]
})

export class MarkdownEditorComponent {

    public html: string;
    public initVal: string;

    private localStorage: LocalStorageService;
    private md: MarkdownService;
    private storageKey = 'markdown-app';

    constructor(localStorageService: LocalStorageService, markdownService: MarkdownService) {
        this.localStorage = localStorageService;
        this.md = markdownService;

        this.html = '';

        const text = this.localStorage.retrieve(this.storageKey);
        this.initVal = text ? text.text : '';

        this.updateValue(this.initVal);
    }

    public updateValue(val: string) {
        this.html = this.md.convert(val);
    }

    public saveMarkdown(val: any) {
        this.localStorage.store(this.storageKey, { text: val });
    }

    public deleteMarkdown() {
        this.localStorage.store(this.storageKey, {});
    }
}