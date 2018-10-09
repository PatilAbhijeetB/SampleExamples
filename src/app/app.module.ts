import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HelloWorldComponent}  from '../app/hello-world/hello-world.component'
import { AppComponent } from './app.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { PropertyBindingComponent } from '../app/property-binding/property-binding.component';
import { EventBindingComponent} from '../app/event-binding/event-binding.component';
import { DisplayComponent} from '../app/display-component/display.component'; 
import { RandomNumberComponent} from '../app/random-number/random-number.component';
import { TwowayBindingComponent} from '../app/twoway-binding/twoway-binding.component';
import { FormsModule} from '@angular/forms';
import { ForComponent} from '../app/for-component/for.component';
import { IfComponent} from '../app/if-component/if.component';
import { SwitchComponent} from '../app/switch-component/switch.component';
import { CustomDerictives} from '../app/custom-derictive/custom.directives';
import { CustomDirectiveExample} from '../app/color-directive/color-directive-example.component';
import { ColorDirective} from '../app/color-directive/color.directive';

@NgModule({
  declarations: [
    AppComponent,HelloWorldComponent, InterpolationComponent,PropertyBindingComponent,EventBindingComponent,DisplayComponent,
    RandomNumberComponent,TwowayBindingComponent,ForComponent,IfComponent,SwitchComponent,CustomDerictives,ColorDirective,CustomDirectiveExample
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
