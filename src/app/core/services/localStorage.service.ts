import { Injectable } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
// import { User } from '@models/user.model';
import { LocalStorage } from '../constants/local-storage.enum';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor(private router: Router) {}
  get token() {
    return localStorage.getItem(LocalStorage.TOKEN) || '';
  }

  get configuration() {
    return localStorage.getItem(LocalStorage.CONFIGURATION) || '';
  }

  set token(token: string) {
    localStorage.setItem(LocalStorage.TOKEN, token);
  }

  get user() {
    if (localStorage?.getItem(LocalStorage.USER)) {
      return JSON.parse(localStorage?.getItem(LocalStorage.USER) || '');
    } else {
      return new User();
    }
  }

  set user(u: User) {
    localStorage.setItem(LocalStorage.USER, JSON.stringify(u));
  }

  logOut() {
    localStorage.clear();
    this.router.navigate(['/auth/log-in']);
  }
}
