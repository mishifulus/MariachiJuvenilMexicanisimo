import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-members',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './members.component.html',
  styleUrl: './members.component.css'
})
export class MembersComponent implements OnInit {
  images = [
    'assets/members/member1.JPG',
    'assets/members/member2.JPG',
    'assets/members/member3.JPG',
    'assets/members/member4.JPG',
    'assets/members/member5.JPG',
    'assets/members/member6.jpeg',
  ];
  currentIndex = 0;

  ngOnInit() {
    this.startCarousel();
  }

  startCarousel() {
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    }, 4000);
  }
}
