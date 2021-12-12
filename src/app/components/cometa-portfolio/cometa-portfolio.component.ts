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
          description: "Les proves de programari automatitzades són fàcils. L'editor de proves web s'explica per si mateix. Escriure proves parametritzades en llenguatge gairebé natural."
        },
        {
          image: "assets/screenshots/BrowserSelection.PNG",
          title: "Selecció de navegadors",
          description: "Gran varietat de navegadors i sistemes operatius per triar. Les proves massives de llocs web paral·leles i automatitzades permeten estalviar innombrables hores."
        },
        {
          image: "assets/screenshots/SchedulePopup.PNG",
          title: "Programació de proves",
          description: "Deixeu que co.meta faci proves web automatitzades mentre esteu dormint. Per què complicar les coses?"
        },
        {
          image: "assets/screenshots/LiveSteps.PNG",
          title: "Passos en viu",
          description: "Veure en directe què executa co.meta. Programari complex fet fàcil."
        },
        {
          image: "assets/screenshots/SearchFilters.PNG",
          title: "Visió general del filtratge",
          description: "L'ús del filtratge flexible ofereix a cada usuari una visió personal del tauler de control del pla de prova, segons sigui necessari."
        },
        {
          image: "assets/screenshots/FeatureSorting.PNG",
          title: "Classificació del pla de prova",
          description: "Doneu al vostre tauler la importància correcta de tots els elements. D'aquesta manera, els usuaris de co.meta poden centrar-se just a temps en allò que necessiten veure."
        },
        {
          image: "assets/screenshots/FeatureResults.PNG",
          title: "Resultats de l'exàmen",
          description: "Comprendre el rendiment de les proves d'UI és probablement la tasca més important. Disseny excel·lent, visió general senzilla i més detalls fent clic."
        },
        {
          image: "assets/screenshots/FeatureStepResult.PNG",
          title: "Resultats del detall del pas",
          description: "Cada pas registra els resultats tal com s'executen. La comparació de les captures de pantalla mostra la diferència de píxels."
        },
        {
          image: "assets/screenshots/FeatureResultScore.PNG",
          title: "Puntuació del resultat",
          description: "La puntuació del resultat ofereix una visió general clara i ràpida del rendiment del vostre pla de proves."
        },
        {
          image: "assets/screenshots/FeatureResultLog.PNG",
          title: "Log professional",
          description: "El registre és l'art d'entendre els detalls. Consumeix registres dins de co.meta. El millor servei d'autoservei."
        },
        {
          image: "assets/screenshots/FeatureOptions.PNG",
          title: "Accions del pla de proves",
          description: "Accions més necessàries en posició destacada per a un accés ràpid. Estalvia un temps valuós. Complexitat reduïda per facilitar la comprensió."
        },
        {
          image: "assets/screenshots/AdminPanel.PNG",
          title: "Panell d'administració",
          description: "El tauler d'administració ofereix un conjunt mínim d'accions. co.meta va ser dissenyat per ser autoservei. Aquesta és probablement la pantalla més no utilitzada."
        },
        {
          image: "assets/screenshots/EditFeatureInfo.PNG",
          title: "Selecció de departaments",
          description: "Autoexplicatiu. co.meta ofereix un concepte de seguretat fàcil d'entendre per a llogaters multihabitatges."
        },
        {
          image: "assets/screenshots/FeatureBox.PNG",
          title: "Caixa del pla de proves",
          description: "Cada pla de prova es representa amb informació detallada al tauler. Centra't en la informació important de situacions de prova complexes."
        },
        {
          image: "assets/screenshots/FeatureOptionsMenu.PNG",
          title: "Menú del tauler d'accions",
          description: "El disseny net facilita la navegació a les accions del tauler de control del testplan. Els dissenys nets ajuden a centrar-se."
        },
        {
          image: "assets/screenshots/ContinueOnFailure.PNG",
          title: "Continuar amb el fracàs",
          description: "Amb ''Continua en cas d'error'' podeu definir si els passos que fallen aturaran o no l'execució d'una funció."
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
