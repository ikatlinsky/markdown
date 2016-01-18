import {Injectable} from 'angular2/core';

import * as marked from 'marked';


interface IMarkdownConfig {
    sanitize?: boolean,
    gfm?: boolean,
    breaks?: boolean,
    smartypants?: boolean
}

@Injectable()
export class MarkdownService {
    private md: MarkedStatic;

    constructor() {
        this.md = marked;
    }

    convert(markdown: string) {
        if (!markdown) {
            return '';
        }

        return this.md.parse(markdown);
    }

    setConfig(config: IMarkdownConfig) {
        this.md = marked.setOptions(config)
    }
}