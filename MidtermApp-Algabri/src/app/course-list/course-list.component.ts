import { Component,Input, OnInit } from '@angular/core';
import { course } from '../courses';
import { COURSE } from '../samp-course';
@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
 coursess = COURSE ;
 
  @Input() courses?: course 
  title = "course info"
  motitle = "Details"
  constructor() { }
 selectedCourse?:course;
 onSelect(course:course):void{
  this.selectedCourse = course;

 }
  ngOnInit(): void {
  }
}
