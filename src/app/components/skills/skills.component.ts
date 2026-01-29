import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { skillCategories } from '../../config';
import { SkillCategories } from '../../interfaces/main';

@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css',
})
export class SkillsComponent {
  skills: SkillCategories[] = skillCategories;
}
