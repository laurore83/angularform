import { Component } from '@angular/core';
import { User } from '../models/user.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  newUser: User = {
    firstname: '',
    lastname: '',
    email: '',
    password: '',
  };

  onSubmit(): void {
    console.log(this.newUser);
  }
}
