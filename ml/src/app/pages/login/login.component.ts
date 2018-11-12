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
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private _authService: AuthService,
    private _router: Router
  ) {}

  public loginForm: FormGroup;
  ngOnInit() {
    this.buildLoginForm();
  }

  public buildLoginForm() {
    this.loginForm = this.fb.group({
      email: [""],
      password: [""]
    });
  }

  login(): void {
    console.log(this.loginForm.value);
    this._authService.loginUser(this.loginForm.value).subscribe(
      response => {
        console.log("Successfully logged In!", response);
        localStorage.setItem("token", response.token);
        this._router.navigate(["/admndashboard"]);
      },
      error => {
        console.error("Error!", error);
        alert("Could not login");
      }
    );
  }
}
