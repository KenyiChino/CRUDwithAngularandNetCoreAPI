import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  loginObj: any = {
    email: '',
    pwd: ''
  };
  router = inject(Router);

  onLogin(){
    if(this.loginObj.email == "super@gmail.com" && this.loginObj.pwd =='112233'){
      localStorage.setItem("enuiryUser", this.loginObj.email);
      this.router.navigateByUrl('/enquries')
    } else {
      alert("Wrong credentials")
    }
  }
}




