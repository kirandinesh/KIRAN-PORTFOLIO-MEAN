import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { navBarList } from '../../config';
import { MatIconModule } from '@angular/material/icon';
import { NgxTypedJsModule } from 'ngx-typed-js';
import { RouterLink } from '@angular/router';
import { NavBarList } from '../../interfaces/main';
@Component({
  selector: 'app-header',
  imports: [CommonModule, MatIconModule, NgxTypedJsModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  navItems: NavBarList[] = navBarList;
  activeNav: number = 0;
  isMenuOpen: boolean = false;

  handleActiveNav(index: number) {
    this.activeNav = index;
  }

  handleToggle() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
