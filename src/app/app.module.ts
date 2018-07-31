import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { CoursesComponent } from './courses/courses.component';
import { CoursesService } from './courses.service';
import { SummaryPipe } from './summary.pipe';
import { FavoriteComponent } from './favorite/favorite.component';

@NgModule({
  declarations: [
    AppComponent, CourseComponent, CoursesComponent, SummaryPipe, FavoriteComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [CoursesService],
  bootstrap: [AppComponent]
})
export class AppModule { }