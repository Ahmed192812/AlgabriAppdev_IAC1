import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-info',
  templateUrl: './course-info.component.html',
  styleUrls: ['./course-info.component.css']
})
export class CourseInfoComponent implements OnInit {

  course_coded="BSCS"
  course_DES="coubuter sines"
  Title="couse iformation"
courseImg="../../../assets/imges/bscs1.jpg"

  constructor() { }

  ngOnInit(): void {
  }

}
