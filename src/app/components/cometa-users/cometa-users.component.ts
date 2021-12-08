import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cometa-users',
  templateUrl: './cometa-users.component.html',
  styleUrls: ['./cometa-users.component.scss']
})
export class CometaUsersComponent implements OnInit {

  testimonials = [
    {
      quote: "B",
      text: "efore I got to know co.meta, I couldn't imagine how easy it can be to automate tests without in-depth programming knowledge. Automating tests so quickly and on a large scale with co.meta is not only a big relief in my daily business, it is also fun to work with a product that reflects the great experience and passion of its developers.",
      form: "Cornelia S., Test Manager (Finance Accounting IT Solutions)",
      footer_text: "Daimler AG"
    },
    {
      quote: "W",
      text: "riting UI automation is very easy with cometa particularly because of its no-code offerings and a lot of thought given to different possibilities by the makers of the tool. We are generally impressed with the capability this tool offers. Dig deeper and you will always find something more to explore.",
      form: "Lalitkumar B., QA Engineer",
      footer_text: "Tea-Time with Testers"
    }
];


  constructor() { }

  ngOnInit(): void {
  }

}
