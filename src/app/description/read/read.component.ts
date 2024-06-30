import { Component, Input } from '@angular/core';
import { StoryService } from 'src/service-story/story.service';
import { Story } from 'src/service-story/story';
@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css'],

})
export class ReadComponent {
  @Input() story: Story | undefined;
}
