import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';
import { Login } from '../model/login';
import { LoginService } from '../shared/login.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public formGroup: FormGroup= new FormGroup ({userName: new FormControl(), password: new FormControl()});

  public login: Login = { email: "", password: "" };

  constructor(private loginService: LoginService,
    private formBuilder: FormBuilder,
    private router: Router) { }

  ngOnInit(): void {
  }

  private buildForm() {
    this.formGroup = this.formBuilder.group({
      userName: '',
      password: ''
    });
  }

  loginUser() {
    this.router.navigate(['/home']);
    /*console.log(this.formGroup.value);
    this.login = this.formGroup.value;
    console.log(this.login);
    this.loginService.authenticationUser(this.login)
      .subscribe(response => {
        if (response != null) {
          localStorage.setItem('token', response);
          //this.router.navigate(['/home']);
        }
        console.log(response);
      })*/
  }


}
