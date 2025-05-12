import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BatchComponent } from './batch/batch.component';
import { BatchNamesComponent } from './batch-names/batch-names.component';

import { MarvellousService } from './marvellous.service';

import { HttpClientModule } from '@angular/common/http'; // Used for subscribe method

@NgModule({
  declarations: [
    AppComponent,
    BatchComponent,
    BatchNamesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration(),
    MarvellousService,
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
