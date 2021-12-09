import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cometa-footer',
  templateUrl: './cometa-footer.component.html',
  styleUrls: ['./cometa-footer.component.scss']
})
export class CometaFooterComponent implements OnInit {


  links = [
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
];


  constructor() { }

  ngOnInit(): void {
  }

}
