import { Component } from '@angular/core';
import { FormGroup, FormArray, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-newcourseform',
  templateUrl: './newcourseform.component.html',
  styleUrls: ['./newcourseform.component.css']
})
export class NewcourseformComponent {
  // form = new FormGroup({
  //   name: new FormControl('', Validators.required),
  //   contact: new FormGroup({
  //     email: new FormControl(),
  //     phone: new FormControl()
  //   }),
  //   topics: new FormArray([])
  // });
  //OR
  form;
  constructor(fb: FormBuilder) {
    this.form = fb.group({
      name: ['name', Validators.required],
      contact: fb.group({
        email: ['email'],
        phone: ['phone']
      }),
      topics: fb.array([])
    });
  }


  get topics() {
    return this.form.get('topics') as FormArray;
  }
  addTopic(topic: HTMLInputElement) {
    this.topics
      .push(new FormControl(topic.value));
    topic.value = '';
  }
  removeTopic(topic: FormControl) {
    let index = this.topics.controls.indexOf(topic);
    this.topics.removeAt(index);
  }
}
