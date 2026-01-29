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
    bio: 'I’m a Full-Stack Developer with experience in Angular, React, Node.js, and MongoDB. I enjoy building scalable web applications, solving real-world problems, and creating clean, user-friendly interfaces.',
  };
}
