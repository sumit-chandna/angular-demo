import { Component, OnInit } from '@angular/core';
import { FollowerService } from '../services/follower.service';

@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.css']
})
export class FollowersComponent implements OnInit {
  followers;
  constructor(private followerService: FollowerService) {
  }

  ngOnInit() {
    this.followerService.getAll()
      .subscribe(followers => this.followers = followers);
  }

}
