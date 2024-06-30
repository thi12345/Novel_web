import { Component } from '@angular/core';

import { MatCheckbox } from '@angular/material/checkbox';
import { MatTreeFlatDataSource, MatTreeFlattener, MatTreeModule } from '@angular/material/tree';
import { FlatTreeControl } from '@angular/cdk/tree';

interface FilterData {
  name: string;
  children?: FilterData[];
}
const Tree_data: FilterData[] = [
  {
    name: 'Genre',
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
  {
    name: 'publications status',
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
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  private _transformer = (node: FilterData, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
    };
  }

  treeControl = new FlatTreeControl<ExampleFlatNode>(
    node => node.level, node => node.expandable);

  treeFlattener = new MatTreeFlattener(
    this._transformer, node => node.level, node => node.expandable, node => node.children);

  dataSourcetree = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  checklistSelection = new Set<string>();
  constructor() {
    this.dataSourcetree.data = Tree_data;
  }

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;

  toggleSelection(node: ExampleFlatNode): void {
    if (this.checklistSelection.has(node.name)) {
      this.checklistSelection.delete(node.name);
    } else {
      this.checklistSelection.add(node.name);
    }
  }

  isChecked(node: ExampleFlatNode): boolean {
    return this.checklistSelection.has(node.name);
  }

  applyFilter() {
    // Implement the logic to filter the stories based on selected filters
  }
}
