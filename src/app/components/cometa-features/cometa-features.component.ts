import { Component, OnInit } from '@angular/core';
import { SwitcherService } from '../../cometa-services/shared/switcher.service';

@Component({
  selector: 'app-cometa-features',
  templateUrl: './cometa-features.component.html',
  styleUrls: ['./cometa-features.component.scss']
})
export class CometaFeaturesComponent implements OnInit {

  features = [
    {
      image: "assets/icons/Icons-portfolio/icons8-test-aprobado-64.png",
      title: "Test Automation",
      description: "Create tests to analyze and verify each part of your website. Simply check its status."
    },
    {
      image: "assets/icons/Icons-portfolio/icons8-logo-de-google-64.png",
      title: "Sign in via Google, OIDC, ... ",
      description: "Access through your Google account and enjoy our service. On-premises installation uses OIDC login."
    },
    {
      image: "assets/icons/Icons-portfolio/icons8-múltiples-dispositivos-64.png",
      title: "Test on Multiple Devices",
      description: "Test the functionalities of your website in different responsive devices. Receive eMail summary of test results."
    },
    {
      image: "assets/icons/Icons-portfolio/icons8-horas-extras-64.png",
      title: "Schedule Execution",
      description: "Schedule the execution of your tests weekly or monthly at the minute, time or day that you want."
    },
    {
      image: "assets/icons/Icons-portfolio/icons8-abrir-en-el-navegador-64.png",
      title: "Browser Automation",
      description: "Test your web projects in just some browsers or compatibility on 2000+ devices with BrowserStack integratioln. Software made in Europe with excellence."
    },
    {
      image: "assets/icons/Icons-portfolio/icons8-árbol-de-carpetas-64.png",
      title: "Flexible Hierarchy",
      description: "Manage your tests through our hierarchy, where you can select the department, application and environment of your project. User based folder type organization. Each user can personally re-group individual tests. Woah!"
    },
  ];

  currentTheme: any;

  constructor(private sw: SwitcherService) { }

  ngOnInit(): void {
    this.setCurrentTheme();
  }


  setCurrentTheme() {
    this.sw.getCurrentThemeObservable().subscribe( theme => this.currentTheme = theme );
  }

}
