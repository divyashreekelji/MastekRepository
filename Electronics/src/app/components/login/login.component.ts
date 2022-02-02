import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/_services/auth.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

import { IAdmin } from 'src/app/Iadmin';
import { LoginserviceService } from 'src/app/_services/loginservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: any = {
    username: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  //LoginserviceService: any;
  Admin: IAdmin[]=[];
  LoginserviceService: any;

  constructor(private authService: AuthService, private tokenStorage: TokenStorageService, private loginservice:LoginserviceService) { }
 
  //allemployees!:Observable<IAdmin []>;
  Iadmin!:IAdmin[];

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }

    this.getAdmin();
  }
  
  // getAdmin(){
  
  //   this.loginserviceService.getAdmin().subscribe(admin=>this.Iadmin=admin);
  // }



  onSubmit(): void {
    const { username, password } = this.form;

    this.authService.login(username, password).subscribe({
      next: data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
        this.reloadPage();
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    });
  }

  reloadPage(): void {
    window.location.reload();
  }

  getAdmin()
   {
     this.LoginserviceService.getAdmin().subscribe((Admin: IAdmin[])=>this.Admin=Admin);   
   }

  
}
