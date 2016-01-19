import {Component, Input} from 'angular2/core';

import {PostService} from '../../services/post.service';
import {MarkdownService} from '../../services/markdown.service';

@Component({
    selector: 'editor',
    templateUrl: '/app/components/editor/editor.component.html',
    bindings: [MarkdownService, PostService]
})

export class EditorComponent {

    @Input() title: string;

    public html: string;
    public initVal: string;

    private postService: PostService;
    private md: MarkdownService;

    constructor(postService: PostService, markdownService: MarkdownService) {
        this.postService = postService;
        this.md = markdownService;

        this.html = '';

        const text = this.postService.getPost('title');
        this.initVal = text ? text.text : '';

        this.updateValue(this.initVal);
    }

    public updateValue(val: string) {
        this.html = this.md.convert(val);
    }

    public savePost(val: any) {
        this.postService.savePost('title', val);
    }

    public deletePost() {
        this.postService.deletePost('title');
    }

    ngAfterContentChecked() {
      var text = this.postService.getPost(this.title);
      this.initVal = text || '';
      this.updateValue(this.initVal);
    }
}