import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslationService } from '../../shared/translation.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [ RouterLink, FormsModule ],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  selectedLang: 'en' | 'es' = this.translationService.currentLang;
  constructor(private translationService: TranslationService) {}

  changeLang(): void {
    this.translationService.setLanguage(this.selectedLang);
    console.log(this.translationService.currentLang, this.selectedLang);
  }
}
