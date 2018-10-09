import {Component} from "@angular/core";
import { componentFactoryName } from "../../../node_modules/@angular/compiler";
@Component({
    selector:"my-random-number",
    templateUrl:"./random-number.component.html"
    })

export class RandomNumberComponent
{
rnum : number;
    randomNumber():void
    {
    this.rnum = (Math.random() * (100 - 1 + 1)) + 1;
    }

}