import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';

import { AppComponent } from './app.component';
import { ApiService } from './api.service';
import { HomeComponent } from './home/home.component';

const config = {
  apiKey: 'AIzaSyA6IbsTDq4T3kSpJMuD4mx-GSzeGNYpr6g',
  authDomain: 'fir-demo-30f66.firebaseapp.com',
  databaseURL: 'https://fir-demo-30f66-default-rtdb.firebaseio.com',
  projectId: 'fir-demo-30f66',
  storageBucket: 'fir-demo-30f66.appspot.com',
  messagingSenderId: '3163769638',
  appId: '1:3163769638:web:49e16734c5fe756f5a0fe7',
};

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
