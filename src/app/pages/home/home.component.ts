import { Component, Injector, OnInit } from '@angular/core';
import { TranslationService } from '../../shared/translation.service';
import { User } from '../../interfaces/user.interface';
import { UserService } from '../../shared/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  translations: any;
  battleEnd: boolean = false;
  constructor(private translationService: TranslationService, private userService: UserService, private router: Router) {
  };

  async ngOnInit(): Promise<void> {
    this.translations = await this.translationService.getText('home');
    console.log(this.translations);
  }

  createUser(nombre: string, apellido: string, edad: number):void{
    const user: User = {
      name: nombre,
      surname: apellido,
      age: edad
    }

    this.userService.addUser(user);
    this.battleEnd = true;
    // this.router.navigateByUrl('/about');
  }

  accept(): void{
    this.battleEnd = false;
  }

}
