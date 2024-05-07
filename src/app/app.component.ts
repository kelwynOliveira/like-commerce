import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { FooterComponent } from "./components/footer/footer.component";
import { WppComponent } from './components/wpp/wpp.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: [
        './app.component.css',
    ],
    imports: [
        RouterOutlet,
        HeaderComponent,
        HomeComponent,
        LoginComponent,
        SignupComponent,
        FooterComponent,
        WppComponent
    ]
})
export class AppComponent {
  title = 'like-commerce';
}
