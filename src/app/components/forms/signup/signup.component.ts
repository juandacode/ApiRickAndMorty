import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  formSignUp: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    //Iniciamos los campos del formulario y sus valores por defecto
    this.formSignUp = this.formBuilder.group({
      name: ['', Validators.required],
      lastName: '',
      email: ['', Validators.compose([Validators.required, Validators.email])],
      phone: '',
      address: ''
    });
    // Nos suscribimos a los cambios que ocurren en el formulario
    this.formSignUp.valueChanges.subscribe((user) => {
      console.log(user);
    });
  }
  get name() {
    return this.formSignUp.get('name');
  }
  get lastName() {
    return this.formSignUp.get('lastName');
  }
  get email() {
    return this.formSignUp.get('email');
  }
  get phone() {
    return this.formSignUp.get('phone');
  }
  get address() {
    return this.formSignUp.get('address');
  }

  sendFormToConsole() {
    // Controlamos que el formulario sea valido
    if(this.formSignUp.valid) {
      console.log(this.formSignUp.value);
      // Resetear los campos del formulario
      this.formSignUp.reset();
    }
  }
}



