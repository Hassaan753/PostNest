import { Injectable } from '@angular/core';
import {
  CanActivate,
  Router,
} from '@angular/router';


@Injectable({
  providedIn: 'root',
})

export class SessionGuard implements CanActivate {
  constructor(private router: Router ) {
  }
  canActivate(){
    const loggedinUser = JSON.parse(localStorage.getItem('loggedinUser') || "{}")
    console.log(loggedinUser)
    if (loggedinUser.email){
      this.router.navigate(['/home']);
      return false;
    }
    else {
      return true;
    }
  }
}
