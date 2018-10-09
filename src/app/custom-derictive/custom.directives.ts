import { Directive } from "@angular/core";
import { ElementRef} from "@angular/core";
@Directive({
    selector:"[myCustomDir]"
})

export class CustomDerictives{

    constructor(el:ElementRef)
    {
        el.nativeElement.style.backgroundColor="yellow";
    }
}