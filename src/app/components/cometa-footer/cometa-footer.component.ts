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
      content: [{ name: "Introduction", href: "#" },{ name: "Getting Started", href: "#" },{ name: "Donate", href: "#" }]
    },
    { 
      title: "Learn More",
      content: [{ name: "Documentation", href: "#" },{ name: "What the product", href: "#"}]
    },
    { 
      title: "Using Co.meta",
      content: [{ name: "Shedule a Demo", href: "#" },{ name: "User Scenarios", href: "#" },{ name: "Login", href: "#" }]
    },
    { 
      title: "Community & Help",
      content: [{ name: "Contact Us", href: "#" },{ name: "Telegram", href: "#" },{ name: "WhatsApp", href: "#" },{ name: "Logos", href: "#" }]
    }
];


  constructor() { }

  ngOnInit(): void {
    console.log(this.links);
  }

}
