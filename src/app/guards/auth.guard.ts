import { Injectable } from '@angular/core';
import {
  CanActivate,
  Router,
} from '@angular/router';


@Injectable({
  providedIn: 'root',
})

export class AuthGuard implements CanActivate {
  constructor(private router: Router ) {
  }
 canActivate(){
    const loggedinUser = JSON.parse(localStorage.getItem('loggedinUser') || '{}')
   console.log(loggedinUser)
   if (loggedinUser.email){
     return true;
   }
   else {
     this.router.navigate(['/login']);
     return false;
   }
  }
}
