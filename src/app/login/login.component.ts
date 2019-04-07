import { Component, OnInit } from '@angular/core';
import { Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  title = 'Login Project';
  hide = true;
  login_logo = "default_login_logo.png";
  login_text = "LOGIN";
  uname_txt = new FormControl("", [Validators.required]);
  pwd_txt = new FormControl("", [Validators.required]);
  hover_txt = "true";
  
  constructor() { }

  ngOnInit() { }

  nameFocusOut(event) {
    if(this.uname_txt.value === "manju"){
      this.login_logo = "manju_img.jpg";
      this.login_text = "Hi Manjunath";
    }else if(this.uname_txt.value === "ramya"){
      this.login_logo = "ramya_img.jpg";
      this.login_text = "Hi Ramya";
    }else if(this.uname_txt.value === "niseetha"){
      this.login_logo = "niseetha_img.jpg";
      this.login_text = "Hi Niseetha";
    }else if(this.uname_txt.value === "ragul"){
      this.login_logo = "ragul_img.JPG";
      this.login_text = "Hi Ragul";
    }else {
      this.login_logo = "default_login_logo.png";
      this.login_text = "Login";
    }
  }

  login() {
    alert("Uname = "+this.uname_txt.value+"\nPass = "+this.pwd_txt.value);
  }
}
