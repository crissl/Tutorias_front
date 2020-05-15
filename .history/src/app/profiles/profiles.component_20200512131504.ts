import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.scss']
})
export class ProfilesComponent implements OnInit {
  public cedula : String = localStorage.getItem('cedula'); 
  public codId: String = localStorage.getItem('codigo');
  public pidm: String = localStorage.getItem('pidm');


  constructor() { }

  ngOnInit() {
  }

}
