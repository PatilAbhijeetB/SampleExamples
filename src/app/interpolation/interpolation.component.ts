import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent {

 text="Hello Abhi";
 a=10;
 b=50;
 isDisabled=false;
 display()
 {
   console.log("Hello Abhi");
 }
 getValue():number{
   return 1437;
 }

}
