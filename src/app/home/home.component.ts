import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { MatPaginatorIntl, MatPaginatorModule } from '@angular/material/paginator';
import { Subject } from 'rxjs';
import { AuthService } from 'src/service-user/auth.service';
import { Router } from '@angular/router';
import { StoryService } from '../../service-story/story.service';
import { Story } from 'src/service-story/story';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  stories: Story[] = [] ;
  trendingStories: Story[] = [];
  getStoriestoShow: Story[] = [];
  storiesperRow: number = 5;
  numberOfstoriestoshow: number = 0;

  constructor(private storyService: StoryService, private router: Router) { }
  ngOnInit(): void {
    this.stories = this.storyService.getSortStory();
    this.numberOfstoriestoshow = this.calculateNumberOfStoriesToShow();
    this.trendingStories = this.getTrendingStories();
    this.getStoriestoShow = this.getStorytoShow();
  }
  calculateNumberOfStoriesToShow(): number {
    let totalStoriestoShow = 2 * this.storiesperRow-1;
    if(this.stories.length < totalStoriestoShow){
      totalStoriestoShow = this.stories.length;
    }
    return totalStoriestoShow;
  }
  getStorytoShow() : Story[] {
    return this.stories.slice(0, this.numberOfstoriestoshow);
  }
  getTrendingStories() : Story[] {
    return this.stories.slice(0, 7);
  }
  isLoggedIn = false;
  gotoDetail(id: number):void{
    this.router.navigate(['/descript', id]);
  }
}
