import { Component, OnInit } from '@angular/core';
import { SwitcherService } from '../../cometa-services/shared/switcher.service';

@Component({
  selector: 'app-cometa-enterprise',
  templateUrl: './cometa-enterprise.component.html',
  styleUrls: ['./cometa-enterprise.component.scss']
})
export class CometaEnterpriseComponent implements OnInit {

characteristics = {
    en: [
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
        ],
    ca: [
            {
                image: "assets/icons/Icons-portfolio/icons8-tick-box-96.png",
                description: "Proveïdors d'autenticació múltiples"
            },
            {
                image: "assets/icons/Icons-portfolio/icons8-tick-box-96.png",
                description: "Instal·lació on premise o Cloud"
            },
            {
                image: "assets/icons/Icons-portfolio/icons8-tick-box-96.png",
                description: "Temps d'instal·lació personalitzat en 15 min"
            },
            {
                image: "assets/icons/Icons-portfolio/icons8-tick-box-96.png",
                description: "Seguretat empresarial"
            },
            {
                image: "assets/icons/Icons-portfolio/icons8-tick-box-96.png",
                description: "Control total d'accés per part d'usuaris i grups"
            },
            {
                image: "assets/icons/Icons-portfolio/icons8-tick-box-96.png",
                description: "Seguretat d'accés per OIDC"
            },
            {
                image: "assets/icons/Icons-portfolio/icons8-tick-box-96.png",
                description: "Proves interactives en directe"
            },
            {
                image: "assets/icons/Icons-portfolio/icons8-tick-box-96.png",
                description: "Implementat en tecnologia Docker"
            },
            {
                image: "assets/icons/Icons-portfolio/icons8-tick-box-96.png",
                description: "Suport prioritari"
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

    //filters Characteristics by currentLang value and returns an array of objects translated in current language
    getCurrentLangCharacteristics() {
        const currentLangEntry =  Object.entries(this.characteristics).filter(([key]) => key === this.currentLang);
        const currentLangCharacteristics  = Object.fromEntries(currentLangEntry);
        const currentLangValues = Object.values(currentLangCharacteristics)[0];
        return currentLangValues;
    }

}
