import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AccordionComponent } from '../libs/angular/components/accordion';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AccordionComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
