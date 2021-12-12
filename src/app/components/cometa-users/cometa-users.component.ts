import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { loadStripe } from '@stripe/stripe-js';
import { environment } from '../../../environments/environment';
import { SwitcherService } from '../../cometa-services/shared/switcher.service';

@Component({
  selector: 'app-cometa-users',
  templateUrl: './cometa-users.component.html',
  styleUrls: ['./cometa-users.component.scss']
})
export class CometaUsersComponent implements OnInit {

  donatePanelIsActive = false;
  donateForm: FormGroup;
  loading = false;
  currentTheme: any;
  currentLang: any;

  testimonials = {
    en: [
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
    ],
    ca: [
      {
        quote: "A",
        text: "bans de conèixer co.meta, no m'imaginava el fàcil que pot ser automatitzar proves sense coneixements de programació profunds. Automatitzar les proves tan ràpidament i a gran escala amb co.meta no només suposa un gran alleujament en el meu negoci diari, sinó que també és divertit treballar amb un producte que reflecteixi la gran experiència i passió dels seus desenvolupadors.",
        form: "Cornelia S., responsable de proves (solucions informàtiques de comptabilitat financera)",
        footer_text: "Daimler AG"
      },
      {
        quote: "A",
        text: "utomatitzar l’interfície d’usuari és molt fàcil amb co.meta, sobretot a causa de les seves ofertes sense codi i de la reflexió que els fabricants de l’eina han donat a les diferents possibilitats. En general, ens impressiona la capacitat que ofereix aquesta eina. Aprofundiu i sempre trobareu alguna cosa més per explorar.",
        form: "Lalitkumar B., enginyer de control de qualitat",
        footer_text: "Tea-Time with Testers"
      }
    ]
  };



  constructor(private formBuilder: FormBuilder, private http: HttpClient, private sw: SwitcherService) { 
    this.donateForm = this.formBuilder.group({});
  }

  ngOnInit(): void {
    this.applyCurrentLayoutSettings();
  }

  applyCurrentLayoutSettings() {
    this.sw.getCurrentThemeObservable().subscribe( (theme: any) => this.currentTheme = theme );
    this.sw.getCurrentLangObservable().subscribe( (lang: any) => this.currentLang = lang );
  }

  activateDonatePanel() {
    this.donatePanelIsActive = this.donatePanelIsActive ? false: true;
  }

  setAmount(amount: any) {
    this.form['amount'].setValue(amount);
  }

  setCustomeAmount(event: any) {
    this.setAmount(event.target.value);
  }

  setPeriod(period: any) {
    this.form['period'].setValue(period);
  }

  inicializeForm() {
    this.donateForm = this.formBuilder.group({
      reason: [''],
      amount: [''],
      period: ['']
    });
  }

  get form() {
    return this.donateForm.controls; 
  }

  async onSubmit(period: any) {
    this.setPeriod(period);
    
    this.loading = true;

    const apiURL = 'https://stage.cometa.rocks/backend/createDonation/';
    const stripe = await loadStripe(environment.stripe_key);

    await this.http.post(apiURL, { amount: this.form['amount'].value, period: this.form['period'].value })
    .subscribe(
      (res: any) => {
        stripe?.redirectToCheckout({sessionId: res.sessionId})
        this.loading = false;
      },
      (err: any) => {
        console.log('HTTP Error', err)
        this.loading = false;
      }
    );
  }



}
