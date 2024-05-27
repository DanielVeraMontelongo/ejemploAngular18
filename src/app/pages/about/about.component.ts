import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { User } from '../../interfaces/user.interface';
import { UserService } from '../../shared/user.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit {
 public users: User [] = []

 constructor(private userService: UserService) {}


 ngOnInit(): void {
   this.users = this.userService.getUsers();
 }

 capturoElEvento(name:string) {
  console.log("Me ejecuto desde el padre " + name);
 }
}
