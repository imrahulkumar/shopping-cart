import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { CartModalPageModule }   from './cart-modal/cart-modal.module';
import { PopOverComponent } from './components/pop-over/pop-over.component';

import { CallNumber } from '@ionic-native/call-number/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule } from '@angular/forms';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { PrivacyComponent } from './privacy/privacy.component';


@NgModule({
  declarations: [
    AppComponent, 
    PopOverComponent,     
    LoginComponent, 
    SignupComponent,
    ForgotPasswordComponent,
    PrivacyComponent
  ],
  entryComponents: [PopOverComponent, PrivacyComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule, 
    CartModalPageModule,
    FormsModule
    ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    CallNumber,
    SocialSharing
  ],

  bootstrap: [AppComponent]
})
export class AppModule {}
