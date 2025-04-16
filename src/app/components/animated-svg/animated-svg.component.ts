import { Component } from '@angular/core';
import { HomeSvgComponent } from '../home-svg/home-svg.component';

@Component({
  selector: 'app-animated-svg',
  imports: [HomeSvgComponent],
  templateUrl: './animated-svg.component.html',
  styleUrl: './animated-svg.component.css',
})
export class AnimatedSvgComponent {}
