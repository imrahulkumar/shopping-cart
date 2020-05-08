import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  email:any="";
  password:any="";


  constructor(private servie: AuthService, private route:Router, private loader: LoadingController) { }

  ngOnInit() {}
  signIn(){
    let isLogin = this.servie.login({email:this.email, password: this.password})
    if(isLogin){
      this.presentLoading();
      setTimeout(()=>{
        this.route.navigateByUrl('/dashboard');
      },2000)
     
    }
  }

  async presentLoading() {
    const loading = await this.loader.create({
      message: 'Please wait...',
      duration: 1999
    });
    await loading.present();
  
    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }

}
