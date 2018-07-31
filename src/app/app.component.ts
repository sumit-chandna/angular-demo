import { Component } from '@angular/core';
import { FavoriteChangedEventArgs } from './favorite/favorite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular App';
  post = {
    title: "favorite",
    isFavorite: true
  }
  onFavoriteChange(eventArgs: FavoriteChangedEventArgs) {
    console.log("favorite Changed: ", eventArgs.newValue);
  }
}
