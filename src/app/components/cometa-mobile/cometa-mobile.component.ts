import { Component, OnInit } from '@angular/core';
import { SwitcherService } from '../../cometa-services/shared/switcher.service';

@Component({
  selector: 'app-cometa-mobile',
  templateUrl: './cometa-mobile.component.html',
  styleUrls: ['./cometa-mobile.component.scss']
})
export class CometaMobileComponent implements OnInit {

  currentTheme: any;

  constructor(private sw: SwitcherService) { }

  ngOnInit(): void {
    this.setCurrentTheme();
  }


  setCurrentTheme() {
    this.sw.getCurrentThemeObservable().subscribe( theme => this.currentTheme = theme );
  }


}
