import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HoverHighlightDirective } from './directives/hover-highlight.directive';
import { TooltipDirective } from './directives/tooltip.directive';
import { FirstcomponentComponent } from './components/firstcomponent/firstcomponent.component';
import { DraggableDirective } from './directives/draggable.directive';
import { SecondcomponentComponent } from './components/secondcomponent/secondcomponent.component';

@NgModule({
  declarations: [
    AppComponent,
    HoverHighlightDirective,
    TooltipDirective,
    FirstcomponentComponent,
    DraggableDirective,
    SecondcomponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
