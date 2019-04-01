import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { OperationValidatorDirective } from './operation-validator.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CalculatorComponent,
    OperationValidatorDirective
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
