import { Component, OnInit } from '@angular/core';
import { SwitcherService } from '../../cometa-services/shared/switcher.service';

@Component({
  selector: 'app-cometa-footer',
  templateUrl: './cometa-footer.component.html',
  styleUrls: ['./cometa-footer.component.scss']
})
export class CometaFooterComponent implements OnInit {
  links = {
    en: [      
      { 
        title: "Co.meta",
        content: [
          { name: "Introduction", href: "https://drive.google.com/file/d/1Y4lQ5aSC5Dbfn8q5Q4DLy0eEfsGWAVkm/view?usp=sharing" },
          { name: "Getting Started", href: "https://drive.google.com/file/d/1jWA5QeMW1MJ0rmrP60oC5YzpCSRcZa9w/view?usp=sharing" },
          { name: "Donate", href: "#" }
        ]
      },
      { 
        title: "Learn More",
        content: [
          { name: "Documentation", href: "https://github.com/cometa-rocks/cometa_documentation" },
          { name: "What the product", href: "https://www.youtube.com/watch?v=8uv-QAJkOLY&t=4s" }
        ]
      },
      { 
        title: "Using Co.meta",
        content: [
          { name: "Shedule a Demo", href: "https://calendso.com/ralf/cometa-demo" },
          { name: "User Scenarios", href: "https://drive.google.com/file/d/1jlxj-776_oTUyRHrxtFgZJUXmX3yInxn/view?usp=sharing" },
          { name: "Login", href: "https://prod.cometa.rocks/" }
        ]
      },
      { 
        title: "Community & Help",
        content: [
          { name: "Contact Us", href: "mailto:contact@cometa.rocks" },
          { name: "Telegram", href: "https://t.me/joinchat/bFquCBGPBCAwYWZk" },
          { name: "WhatsApp", href: "https://chat.whatsapp.com/CLIOla00LAf4Ym2mux8TXC" },
          { name: "Logos", href: "#" }
        ]
      }
    ],
    ca: [
      { 
        title: "Co.meta",
        content: [
          { name: "Introducció", href: "https://drive.google.com/file/d/1Y4lQ5aSC5Dbfn8q5Q4DLy0eEfsGWAVkm/view?usp=sharing" },
          { name: "Començant", href: "https://drive.google.com/file/d/1jWA5QeMW1MJ0rmrP60oC5YzpCSRcZa9w/view?usp=sharing" },
          { name: "Donar", href: "#" }
        ]
      },
      { 
        title: "Aprèn més",
        content: [
          { name: "Documentació", href: "https://github.com/cometa-rocks/cometa_documentation" },
          { name: "Quin producte", href: "https://www.youtube.com/watch?v=8uv-QAJkOLY&t=4s" }
        ]
      },
      { 
        title: "Utilitzant Co.meta",
        content: [
          { name: "Programa una demostració", href: "https://calendso.com/ralf/cometa-demo" },
          { name: "Escenaris d'usuari", href: "https://drive.google.com/file/d/1jlxj-776_oTUyRHrxtFgZJUXmX3yInxn/view?usp=sharing" },
          { name: "iniciar Sessió", href: "https://prod.cometa.rocks/" }
        ]
      },
      { 
        title: "Comunitat i ajuda",
        content: [
          { name: "Contacta amb nosaltres", href: "mailto:contact@cometa.rocks" },
          { name: "Telegram", href: "https://t.me/joinchat/bFquCBGPBCAwYWZk" },
          { name: "WhatsApp", href: "https://chat.whatsapp.com/CLIOla00LAf4Ym2mux8TXC" },
          { name: "Logotips", href: "#" }
        ]
      }
    ]
  };
 
  currentTheme: any;
  currentLang: any;

  constructor(private sw: SwitcherService) { }

  ngOnInit(): void {
    this.applyCurrentLayoutSettings();
    this.getCurrentLangLinks();
  }

  //filters links by currentLang value and returns an array of objects translated in current language
  getCurrentLangLinks() {
    const currentLangEntry =  Object.entries(this.links).filter(([key]) => key === this.currentLang);
    const currentLangLinks = Object.fromEntries(currentLangEntry);
    const currentLangValues = Object.values(currentLangLinks)[0];
    return currentLangValues;
  }

  applyCurrentLayoutSettings() {
    this.sw.getCurrentThemeObservable().subscribe( (theme: any) => this.currentTheme = theme );
    this.sw.getCurrentLangObservable().subscribe( 
      (lang: any) => {
        this.currentLang = lang
      }
    );
  }
}
