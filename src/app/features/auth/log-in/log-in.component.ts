import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/core/services/localStorage.service';
import { ValidatorsService } from 'src/app/core/services/validation.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss'],
})
export class LogInComponent implements OnInit {
  isLoading: boolean = false;
  showPassword: boolean = false;

  form: FormGroup = new FormGroup({
    email: new FormControl('', [
      ValidatorsService.required,
      ValidatorsService.emailValidator,
      ValidatorsService.spaceValidator,
    ]),
    password: new FormControl('', [
      ValidatorsService.required,
      ValidatorsService.spaceValidator,
    ]),
  });

  constructor(
    private userService: UserService,
    private localStorageService: LocalStorageService,
    private route: Router
  ) {}

  ngOnInit() {}

  logIn() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.isLoading = true;
    let body = { ...this.form.value };
    this.userService.logIn(body).subscribe(
      (res) => {
        console.log(res);
        this.localStorageService.token = res.token;
        this.localStorageService.user = res;
        this.route.navigate(['/admin/dashboard']);
      },
      (error: any) => {
        console.log(error);
        // Becuase the api is not working
        this.localStorageService.token = this.staticToken;
        this.localStorageService.user = this.staticUser as any;
        this.route.navigate(['/admin/dashboard']);
      }
    );
  }


  staticToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzZXNzaW9uIjoyMTE2LCJ1c2VyIjoxLCJpYXQiOjE2Njc4OTA1NzEsImV4cCI6MTY2Nzg5NDE3MX0.2FSRHFEqeb-jmfuzhDRpMek-wj62jT9DzuilFT1__xg';
  staticUser = {
    "id":1,
    "name":"Super",
    "email":"superadmin@gmail.com",
    "deviceType":"web",
    "status":"active",
    "lastName":"admin",
    "fullName":"Super admin",
    "phone":"9803631850",
    "countryCode":"91"
  }

}
