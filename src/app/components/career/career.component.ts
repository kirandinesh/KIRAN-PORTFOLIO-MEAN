import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { educationList, experiences } from '../../config';

@Component({
  selector: 'app-career',
  imports: [CommonModule],
  templateUrl: './career.component.html',
  styleUrl: './career.component.css',
})
export class CareerComponent {
  educations = educationList;
  experiences = experiences;
}
