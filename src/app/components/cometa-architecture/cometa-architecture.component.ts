import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

}
