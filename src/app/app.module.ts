import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// App
import { AppRouting } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
