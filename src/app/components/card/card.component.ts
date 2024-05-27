import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../../interfaces/user.interface';
import { FormsModule } from '@angular/forms';
import { NgClass, NgFor, NgStyle } from '@angular/common';


@Component({
  selector: 'app-card',
  standalone: true,
  imports: [ FormsModule, NgFor, NgStyle, NgClass ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() public userHijo: User = {name: '', surname : '', age: 0};
  @Input() public color: string = 'red';
  @Output() eventoDesdeElHijo:EventEmitter<string> = new EventEmitter();
  constructor() {}

  ejecutarEvento():void {
    console.log("Se ejecuta desde el hijo");
    this.eventoDesdeElHijo.emit(this.userHijo.name);
  }
}
