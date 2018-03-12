import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AlertWidgetComponent } from '../fruit/widget/alert.widget';
@Component({
    selector: 'app-color',
    templateUrl: './color.component.html',
})

export class ColorComponent {
    @ViewChild (AlertWidgetComponent) alertWondow: AlertWidgetComponent;
    constructor(protected route: Router) {

    }
    // this.router.navigate(['banana', { outlets: {main: value}}], {skipLocationChange: false});
    gotoColor(value) {
        this.route.navigate(['color', { outlets: {main: 'green/' + value }}], {skipLocationChange: false});
    }
    // 点一下
    onClick() {
        this.alertWondow.open();
    }
}
