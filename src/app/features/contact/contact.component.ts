import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  form = { name: '', email: '', message: '' };
  loading = false;
  success = false;
  error = false;

  sendEmail() {
    this.loading = true;
    this.success = false;
    this.error = false;

    emailjs
      .send(
        'service_4wa5wuj',
        'template_v34xb0x',
        this.form,
        'kUQb0Wv1cojQUkW9B'
      )
      .then(
        (result: EmailJSResponseStatus) => {
          this.success = true;
          this.loading = false;
          this.form = { name: '', email: '', message: '' };
        },
        (error) => {
          this.error = true;
          this.loading = false;
        }
      );
  }
}
