import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NaviComponent } from './navi/navi.component';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseInfoComponent } from './course-info/course-info.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { ArticlesComponent } from './articles/articles.component';
import { ContactsInfoComponent } from './contacts-info/contacts-info.component';

@NgModule({
  declarations: [
    AppComponent,
    NaviComponent,
    CourseListComponent,
    CourseInfoComponent,
    AddCourseComponent,
    ArticlesComponent,
    ContactsInfoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
