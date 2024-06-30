import { Component, Input, OnInit } from '@angular/core';
import { StoryService } from 'src/service-story/story.service';
import { Story } from 'src/service-story/story';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent  {
  @Input() story: Story | undefined;
  constructor(){};

}
