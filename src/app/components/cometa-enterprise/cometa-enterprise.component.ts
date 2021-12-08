import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cometa-enterprise',
  templateUrl: './cometa-enterprise.component.html',
  styleUrls: ['./cometa-enterprise.component.scss']
})
export class CometaEnterpriseComponent implements OnInit {

  caracteristics = [
    {
        image: "assets/icons/Icons-portfolio/icons8-tick-box-96.png",
        description: "Multiple Authentication Providers"
    },
    {
        image: "assets/icons/Icons-portfolio/icons8-tick-box-96.png",
        description: "Installation on premise or Cloud"
    },
    {
        image: "assets/icons/Icons-portfolio/icons8-tick-box-96.png",
        description: "Custom installation time in 15 min"
    },
    {
        image: "assets/icons/Icons-portfolio/icons8-tick-box-96.png",
        description: "Enterprise Security"
    },
    {
        image: "assets/icons/Icons-portfolio/icons8-tick-box-96.png",
        description: "Full access control by users and groups"
    },
    {
        image: "assets/icons/Icons-portfolio/icons8-tick-box-96.png",
        description: "Access security by OIDC"
    },
    {
        image: "assets/icons/Icons-portfolio/icons8-tick-box-96.png",
        description: "Live, Interactive Testing"
    },
    {
        image: "assets/icons/Icons-portfolio/icons8-tick-box-96.png",
        description: "Implemented in docker technology"
    },
    {
        image: "assets/icons/Icons-portfolio/icons8-tick-box-96.png",
        description: "Priority Support"
    }
];

  constructor() { }

  ngOnInit(): void {
  }

}
