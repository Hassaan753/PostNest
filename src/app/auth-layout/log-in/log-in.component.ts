import { Component } from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import {FormsModule} from '@angular/forms';

interface User {
  name: string;
  email: string;
  password: string;
  dateOfBirth?: string;
  gender?: string;
}

@Component({
  selector: 'app-log-in',
  imports: [
    FormsModule
  ],
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.css'
})
export class LogInComponent {
  email: string = '';
  password: string = '';
  users: User[] = JSON.parse(localStorage.getItem('users') || '[]');

  constructor(private router: Router) { }
  login() {
    console.log("login button clicked");
    if (!this.email || !this.password) {
      alert("Please fill all fields correctly");
      return;
    }

    if (!this.email.includes("@")) {
      alert("Please provide a valid email");
      return;
    }

    if (this.password.length < 8) {
      alert("Password Must Be at Least 8 Characters Long");
      return;
    }

    const user = this.users.find(user => user.email === this.email && user.password === this.password);

    if (!user) {
      alert("Invalid credentials");
      return;
    }

    localStorage.setItem("loggedinUser", JSON.stringify(user));
    alert("Login Successful!");
    this.router.navigate(['/home']);
  }


  goToSignupPage() {
    this.router.navigate(['/signup']);
  }
}
