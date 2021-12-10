import { Component, OnInit } from '@angular/core';
import { SwitcherService } from '../../cometa-services/shared/switcher.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  currentTheme: any;

  constructor(private sw: SwitcherService) { }

  ngOnInit(): void {
    this.setCurrentTheme();
  }


  setCurrentTheme() {
    this.sw.getCurrentThemeObservable().subscribe( theme => this.currentTheme = theme );
  }

  switchTheme() {
    const invertedTheme = this.invertTheme();
    this.sw.switchCurrentTheme(invertedTheme);
  }

  invertTheme() {
    return this.currentTheme == 'dark' ? 'light': 'dark';  
  }


}
