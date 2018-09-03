import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { DataService } from './data.service';
@Injectable({
  providedIn: 'root'
})
export class FollowerService extends DataService {
  constructor(http: Http) {
    super(http, 'https://api.github.com/users/mosh-hamedani/followers');
  }
}
