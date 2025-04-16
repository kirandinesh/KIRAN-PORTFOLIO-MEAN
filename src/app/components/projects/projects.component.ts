import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { projects } from '../../config';
import { Projects } from '../../interfaces/main';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
  projects: Projects[] = projects;
}
