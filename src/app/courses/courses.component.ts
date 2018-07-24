import { Component } from '@angular/core';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {

  title ="List of courses";
  courses;
  getTitle() {
    return this.title;
  }
  constructor(coursesService:CoursesService){
    //let coursesService=new CoursesService();
    this.courses=coursesService.getCourses();
  }
}
