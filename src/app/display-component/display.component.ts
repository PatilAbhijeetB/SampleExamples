import {Component} from "@angular/core";
@Component({
    selector:"my-display-component",
    templateUrl:"./display.component.html"
})

export class DisplayComponent{

    name:string;
    OnNameChange(value:string):void{
        this.name=value;
    }
}