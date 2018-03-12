import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // 路由
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ColorComponent } from './color.component';
import { GreenComponent } from './green.component';
import { BananaModule } from '../fruit/banana.module';


// 路由
export const ROUTES: Routes = [
    { path: 'color', component: ColorComponent,
        children: [
            { path: 'green', component: GreenComponent, outlet: 'main'},
            { path: 'green/:id', component: GreenComponent, outlet: 'main'}
        ]
    }
  ];

  @NgModule({
    declarations: [
        ColorComponent,
        GreenComponent,
    ],
    imports: [
      BrowserModule,
      FormsModule,
      HttpModule,
      BananaModule,
      RouterModule.forChild(ROUTES),
    ],
    providers: [ ],

  })
  export class ColorModule { }
