import { Component } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';

type ContactForm = {
  fullName: string;
  email: string;
  message: string;
};

@Component({
  selector: 'app-contact',
  imports: [FormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  form: ContactForm = {
    fullName: '',
    email: '',
    message: '',
  };
  loading: boolean = false;
  success: boolean = false;
  onSend() {
    this.loading = true;
    console.log(this.form);
    emailjs
      .send(
        'service_73c6cs8',
        'template_w4xkyqr',
        { ...this.form },
        {
          publicKey: '2cIo56bqoNlqNG5VL',
        }
      )
      .then((result) => {
        if (result.status == 200) {
          this.success = true;
          this.loading = false;
          this.form = {
            fullName: '',
            email: '',
            message: '',
          };
        }
      })
      .catch((err) => {});
  }
}
