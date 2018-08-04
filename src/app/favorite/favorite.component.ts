import { Component, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
  //second approach for input
  //problem : property in class must match inputs otherwise 
  //it will not work
  // inputs:['isFavorite']
  //ViewEncapsulation.Emulated works by attaching additional attributes 
  //to DOM
  //ViewEncapsulation.NATIVE works byusing DOM shadowdom,works only on latest browser versions
  encapsulation: ViewEncapsulation.Emulated
})
export class FavoriteComponent {
  //first approach for input
  @Input('is-favorite') isFavorite: boolean;
  //isFavorite: boolean;


  //var name same as event in parent component
  @Output('change') changedEvent = new EventEmitter();
  constructor() { }

  onClick() {
    this.isFavorite = !this.isFavorite;
    this.changedEvent.emit({ newValue: this.isFavorite });
  }
}

export interface FavoriteChangedEventArgs {
  newValue: boolean;
}