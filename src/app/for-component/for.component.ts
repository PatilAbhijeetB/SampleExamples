import {Component} from "@angular/core";
import { attachEmbeddedView } from "../../../node_modules/@angular/core/src/view";
@Component({
    selector:"my-for",
    templateUrl:"./for.component.html"
})
export class ForComponent{
    names=["Abhi","Amit","Ajinkya","Dipak","Sagar"];
}