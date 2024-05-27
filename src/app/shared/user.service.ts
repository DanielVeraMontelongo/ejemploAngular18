import { Injectable } from '@angular/core';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: User [] = [
    {name:'Daniel', surname: 'Vera'},
    {name:'Daniel', surname: 'Vera'},
    {name:'Daniel', surname: 'Vera'}
  ];
  constructor() { }

  addUser(user: User): void {
    this.users.push(user)
  }

  getUsers(): User [] {
    return this.users;
  }
}
