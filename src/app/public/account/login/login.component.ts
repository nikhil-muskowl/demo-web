import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { FormServiceService } from '../../../services/form-service/form-service.service';
import { UserService } from '../../../services/account/user.service';
import { NotifierService } from 'angular-notifier';
import {Router} from "@angular/router";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private loginForm: FormGroup;
  private heading = 'Sign-in';


  private responseData;

  private status;
  private messageTitle;
  private message;

  private username;
  private password;

  public formErrors = {
    username: '',
    password: '',
  };

  private readonly notifier: NotifierService;
  constructor(
    private formBuilder: FormBuilder,
    private formService: FormServiceService,
    private userService: UserService,
    private notifierService: NotifierService,
    private router: Router
  ) {
    this.notifier = notifierService;
    this.username = '';
    this.password = '';

    this.createForm();
  }

  public createForm() {
    this.loginForm = this.formBuilder.group({
      username: [this.username, Validators.compose([
        Validators.required
      ])],
      password: [this.password,
      Validators.compose([
        Validators.minLength(5),
        Validators.maxLength(25),
        Validators.required,
      ])],
    });

    this.loginForm.valueChanges.subscribe((data) => {
      this.formErrors = this.formService.validateForm(this.loginForm, this.formErrors, true)
    });
  }


  public onSubmit() {
    // mark all fields as touched
    this.formService.markFormGroupTouched(this.loginForm);
    if (this.loginForm.valid) {

      this.userService.login(this.loginForm.value).subscribe(
        response => {
          this.responseData = response;

          this.status = this.responseData.status;
          this.message = this.responseData.message;

          if (!this.status) {
            this.messageTitle = 'Warning!';
            if (this.responseData.result) {
              this.responseData.result.forEach(element => {
                if (element.id == 'username') {
                  this.formErrors.username = element.text
                }
                if (element.id == 'password') {
                  this.formErrors.password = element.text
                }
              });
            }
          } else {
            this.messageTitle = 'Sucess!';
            this.userService.setData(this.responseData.result);
            this.router.navigate(['/my-account']);
          }

          this.notifier.show({
            type: 'success',
            message: this.message,
          });
        },
        err => {
          console.error(err);
        }
      );

    } else {
      this.formErrors = this.formService.validateForm(this.loginForm, this.formErrors, false);
      this.notifier.show({
        type: 'warning',
        message: 'Validation Error!',
      });
    }
  }
  ngOnInit() {
  }

}
