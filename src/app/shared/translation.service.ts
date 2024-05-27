import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  public currentLang: 'en' | 'es' = 'es';

  constructor(private http: HttpClient) { }

  setLanguage(lang: 'en' | 'es'): void {
    this.currentLang = lang;
  }

  async getText(component: string): Promise<any> {
    const filePath = `/assets/text/${component}/${component}.${this.currentLang}.json`;
    return await firstValueFrom(this.http.get(filePath));
  }

}
