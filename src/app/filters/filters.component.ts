import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CoreService } from '../core/core.service';
import { DataService } from '../data.service';
import { Filter } from '../core/model'

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css'],
  providers: [CoreService]
})
export class FiltersComponent implements OnInit {
  filters: Filter;


  constructor(private _services: CoreService, private sharedData : DataService ) { }

  ngOnInit() {
    this._services.getFilters()
      .subscribe(res => {
        this.filters = res;
      })
  }

  filterChanged(o, event): void {
     this.sharedData.filterChanged(o.id, event.target.checked);
  }


 


}
