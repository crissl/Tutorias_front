import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/services/auth.service';
import { PersonalDataService } from 'app/services/personal-data.service';
import { Router } from '@angular/router';
import { RestService } from 'app/services/rest.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {


  constructor(private authService: AuthService, private personaldataService: PersonalDataService, private router: Router, private restService: RestService) { }

  ngOnInit() {
      // this.pidm = localStorage.getItem('pidm');
      this.isLoggedIn = this.authService.isLoggedIn();
      console.log(this.isLoggedIn);
      if (this.isLoggedIn) {
        this.userName = this.authService.getUserName();
        console.log(this.userName);
        this.personaldataService.findDataUser(environment.servicioUser, this.userName).subscribe((data: {}) => {
          this.persona = data[0];
          this.personaldataService.findDataUser(environment.servicioUserldap, this.userName).subscribe(
            data => {
              this.initialiseInvites2(data.nombreCompleto, data.codId);
             
              this.personaldataService.findDataUser(environment.servicioCedulaById, data.codId).subscribe(
                data => {
                  this.cedula = data[0];
  
                  this.initialiseInvites1(this.cedula.cedula);
                }
              )
            }
          )
          console.log('USUARIO', this.persona.pidm);
          this.initialiseInvites(this.persona.pidm);
        });
      }
    
  }

}
