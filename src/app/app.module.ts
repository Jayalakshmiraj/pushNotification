import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { Firebase } from '@ionic-native/firebase/ngx';

const config = {
  apiKey: "AIzaSyAVbDx5GWyQJLYb6d5ghrKdPwV111EcCTg",
  authDomain: "pushnotification-fec6b.firebaseapp.com",
  databaseURL: "https://pushnotification-fec6b.firebaseio.com",
  projectId: "pushnotification-fec6b",
  storageBucket: "pushnotification-fec6b.appspot.com",
  messagingSenderId: "566272227518"
};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule,
    AngularFireModule , 
    AngularFireModule.initializeApp(config),IonicModule.forRoot(), 
    AppRoutingModule,
    AngularFirestoreModule],
  providers: [
    StatusBar,
    SplashScreen,
    Firebase,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
