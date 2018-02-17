import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { Lesson } from './../shared/model/lesson.modal';
import { GobalEventBus, Observer, LESSONS_LIST_AVAILABLE } from './../event-bus-experiments/event-bus';



@Component({
  selector: 'lessons-list',
  templateUrl: './lessons-list.component.html',
  styleUrls: ['./lessons-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LessonsListComponent implements OnInit, Observer {
  public lessons: Lesson[] = [];
  constructor() {
    console.log('lesson list component is registered with an observer');
    GobalEventBus.registerObserver(LESSONS_LIST_AVAILABLE, this);
  }

  // lesson list component is registered with an observer
  ngOnInit() {
    // console.log('lesson list component is registered with an observer');
    // GobalEventBus.registerObserver(this);
  }

  // lesson list component is recevied the data 
  notify(data: Lesson[]) {
    console.log('lesson list component is recevied the data ')
    this.lessons = data;
  }

}
