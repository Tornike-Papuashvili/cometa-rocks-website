import { Component, ElementRef, Renderer2, OnInit } from '@angular/core';
import { SwitcherService } from '../../cometa-services/shared/switcher.service';

@Component({
  selector: 'app-cometa-portfolio',
  templateUrl: './cometa-portfolio.component.html',
  styleUrls: ['./cometa-portfolio.component.scss']
})
export class CometaPortfolioComponent implements OnInit {

  img_magnifier_isActive: boolean = false;
  currentTheme: any;
  currentLang: any;

    screenshots = {
      en: [
        {
          image: "assets/screenshots/StepEditor.PNG",
          title: "Testplan Editor",
          description: "Automated Software Testing made easy. The web testing editor is selfexplaining. Write parameterized tests in almost natural language."
        },
        {
          image: "assets/screenshots/BrowserSelection.PNG",
          title: "Selection of browsers",
          description: "Vast variety of browsers and operating systems to choose from. Massive parallel and automated website testing saves countless hours."
        },
        {
          image: "assets/screenshots/SchedulePopup.PNG",
          title: "Scheduling tests",
          description: "Let co.meta do automated web testing while your are sleeping. Why make things more complicated?"
        },
        {
          image: "assets/screenshots/LiveSteps.PNG",
          title: "Live steps",
          description: "See live what co.meta executes. Complex software made easy."
        },
        {
          image: "assets/screenshots/SearchFilters.PNG",
          title: "Overview Filtering",
          description: "Using flexible filtering gives every user a personal view to the testplan dashboard, as needed."
        },
        {
          image: "assets/screenshots/FeatureSorting.PNG",
          title: "Testplan Sorting",
          description: "Give your dashboard the correct importance of every items. This way co.meta users may focus just in time on what they need to see."
        },
        {
          image: "assets/screenshots/FeatureResults.PNG",
          title: "Test Results",
          description: "Understanding the performance of your gui testing is probably the most important task. Fine layout, easy overview and more details on click."
        },
        {
          image: "assets/screenshots/FeatureStepResult.PNG",
          title: "Step Detail Results",
          description: "Each step records the results as executed. Comparing the screenshots shows pixel difference."
        },
        {
          image: "assets/screenshots/FeatureResultScore.PNG",
          title: "Result Score",
          description: "Result score gives a clean and fast overview of your testplan performance."
        },
        {
          image: "assets/screenshots/FeatureResultLog.PNG",
          title: "Professional Logging",
          description: "Logging is the art of understanding details. Consume logs right inside co.meta. Selfservice at it's best."
        },
        {
          image: "assets/screenshots/FeatureOptions.PNG",
          title: "Testplan actions",
          description: "Most needed actions in prominent position for fast access. Saves valuable time. Reduced complexity for easy understanding."
        },
        {
          image: "assets/screenshots/AdminPanel.PNG",
          title: "Administration panel",
          description: "The administration panel provides a minimal set of actions. co.meta was designed to be self-service. This is probably the most unused screen."
        },
        {
          image: "assets/screenshots/EditFeatureInfo.PNG",
          title: "Choosing Departments",
          description: "Selfexplaining. co.meta offers an easy to understand security-concept for multi-homed tenants."
        },
        {
          image: "assets/screenshots/FeatureBox.PNG",
          title: "Testplan Box",
          description: "Each testplan is represented with detailed information on the dashboard. Focus on important information of complex test-situations."
        },
        {
          image: "assets/screenshots/FeatureOptionsMenu.PNG",
          title: "Actions Dashboard Menu",
          description: "The clean layout makes navigation to actions in testplan dashboard easy. Clean layouts help to focus."
        },
        {
          image: "assets/screenshots/ContinueOnFailure.PNG",
          title: "Continue on failure",
          description: "With 'Continue on failure' you can define whether or not failing steps will stop the execution of a feature."
        }  
      ],
      ca: [
        {
          image: "assets/screenshots/StepEditor.PNG",
          title: "Editor de plans de proves",
          description: "Les proves de programari automatitzades s??n f??cils. L'editor de proves web s'explica per si mateix. Escriure proves parametritzades en llenguatge gaireb?? natural."
        },
        {
          image: "assets/screenshots/BrowserSelection.PNG",
          title: "Selecci?? de navegadors",
          description: "Gran varietat de navegadors i sistemes operatius per triar. Les proves massives de llocs web paral??leles i automatitzades permeten estalviar innombrables hores."
        },
        {
          image: "assets/screenshots/SchedulePopup.PNG",
          title: "Programaci?? de proves",
          description: "Deixeu que co.meta faci proves web automatitzades mentre esteu dormint. Per qu?? complicar les coses?"
        },
        {
          image: "assets/screenshots/LiveSteps.PNG",
          title: "Passos en viu",
          description: "Veure en directe qu?? executa co.meta. Programari complex fet f??cil."
        },
        {
          image: "assets/screenshots/SearchFilters.PNG",
          title: "Visi?? general del filtratge",
          description: "L'??s del filtratge flexible ofereix a cada usuari una visi?? personal del tauler de control del pla de prova, segons sigui necessari."
        },
        {
          image: "assets/screenshots/FeatureSorting.PNG",
          title: "Classificaci?? del pla de prova",
          description: "Doneu al vostre tauler la import??ncia correcta de tots els elements. D'aquesta manera, els usuaris de co.meta poden centrar-se just a temps en all?? que necessiten veure."
        },
        {
          image: "assets/screenshots/FeatureResults.PNG",
          title: "Resultats de l'ex??men",
          description: "Comprendre el rendiment de les proves d'UI ??s probablement la tasca m??s important. Disseny excel??lent, visi?? general senzilla i m??s detalls fent clic."
        },
        {
          image: "assets/screenshots/FeatureStepResult.PNG",
          title: "Resultats del detall del pas",
          description: "Cada pas registra els resultats tal com s'executen. La comparaci?? de les captures de pantalla mostra la difer??ncia de p??xels."
        },
        {
          image: "assets/screenshots/FeatureResultScore.PNG",
          title: "Puntuaci?? del resultat",
          description: "La puntuaci?? del resultat ofereix una visi?? general clara i r??pida del rendiment del vostre pla de proves."
        },
        {
          image: "assets/screenshots/FeatureResultLog.PNG",
          title: "Log professional",
          description: "El registre ??s l'art d'entendre els detalls. Consumeix registres dins de co.meta. El millor servei d'autoservei."
        },
        {
          image: "assets/screenshots/FeatureOptions.PNG",
          title: "Accions del pla de proves",
          description: "Accions m??s necess??ries en posici?? destacada per a un acc??s r??pid. Estalvia un temps valu??s. Complexitat redu??da per facilitar la comprensi??."
        },
        {
          image: "assets/screenshots/AdminPanel.PNG",
          title: "Panell d'administraci??",
          description: "El tauler d'administraci?? ofereix un conjunt m??nim d'accions. co.meta va ser dissenyat per ser autoservei. Aquesta ??s probablement la pantalla m??s no utilitzada."
        },
        {
          image: "assets/screenshots/EditFeatureInfo.PNG",
          title: "Selecci?? de departaments",
          description: "Autoexplicatiu. co.meta ofereix un concepte de seguretat f??cil d'entendre per a llogaters multihabitatges."
        },
        {
          image: "assets/screenshots/FeatureBox.PNG",
          title: "Caixa del pla de proves",
          description: "Cada pla de prova es representa amb informaci?? detallada al tauler. Centra't en la informaci?? important de situacions de prova complexes."
        },
        {
          image: "assets/screenshots/FeatureOptionsMenu.PNG",
          title: "Men?? del tauler d'accions",
          description: "El disseny net facilita la navegaci?? a les accions del tauler de control del testplan. Els dissenys nets ajuden a centrar-se."
        },
        {
          image: "assets/screenshots/ContinueOnFailure.PNG",
          title: "Continuar amb el frac??s",
          description: "Amb ''Continua en cas d'error'' podeu definir si els passos que fallen aturaran o no l'execuci?? d'una funci??."
        }
      ]
  };


  constructor(private sw: SwitcherService, private elRef: ElementRef, private renderer: Renderer2) { }  

  ngOnInit(): void {
    this.applyCurrentLayoutSettings();
  }

  applyCurrentLayoutSettings() {
    this.sw.getCurrentThemeObservable().subscribe( (theme: any) => this.currentTheme = theme );
    this.sw.getCurrentLangObservable().subscribe( (lang: any) => this.currentLang = lang );
  }

  //filters screenshots by currentLang value and returns an array of objects translated in current language
  getCurrentLangScreenshots() {
    const currentLangEntry =  Object.entries(this.screenshots).filter(([key]) => key === this.currentLang);
    const currentLangScreenshots  = Object.fromEntries(currentLangEntry);
    const currentLangValues = Object.values(currentLangScreenshots)[0];
    return currentLangValues;
  }
  

  openMagnifier(event: any) {
    let magnified_img = this.elRef.nativeElement.querySelector(".magnified_img");
    this.renderer.setAttribute(magnified_img, "src", event.target.src);
    this.img_magnifier_isActive = true;
  }

  closeMagnifier() {
    this.img_magnifier_isActive = false;
  }

  preventEventBubbling(event: any) {
    event.stopPropagation();
  }

}
