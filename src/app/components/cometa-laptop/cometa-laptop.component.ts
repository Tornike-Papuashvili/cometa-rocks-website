import { Component, OnInit } from '@angular/core';
import { SwitcherService } from '../../cometa-services/shared/switcher.service';

@Component({
  selector: 'app-cometa-laptop',
  templateUrl: './cometa-laptop.component.html',
  styleUrls: ['./cometa-laptop.component.scss']
})
export class CometaLaptopComponent implements OnInit {
  currentTheme: any;
  currentLang: any;

  constructor(private sw: SwitcherService) { }

  ngOnInit(): void {
    this.applyCurrentLayoutSettings();  
  }

  applyCurrentLayoutSettings() {
    this.sw.getCurrentThemeObservable().subscribe( (theme: any) => this.currentTheme = theme );
    this.sw.getCurrentLangObservable().subscribe( (lang: any) => this.currentLang = lang );
  }
}
