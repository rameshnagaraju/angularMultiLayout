import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl
} from "../../../../node_modules/@angular/forms";

import { AuthService } from "../../services/auth.service";
import { Router } from "../../../../node_modules/@angular/router";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private _authService: AuthService,
    private _router: Router
  ) {}

  public registrationForm: FormGroup;
  ngOnInit() {
    this.buildRegistrationForm();
  }

  public buildRegistrationForm() {
    this.registrationForm = this.fb.group({
      fname: ["Ramesh"],
      lname: [""],
      email: ["xyz@gmail.com"],
      password: ["abc"],
      confirmPassword: ["abc"],
      role: ["user"]
    });
  }

  register(): void {
    console.log(this.registrationForm.value);
    this._authService.registerUser(this.registrationForm.value).subscribe(
      response => {
        console.log("Success!", response);
        localStorage.setItem("token", response.token);
        this._router.navigate(["/admndashboard"]);
      },
      error => console.error("Error!", error)
    );
  }
}
