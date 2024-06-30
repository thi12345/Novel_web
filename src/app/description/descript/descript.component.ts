import { Component, Input, OnInit } from '@angular/core';
import { StoryService } from'src/service-story/story.service';
import { Story } from'src/service-story/story';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-descript',
  templateUrl: './descript.component.html',
  styleUrls: ['./descript.component.scss']
})
export class DescriptComponent  {
  story: Story | undefined;
  constructor(private storyService: StoryService, private route:ActivatedRoute ){};
  ngOnInit():void {
    this.route.paramMap.subscribe(params => {
      const storyId = +params.get('id')!;
      this.story = this.storyService.getStorybyID(storyId);
    });
  }
}
