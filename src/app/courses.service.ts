import { Injectable } from '@angular/core';

@Injectable()
export class CoursesService {

  course = {
    title: "title of course",
    name: "name of course",
    rating: 4.9787,
    students: 3044,
    price: 243.9,
    releaseDate: new Date(2016, 3, 1)
  }
  constructor() { }
  getCourses() {
    return [this.course];
  }
}
