
import { Component } from '@angular/core';
import { AuthService } from 'src/service-user/auth.service';
import { UserService } from 'src/service-user/user.service';
import { BehaviorSubject, Observable } from 'rxjs';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],


})
export class HeaderComponent {
  isLoggedIn = false;
  userName: string | null = null;
  constructor(private authService: AuthService) { }
  ngOnInit() {
    this.authService.currentUser$.subscribe(user => {
      this.isLoggedIn = !!user;
      this.userName = user? user.username : null;
    });


  }
  onLogin(){

  }
  onLogout(){
    this.authService.logout();
  }

}
