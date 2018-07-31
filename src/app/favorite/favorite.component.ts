import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
  //second approach for input
  //problem : property in class must match inputs otherwise 
  //it will not work
  // inputs:['isFavorite']
})
export class FavoriteComponent implements OnInit {
  //first approach for input
  @Input('is-favorite') isFavorite: boolean;
  //isFavorite: boolean;


  //var name same as event in parent component
  @Output('change') changedEvent = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  onClick() {
    this.isFavorite = !this.isFavorite;
    this.changedEvent.emit({ newValue: this.isFavorite });
  }
}

export interface FavoriteChangedEventArgs {
  newValue: boolean;
}