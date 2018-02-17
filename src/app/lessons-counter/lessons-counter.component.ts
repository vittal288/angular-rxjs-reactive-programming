import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'lessons-counter',
  templateUrl: './lessons-counter.component.html',
  styleUrls: ['./lessons-counter.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LessonsCounterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
