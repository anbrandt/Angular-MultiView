import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { FirstComponent } from './first.component';
import { SecondComponent } from './second.component';
import { ThirdComponent } from './third.component';

import { RandomService } from './random.service'; 

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    ThirdComponent
  ],
  imports: [
    BrowserModule, 
    RouterModule.forRoot([
      {
        //path is an address to certain component -> localhost:4200/second 
        path: "third",
        component: ThirdComponent
      },
      {
        path: "second", 
        component: SecondComponent
      },
      {
        path: "", 
        pathMatch: "full", 
        component: FirstComponent
      }
    ])
  ],
  providers: [RandomService],
  bootstrap: [AppComponent]
})
export class AppModule { }
