import { Component, OnInit } from '@angular/core';

import { Data } from '../../data';
import { DataService } from '../../data.service';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {

  private refreshSubscription: Subscription;
  data: Data[];

  constructor(
    private dataService: DataService,
  ) { }

  ngOnInit() {
    this.refreshData();
    this.refreshSubscription = interval(3000).subscribe(
      _ => { this.refreshData() }
    );
  }

  refreshData() {
    this.dataService.getData().subscribe(data => this.data = data);
  }
}
