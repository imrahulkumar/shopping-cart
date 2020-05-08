import { Injectable } from '@angular/core';


@Injectable({
    providedIn: 'root',
})
export class AuthService {

    credential: any[]=[
        {name:"rahul", email:'rahul@gmail.com', password:"1234"}
    ]


  constructor() { }

login(d){
   let res =  this.credential.filter(m=> m.email == d.email);
   if (res.length > 0)
    return true
   else
    return false;
}

signUp(d){
   let res =  this.credential.filter(m=> m.email == d.email);
   if(res.length > 0){
       return 'User allready exist';
   }
   this.credential.push(d);
   return 'Sign up successfully';
}


}