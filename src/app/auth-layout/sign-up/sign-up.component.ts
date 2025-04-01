import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {FormsModule} from '@angular/forms';

export interface User {
  email: string;
  password: string;
  name: string;
  dob: string;
  gender: string | null;
}

@Component({
  selector: 'app-sign-up',
  imports: [
    FormsModule
  ],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})

export class SignUpComponent {
  firstName: string = "";
  lastName: string = "";
  dob: string = "";
  gender: string | null = null;
  signupEmail: string = "";
  signupPassword: string = "";
  signupRewritePassword: string = "";

  users: User[] = JSON.parse(localStorage.getItem('users') || '[]');

  constructor(private router: Router) {
  }


  goToLoginPage() {
    console.log("Signup button clicked");
    const name: string = this.firstName + " " + this.lastName;
    const dob = this.dob;
    const gender = this.gender;
    const email = this.signupEmail;
    const password = this.signupPassword;
    const rewritePassword = this.signupRewritePassword;
    if (!name || !dob || !gender || !email || !password || !rewritePassword) {
      alert("Please fill all fields correctly");
      return;
    }

    if (!email.includes("@")) {
      alert("Please provide a valid email");
      return;
    }

    if (password.length < 8 || rewritePassword.length < 8) {
      alert("Password Must Be at Least 8 Characters Long");
      return;
    }

    if (password !== rewritePassword) {
      alert("Password must be same");
      return;
    }

    const findUserWithSameEmail = this.users.find(user => user.email === email);
    if (findUserWithSameEmail) {
      alert("Email Already Exists");
      return;
    }
    const newUser: User = {
      name: name,
      email: email,
      password: password,
      dob: dob,
      gender: gender,
    }
    this.users.push(newUser);
    localStorage.setItem("users", JSON.stringify(this.users));
    alert('Signup successful!');

    this.router.navigate(['/login']);
  }
}

