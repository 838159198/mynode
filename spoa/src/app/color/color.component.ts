import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
    selector: 'app-color',
    templateUrl: './color.component.html',
})

export class ColorComponent {
    constructor(protected route: Router) {

    }
    // this.router.navigate(['banana', { outlets: {main: value}}], {skipLocationChange: false});
    gotoColor(value) {
        this.route.navigate(['color', { outlets: {main: 'green/' + value }}], {skipLocationChange: false});
    }
}
