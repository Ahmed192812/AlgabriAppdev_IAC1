import { Component,Input, OnInit } from '@angular/core';
import { course } from '../courses';
import { COURSE } from '../samp-course';
@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  
  @Input() courses: course []=[];
  
  constructor() { }

  ngOnInit(): void {
  }
}
