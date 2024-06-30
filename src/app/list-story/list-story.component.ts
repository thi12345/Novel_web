import { AppComponent } from './../app.component';
import { Component, Injectable } from '@angular/core';
import { OnInit, ViewChild } from '@angular/core';
import { Story } from 'src/service-story/story';
import { StoryService } from 'src/service-story/story.service';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { Subject } from 'rxjs';
import { MatPaginator } from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { PageEvent } from '@angular/material/paginator';

interface FilterData {
  name: string;
  children?: FilterData[];
}
const Tree_data: FilterData[] = [
  { name: 'Genre',
    children: [
      { name: 'Action' },
      { name: 'Adventure' },
      { name: 'Comedy' },
      { name: 'Drama' },
      { name: 'Fantasy' },
      { name: 'Horror' },
      { name: 'Mystery' },
      { name: 'Romance' },
      { name: 'Sci-Fi' },
      { name: 'Thriller' },
      { name: 'Western' },
    ]

  },
  {name: 'publications status',
    children: [
      { name: 'Completed' },
      { name: 'Ongoing' }
    ]
  },
  {
    name: 'country',
    children: [
      { name: 'Japan' },
      { name: 'Korea' }
    ]
  }
];
interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}
@Component({
  selector: 'app-list-story',
  templateUrl: './list-story.component.html',
  styleUrls: ['./list-story.component.css']
})
export class ListStoryComponent implements OnInit {
  stories: Story[] = [];
  dataSource: Story[] = [];
  currentPage = 1;
  pageSize = 12;
  pageIndex=0;
  totalLength: number = this.storyService.getStory().length;



  constructor(private storyService: StoryService) {

  }
  ngOnInit(): void {

    this.loadStories();
  }
  loadStories(): void {
    this.stories = this.storyService.getSortStory();
    this.dataSource = this.stories.slice(0, this.pageSize);
  }

  onPageChanged(event: PageEvent): void {
    this.pageIndex = event.pageIndex ;
    const StartIndex = event.pageIndex * event.pageSize;
    const EndIndex = StartIndex + event.pageSize;
    this.dataSource = this.stories.slice(StartIndex, EndIndex);
  }

}

// export class FilterTree{
//   private _transformer = (node: FilterData, level: number) => {
//     return {
//       expandable: !!node.children && node.children.length > 0,
//       name: node.name,
//       level: level,
//     };
//   }

//   treeControl = new FlatTreeControl<ExampleFlatNode>(
//     node => node.level, node => node.expandable);

//   treeFlattener = new MatTreeFlattener(
//     this._transformer, node => node.level, node => node.expandable, node => node.children);

//   dataSourcetree = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

//   checklistSelection = new Set<string>();
//   constructor() {
//     this.dataSourcetree.data = Tree_data;
//   }

//   hasChild = (_: number, node: ExampleFlatNode) => node.expandable;

//   toggleSelection(node: ExampleFlatNode): void {
//     if (this.checklistSelection.has(node.name)) {
//       this.checklistSelection.delete(node.name);
//     } else {
//       this.checklistSelection.add(node.name);
//     }
//   }

//   isChecked(node: ExampleFlatNode): boolean {
//     return this.checklistSelection.has(node.name);
//   }

//   applyFilter() {
//     // Implement the logic to filter the stories based on selected filters
//   }
// }
