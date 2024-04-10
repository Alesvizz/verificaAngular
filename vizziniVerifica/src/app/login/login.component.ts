import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { GestioneService } from '../gestione.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  
  data: any;

  utente: any = null;

  newUtente: any = null;

  loginSuccesso: boolean = false;

  errorLogin = false;

  regSuccess = false;

  loginUtente():void {
    this.utente = {
      username: "",
      password: ""
    }

    this.newUtente = null;
  }

  nuovoUtente():void {
    this.newUtente = {
      username: "",
      password: "",
      email: "",
      name: "",
      surname: "",
    }

    this.utente = null;
  }


  constructor(private gestioneService: GestioneService) {}

  login(): void{
    if(this.controlLog()){

      this.gestioneService.login(this.utente).subscribe(
        (remoteData) => {
          this.data = remoteData;
          this.controlloLogin();
        }
        )
        
      }
  }

  controlloLogin(): void{
    if(this.data.valid){
      this.loginSuccesso = true;
      this.errorLogin = false;
    } else {
      this.errorLogin = true;
    }
  } 

  registration(): void{

    if(this.controlReg()) {

      this.gestioneService.register(this.newUtente).subscribe(
        (remoteData) => {
          this.data = remoteData;
        }
        )
        this.registerConfirm();
      }
    }

  controlReg(): boolean {
    if (this.newUtente.password == "" || this.newUtente.username == "") return false;
    else return true;
  }

  controlLog(): boolean {
    if (this.utente.password == "" || this.utente.username == "") return false;
    else return true;
  }

  registerConfirm(): void{
    this.regSuccess = true;
  }

  indietro(): void{
    this.loginSuccesso = false;
    this.regSuccess = false;
  }
}
