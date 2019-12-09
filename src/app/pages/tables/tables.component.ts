import { Component, OnInit } from '@angular/core';

import { Data } from '../../data';
import { DataService } from '../../data.service';
import { Subscription, interval } from 'rxjs';
import { mapChildrenIntoArray } from '@angular/router/src/url_tree';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {

  private refreshSubscription: Subscription;
  data: Data[];
  temperature_mean: number = null;
  humidity_mean: number = null;
  removed_helmets: number = null;
  collisions: number = null;

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
    this.dataService.getData().subscribe(data => {
      this.data = data;
      const average = list => list.reduce((a, b) => a + b) / list.length;

      this.temperature_mean = average(data.map(d => d.temperature));
      this.humidity_mean = average(data.map(d => d.humidity));

      this.removed_helmets = data.filter(d => d.is_removed).length;
      this.collisions = data.filter(d => d.collision).length;
    });
  }
}
