import { Component, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';
import { aboutData } from '../../config';
import { AbouData } from '../../interfaces/main';

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  aboutLists: AbouData[] = aboutData;
  profile = {
    bio: 'I am a B.Tech in Computer Science and Engineering graduate with expertise in full-stack development. My journey in web development began with a deep curiosity for problem-solving and building intuitive digital experiences',
  };
}
