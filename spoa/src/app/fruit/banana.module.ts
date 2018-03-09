import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // 路由
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BananaComponent } from './banana.component';
import { BananaChildComponent } from './banana-child.component';

// 路由
export const ROUTES: Routes = [
    { path: 'banana', component: BananaComponent,
        children: [
            { path: 'bananaChild', component: BananaChildComponent, outlet: 'main' } // 子路由
        ]
    }
  ];

  @NgModule({
    declarations: [
        BananaComponent,
        BananaChildComponent,
    ],
    imports: [
      BrowserModule,
      FormsModule,
      HttpModule,
      RouterModule.forChild(ROUTES),
    ],
    providers: [ ],

  })
  export class BananaModule { }
