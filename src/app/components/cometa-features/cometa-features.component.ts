import { Component, OnInit } from '@angular/core';
import { SwitcherService } from '../../cometa-services/shared/switcher.service';

@Component({
  selector: 'app-cometa-features',
  templateUrl: './cometa-features.component.html',
  styleUrls: ['./cometa-features.component.scss']
})
export class CometaFeaturesComponent implements OnInit {

  features = {
      ca: [
        {
          image: "assets/icons/Icons-portfolio/icons8-test-aprobado-64.png",
          title: "Automatització de proves",
          description: "Creeu proves per analitzar i verificar cada part del vostre lloc web. Simplement comproveu el seu estat."
        },
        {
          image: "assets/icons/Icons-portfolio/icons8-logo-de-google-64.png",
          title: "Inicieu la sessió mitjançant Google, OIDC,...",
          description: "Accedeix a través del teu compte de Google i gaudeix del nostre servei. La instal·lació local utilitza l'inici de sessió OIDC."
        },
        {
          image: "assets/icons/Icons-portfolio/icons8-múltiples-dispositivos-64.png",
          title: "Prova en diversos dispositius",
          description: "Proveu les funcionalitats del vostre lloc web en diferents dispositius responsive. Rebre per correu electrònic un resum dels resultats de la prova."
        },
        {
          image: "assets/icons/Icons-portfolio/icons8-horas-extras-64.png",
          title: "Programa d'execució",
          description: "Programeu l'execució de les vostres proves setmanalment o mensualment al minut, hora o dia que vulgueu."
        },
        {
          image: "assets/icons/Icons-portfolio/icons8-abrir-en-el-navegador-64.png",
          title: "Automatització del navegador",
          description: "Proveu els vostres projectes web només en alguns navegadors o la compatibilitat en més de 2000 dispositius amb la integració de BrowserStack. Programari fet a Europa amb excel·lència."
        },
        {
          image: "assets/icons/Icons-portfolio/icons8-árbol-de-carpetas-64.png",
          title: "Jerarquia flexible",
          description: "Gestiona les teves proves a través de la nostra jerarquia, on podràs seleccionar el departament, l'aplicació i l'entorn del teu projecte. Organització de tipus de carpeta basada en l'usuari. Cada usuari pot reagrupar personalment les proves individuals. Woah!"
        }
      ],
      en: [
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
        }
      ]
    };

    
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

  //filters features by currentLang value and returns an array of objects translated in current language
  getCurrentLangFeatures() {
    const currentLangEntry =  Object.entries(this.features).filter(([key]) => key === this.currentLang);
    const currentLangFeatures  = Object.fromEntries(currentLangEntry);
    const currentLangValues = Object.values(currentLangFeatures)[0];
    return currentLangValues;
  }

}
