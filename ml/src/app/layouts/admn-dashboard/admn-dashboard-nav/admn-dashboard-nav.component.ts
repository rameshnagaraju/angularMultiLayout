import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../../services/auth.service";
@Component({
  selector: "app-admn-dashboard-nav",
  templateUrl: "./admn-dashboard-nav.component.html",
  styleUrls: ["./admn-dashboard-nav.component.css"]
})
export class AdmnDashboardNavComponent implements OnInit {
  constructor(private _logout: AuthService) {}

  ngOnInit() {}

  logoutUser() {
    this._logout.logoutUser();
  }
}
