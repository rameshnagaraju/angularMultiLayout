import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor(private _http: HttpClient, private _router: Router) {}
  _registerUrl = "http://localhost:8080/api/auth/register";
  _loginUrl = "http://localhost:8080/api/auth/login";
  registerUser(user) {
    return this._http.post<any>(this._registerUrl, user);
  }

  loginUser(user) {
    return this._http.post<any>(this._loginUrl, user);
  }

  loggedIn() {
    return !!localStorage.getItem("token");
  }

  logoutUser() {
    localStorage.removeItem("token");
    this._router.navigate(["/login"]);
  }

  getToken() {
    return localStorage.getItem("token");
  }
}
