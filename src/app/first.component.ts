import { Component, OnInit } from '@angular/core';
import {RouterModule, Router } from '@angular/router'; 
import { RandomService } from './random.service';

@Component({
  selector: 'app-first',
  template: '<div><p> First Component Something </p> <img src = " https://www.drupal.org/files/project-images/edit%2827117%29.png"> <button (click) ="goToSecond()">Go to Second</button></div>',
})
export class FirstComponent implements OnInit {
  num: number = 0; 

  constructor(public randomService: RandomService, private router: Router) {

  }

ngOnInit() {
  this.randomService.getRandom(1,100).then((num)=> {
    this.num = num; 
  });
}

goToSecond() {
  this.router.navigate(['/second']);
}

}
