import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cometa-contact-us',
  templateUrl: './cometa-contact-us.component.html',
  styleUrls: ['./cometa-contact-us.component.scss']
})
export class CometaContactUsComponent implements OnInit {

  contactForm: FormGroup;
  loading = false;
  submitted = false;

  constructor(private formBuilder: FormBuilder) {
    this.contactForm = this.formBuilder.group({});
  }

  ngOnInit() {
    this.inicializeForm();
  }


  inicializeForm() {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      subject: ['', Validators.required],
      message: ['', Validators.required],
      captcha: ['', Validators.required]
    });
  }

  get form() {
    return this.contactForm.controls; 
  }

  onSubmit() {
      this.submitted = true;

      if (this.contactForm.invalid) {
          return;
      }

      this.loading = true;
      //todo logic for mail sending
  }
}
