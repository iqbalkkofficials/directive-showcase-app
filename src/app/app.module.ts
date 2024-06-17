import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HoverHighlightDirective } from './directives/hover-highlight.directive';
import { TooltipDirective } from './directives/tooltip.directive';
import { FirstcomponentComponent } from './components/firstcomponent/firstcomponent.component';
import { DraggableDirective } from './directives/draggable.directive';
import { SecondcomponentComponent } from './components/secondcomponent/secondcomponent.component';
import { ThirdcomponentComponent } from './components/thirdcomponent/thirdcomponent.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmailValidationDirective } from './directives/email-validation.directive';
import { PhoneNumberValidatorDirective } from './directives/phonenumber-validator.directive';

@NgModule({
  declarations: [
    AppComponent,
    HoverHighlightDirective,
    TooltipDirective,
    FirstcomponentComponent,
    DraggableDirective,
    SecondcomponentComponent,
    ThirdcomponentComponent,
    EmailValidationDirective,
    PhoneNumberValidatorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
