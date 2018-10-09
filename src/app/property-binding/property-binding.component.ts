import {Component} from "@angular/core";
@Component({
    selector:"my-property-binding",
    templateUrl:"./property-binding.component.html"
})
export class PropertyBindingComponent{
myValue = 'Abhi';
myType =  'text';
isDisabled=false;
xyz="<button>My Button</button>";

}   