import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  public cedula : String = localStorage.getItem('cedula'); 
  public codId: String = localStorage.getItem('codigo');
  public pidm: String = localStorage.getItem('pidm');
  constructor() { }

  ngOnInit() {
  }

}
