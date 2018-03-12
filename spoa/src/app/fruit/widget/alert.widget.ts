import { Component, Output, Input, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-alert',
    templateUrl: './alert.widget.html',

})
export class AlertWidgetComponent {
    // 状态
    status: boolean;
    // 用户名
    username: string;
    // 弹窗自定义内容
    @Input() content: string;
    @Output() clickSubmit = new EventEmitter();
    constructor() {

    }
    open() {
        this.status = true;
    }
    close() {
        this.status = false;
    }
    onSubmit() {
        this.clickSubmit.emit({content: this.content, username: this.username});
    }
}
