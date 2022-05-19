import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TempoAtualComponent } from './tempo-atual/tempo-atual.component';
import { TempoService } from './tempo/tempo.service';

@NgModule({
  declarations: [
    AppComponent,
    TempoAtualComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [TempoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
