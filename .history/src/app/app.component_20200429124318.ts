import { Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public isLoggedIn = false;
  public userName: string;
  constructor(private authService:AuthService, private router: Router){
    
  }
  
  ngOnInit(){
    this.isLoggedIn = this.authService.isLoggedIn();
    if (!this.isLoggedIn) {
      this.login();
    }


  }
  
  login() {
    this.authService.obtainAccessToken();
  }

}
