import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  boxes: number[] = [];
  constructor() { }

  ngOnInit(): void {
    this.boxes = Array(12).fill(0);
  }
}
