import { Component, OnInit } from '@angular/core';
import { JobComponent } from './job.component';
import { JobService } from './job.service';
import { Router } from '@angular/router';
// import { JobCreateComponent } from './job-create.component';


@Component({
    selector: 'app-create-list',
    templateUrl: './job-list.component.html'
})

export class JobListComponent implements OnInit {
    jobLists: any[];
    constructor(protected jobService: JobService, protected router: Router) {

    }
    ngOnInit() {
       this.jobService.getjobs('http://shouji.com/api/spoa2').then(
           res => {
               this.jobLists = res.jobLists;
                console.log(this.jobLists);
            }
        );


    }
    // 删除
    onDelete(e) {
        this.jobService.delete('http://shouji.com/api/delete/id/' + e).then(
            res => {
                if (res.success === true) {

                    for (let i = 0; i < this.jobLists.length; i++) {
                        if (this.jobLists[i].id === e) {
                            this.jobLists.splice(i, 1);
                        }
                    }
                    alert('删除成功');
                } else {
                    alert('删除失败');
                }
            }
        );
    }
    // 修改
    onModify(e) {
        this.router.navigate(['/jobCreate/' + e ]); // 跳转
    }

}
