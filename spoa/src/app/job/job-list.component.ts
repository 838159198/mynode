import { Component, OnInit } from '@angular/core';
import { JobComponent } from './job.component';
import { JobService } from './job.service';
// import { JobCreateComponent } from './job-create.component';


@Component({
    selector: 'app-create-list',
    templateUrl: './job-list.component.html'
})

export class JobListComponent implements OnInit {
    jobLists: any[];
    constructor(protected jobService: JobService) {

    }
    ngOnInit() {
       this.jobService.getjobs().then(
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
                    alert('删除成功');
                    location.reload();
                } else {
                    alert('删除失败');
                }
            }
        );
    }

}
