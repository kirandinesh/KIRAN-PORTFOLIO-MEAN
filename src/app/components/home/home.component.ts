import { Component, OnInit } from '@angular/core';
import { NgxTypedJsModule } from 'ngx-typed-js';

import { InfinitScrollComponent } from '../infinit-scroll/infinit-scroll.component';
import { AnimatedSvgComponent } from '../animated-svg/animated-svg.component';
import { SvgComponent } from '../../pages/svg/svg.component';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-home',
  imports: [
    NgxTypedJsModule,
    InfinitScrollComponent,
    AnimatedSvgComponent,
    SvgComponent,
    CommonModule,
    RouterLink,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  details: { name: string } = { name: 'kiran dinesh' };

  ngOnInit(): void {}
}
