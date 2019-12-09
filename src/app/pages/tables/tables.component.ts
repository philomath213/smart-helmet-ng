import { Component, OnInit } from '@angular/core';

import { Data } from '../../data';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {

  data: Data[];

  constructor(
    private dataService: DataService,
  ) { }

  ngOnInit() {
    this.dataService.getData().subscribe(data => this.data = data);
  }

  refreshData() {
    this.dataService.getData().subscribe(data => this.data = data);
  }
}
