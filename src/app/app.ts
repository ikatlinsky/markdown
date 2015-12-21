import {Component} from 'angular2/core';

@Component({
    selector: 'markdown',
    templateUrl: 'app/markdownApp.html'
})

export class MarkdownAppComponent {

    public html = '';

    constructor() {}

    public updateValue(val:string) {
        this.html = val;
    }
}
