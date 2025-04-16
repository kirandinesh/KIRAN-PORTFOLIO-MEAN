import { Component } from '@angular/core';
import { skillsData } from '../../config';
import { CommonModule } from '@angular/common';
import { SkillData } from '../../interfaces/main';

@Component({
  selector: 'app-infinit-scroll',
  imports: [CommonModule],
  templateUrl: './infinit-scroll.component.html',
  styleUrl: './infinit-scroll.component.css',
})
export class InfinitScrollComponent {
  skillsLists: SkillData[] = skillsData;
}
