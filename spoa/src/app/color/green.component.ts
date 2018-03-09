import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-green',
    templateUrl: './green.component.html',
})

export class GreenComponent implements OnInit {
    colorId: any;
    constructor(protected router: Router, protected route: ActivatedRoute) {

    }
    ngOnInit () {
        this.route.params.subscribe((params) => this.colorId = params.id); // 获取url中的参数id的值
        console.log(this.colorId);
    }

}



