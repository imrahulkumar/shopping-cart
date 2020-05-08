import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ToastController, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  name:any="";
  email:any="";
  password:any="";

  constructor(private service: AuthService,public toastController: ToastController, private route: Router,private loader: LoadingController) { }

  ngOnInit() {}
  signup(){
  let msg =  this.service.signUp({'email':this.email,'name':this.name,'password':this.password})
  this.presentToast(msg);
  this.presentLoading()
  setTimeout(()=>{
this.route.navigateByUrl('/login')
  },5000)
}
async presentToast(msg) {
  const toast = await this.toastController.create({
    message: msg,
    duration: 2000
  });
  toast.present();
}

async presentLoading() {
  const loading = await this.loader.create({
    message: 'Please wait...',
    duration: 4999
  });
  await loading.present();

  const { role, data } = await loading.onDidDismiss();
  console.log('Loading dismissed!');
}

}
