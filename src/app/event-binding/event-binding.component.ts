import {Component} from "@angular/core"
@Component({
selector:"my-event-binding",
templateUrl:"./event-binding.component.html",
})
export class EventBindingComponent{
    display():void
    {
        console.log("Event Binding Hello");
    }
}