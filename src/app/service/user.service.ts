import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  username: string= "";
  constructor() { }

  login(username: string) {
  this.username = username;
  }

  getUsername() {
    return this.username;
  }
}
