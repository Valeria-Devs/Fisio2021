import { Component, OnInit } from '@angular/core';
import { Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  email = new FormControl('', [Validators.required, Validators.email]);
  telefono = new FormControl ('',[Validators.required,Validators.maxLength(10),Validators.minLength(8), Validators.pattern('/^[0-9]$/')]);
  nombre= new FormControl ('',[Validators.required,Validators.maxLength(20),Validators.minLength(3), Validators.pattern('[a-zA-Z ]*')]);
  apellido= new FormControl ('',[Validators.required,Validators.maxLength(20),Validators.minLength(3), Validators.pattern('[a-zA-Z ]*')]);
  messagge= new FormControl ('',[Validators.required,Validators.maxLength(50),Validators.minLength(10)]);
asunto = new FormControl('', [Validators.required, Validators.minLength (4)]);
  ErrorMessageName(){
    if (this.nombre.hasError('required')) {
      return 'Ingresa un nombre valido';
    }
    return this.nombre.hasError('nombre') ? 'Nombre de usuario no valido' : ''; 

  }
  /******/
  ErrorMessagePhone(){
    if (this.telefono.hasError('required')) {
      return 'Ingresa un numero valido';
    }
    return this.telefono.hasError('telefono') ? 'Ingresa un telefono valido' : '';

  }
  /******/

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Debes ingresar un valor';
    }
    return this.email.hasError('email') ? 'Cuenta no valida' : ''; 
  }

  ErrorMessageMenssage() {
    if (this.messagge.hasError('required')) {
      return 'Ingresa un mensaje';
    }
    return this.messagge.hasError('messagge') ? 'Mensaje no valido' : ''; 
  }
  ErrorMessageAsunto(){
    if (this.asunto.hasError('required')) {
      return 'Ingresa un mensaje';
    }
    return this.asunto.hasError('asunto') ? 'Asunto no valido' : ''; 
  }

}
