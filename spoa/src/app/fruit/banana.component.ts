import { Component, ViewChild } from '@angular/core';
import { AlertWidgetComponent } from './widget/alert.widget';

@Component({
    selector: 'app-banana',
    templateUrl: './banana.component.html',
})

export class BananaComponent {
    // 自定义弹窗内容
    content: string;

    @ViewChild (AlertWidgetComponent) alertWindow: AlertWidgetComponent;
    constructor() {
        this.content = '文本，是指书面语言的表现形式，从文学角度说，通常是具有完整、系统含义（Message）的一个句子或多个句子的组合。' +
        '一个文本可以是一个句子（Sentence）、一个段落（Paragraph）或者一个篇章（Discourse）。广义“文本”：任何由书写所固定下来的任何话语' +
        '。（利科尔） 狭义“文本”：由语言文字组成的文学实体，代指“作品”，相对于作者、世界构成一个独立、自足的系统。';
    }
    onClick() {
        this.alertWindow.open();
    }
    onCreate(value?: string) {
        console.log(value);
    }

}
