import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeLayoutComponent } from "./layouts/home/home-layout/home-layout.component";
import { HomeTopNavComponent } from "./layouts/home/home-top-nav/home-top-nav.component";
import { HomePageComponent } from "./pages/home-page/home-page.component";
import { LoginComponent } from "./pages/login/login.component";
import { RegisterComponent } from "./pages/register/register.component";
import { AdmnDashboardLayoutComponent } from "./layouts/admn-dashboard/admn-dashboard-layout/admn-dashboard-layout.component";
import { AdmnDashboardPageComponent } from "./pages/admn-dashboard/admn-dashboard-page/admn-dashboard-page.component";
import { AuthGuard } from "./auth.guard";
const routes: Routes = [
  {
    path: "",
    component: HomeLayoutComponent,
    children: [{ path: "", component: HomePageComponent, pathMatch: "full" }]
  },

  {
    path: "",
    component: HomeLayoutComponent,
    children: [{ path: "login", component: LoginComponent, pathMatch: "full" }]
  },
  {
    path: "",
    component: HomeLayoutComponent,
    children: [
      { path: "register", component: RegisterComponent, pathMatch: "full" }
    ]
  },

  {
    path: "admndashboard",
    canActivate: [AuthGuard],
    component: AdmnDashboardLayoutComponent,
    children: [
      { path: "", component: AdmnDashboardPageComponent, pathMatch: "full" }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
