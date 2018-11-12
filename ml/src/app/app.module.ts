import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HomeLayoutComponent } from "./layouts/home/home-layout/home-layout.component";

import { LayoutModule } from "@angular/cdk/layout";
import {
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatDatepickerModule,
  MatListModule,
  MatCardModule,
  MatDialogModule,
  MatInputModule,
  MatTableModule,
  MatNativeDateModule,
  MatMenuModule,
  MatRadioModule,
  MatProgressSpinnerModule,
  MatFormFieldModule
} from "@angular/material";

import { HomePageComponent } from "./pages/home-page/home-page.component";
import { BodyPlaceholderComponent } from "./layouts/body-placeholder/body-placeholder.component";
import { HomeTopNavComponent } from "./layouts/home/home-top-nav/home-top-nav.component";

import { FlexLayoutModule } from "@angular/flex-layout";
import { LoginComponent } from "./pages/login/login.component";
import { RegisterComponent } from "./pages/register/register.component";
import { AdmnDashboardLayoutComponent } from "./layouts/admn-dashboard/admn-dashboard-layout/admn-dashboard-layout.component";
import { AdmnDashboardNavComponent } from "./layouts/admn-dashboard/admn-dashboard-nav/admn-dashboard-nav.component";
import { AdmnDashboardPageComponent } from "./pages/admn-dashboard/admn-dashboard-page/admn-dashboard-page.component";
import { AuthService } from "./services/auth.service";
import { AuthGuard } from "./auth.guard";
import { TokenInterceptorService } from "./services/token-interceptor.service";

@NgModule({
  declarations: [
    AppComponent,
    HomeLayoutComponent,

    HomePageComponent,
    BodyPlaceholderComponent,
    HomeTopNavComponent,
    LoginComponent,
    RegisterComponent,
    AdmnDashboardLayoutComponent,
    AdmnDashboardNavComponent,
    AdmnDashboardPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatDialogModule,
    MatInputModule,
    MatTableModule,
    MatNativeDateModule,
    MatListModule,
    MatDatepickerModule,
    MatCardModule,
    MatDialogModule,
    MatInputModule,
    MatTableModule,
    MatRadioModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    HttpClientModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
