import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { products } from '../../data/products';
import { BannerComponent } from '../../components/banner/banner.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    BannerComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  products = [...products];
angularMath: any;
}
