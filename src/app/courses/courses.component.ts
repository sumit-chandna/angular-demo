import { Component } from '@angular/core';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {

  title = "List of courses";
  courses;
  imageUrl = "http://lorempixel.com/400/200";
  colSpan = 2;
  isActive = false;
  getTitle() {
    return this.title;
  }
  constructor(coursesService: CoursesService) {
    //let coursesService=new CoursesService();
    this.courses = coursesService.getCourses();
  }
  onSave($event) {
    console.log("button clicked");
    this.isActive = !this.isActive;
    $event.stopPropagation();
  }
  onDivClicked($event) {
    console.log("div clicked");
  }
  email1 = "me";
  email2 = "me";
  email3 = "me";
  onKeyUp() {
    console.log(this.email1);
    console.log(this.email2);
    console.log(this.email3);
  }
  text = `Miusov, as a man man of breeding and deilcacy, could not but feel some inwrd qualms, when he reached the Father Superior's with Ivan: he felt ashamed of havin lost his temper. He felt that he ought to have disdaimed that despicable wretch, Fyodor Pavlovitch, too much to have been upset by him in Father Zossima's cell, and so to have forgotten himself. "Teh monks were not to blame, in any case," he reflceted, on the steps. "And if they're decent people here (and the Father Superior, I understand, is a nobleman) why not be friendly and courteous withthem? I won't argue, I'll fall in with everything, I'll win them by politness, and show them that I've nothing to do with that Aesop, thta buffoon, that Pierrot, and have merely been takken in over this affair, just as they have.He determined to drop his litigation with the monastry, and relinguish his claims to the wood-cuting and fishery rihgts at once. He was the more ready to do this becuase the rights had becom much less valuable, and he had indeed the vaguest idea where the wood and river in quedtion were.`;
}
