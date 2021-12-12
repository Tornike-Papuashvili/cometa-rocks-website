import { Component, OnInit } from '@angular/core';
import { SwitcherService } from '../../cometa-services/shared/switcher.service';

@Component({
  selector: 'app-cometa-architecture',
  templateUrl: './cometa-architecture.component.html',
  styleUrls: ['./cometa-architecture.component.scss']
})
export class CometaArchitectureComponent implements OnInit {

  techStack = [
    {
        name: "Docker",
        image: "assets/icons/Icons-portfolio/icons8-docker-512.png",
        href: "https://www.docker.com/"
    },
    {
        name: "Selenium",
        image: "assets/icons/Icons-portfolio/icons8-selenium-512.png",
        href: "https://www.selenium.dev/"
    },
    {
        name: "Django",
        image: "assets/icons/Icons-portfolio/icons8-django-512.png",
        href: "https://www.djangoproject.com/"
    },
    {
        name: "Python",
        image: "assets/icons/Icons-portfolio/icons8-python-512.png",
        href: "https://www.python.org/"
    }
];

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
