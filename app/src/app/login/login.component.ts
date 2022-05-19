import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formGroup: FormGroup;

  constructor(private authService: AuthServiceService) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm = () => {
    this.formGroup = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    })
  }

  loginProcess () {
    console.log('hi')
    if (this.formGroup.valid) {
      this.authService.login(this.formGroup.value).subscribe(result => {
        if (result.responseCode == 200) {
          console.log(result)
          alert(result.responseCode)

        }
        else {
          console.log(result)
          alert(result.responseCode)

        }
      })
    }
  }

}
