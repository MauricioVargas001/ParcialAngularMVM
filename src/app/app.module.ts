import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ViveroMainModule } from './vivero/vivero.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule, ViveroMainModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
