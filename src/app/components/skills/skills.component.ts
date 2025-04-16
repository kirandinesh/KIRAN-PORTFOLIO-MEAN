import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { skillsData } from '../../config';
import { SkillData } from '../../interfaces/main';

@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css',
})
export class SkillsComponent {
  skills: SkillData[] = skillsData;
}
