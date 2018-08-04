import { Injectable } from '@angular/core';

@Injectable()
export class CoursesService {

  courses = [{
    id:1,
    title: "title of course",
    name: "name of course",
    rating: 4.9787,
    students: 3044,
    price: 243.9,
    releaseDate: new Date(2016, 3, 1)
  }, {
    id:2,
    title: "title of course2",
    name: "name of course2",
    rating: 4.9287,
    students: 3044,
    price: 243.9,
    releaseDate: new Date(2016, 5, 1)
  }]
  constructor() { }
  getCourses() {
    return this.courses;
  }
}
