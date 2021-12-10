import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class SwitcherService {

  private currentThemeSubject: BehaviorSubject<any>;
  private currentTheme: Observable<any>;

  constructor() { 
    if( !this.getCurrentTheme() ) { this.setCurrentTheme('dark'); }

    this.currentThemeSubject = new BehaviorSubject<any>(this.getCurrentTheme());
    this.currentTheme = this.currentThemeSubject.asObservable();
  }
  
  switchCurrentTheme(theme: string) {
    this.setCurrentTheme(theme);
    this.currentThemeSubject.next(theme);
  }

  getCurrentThemeValue() {
    return this.currentThemeSubject.value;
  }

  getCurrentThemeObservable() {
    return this.currentTheme;
  }

  getCurrentTheme() {
    return localStorage.getItem('currentTheme');
  }

  setCurrentTheme(theme: string) {
    localStorage.setItem('currentTheme', theme);
  }


}
