import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DataService {

  defaultFilter = [];
  private appliedFilters = new BehaviorSubject(this.defaultFilter);

  currentFilter = this.appliedFilters.asObservable();

  filterChanged(filter_id: any[], isChecked: boolean) {
    if (isChecked) {
      this.defaultFilter.push(filter_id)
    } else {
      this.defaultFilter.splice(this.defaultFilter.indexOf(filter_id), 1);
    }

    this.appliedFilters.next(this.defaultFilter);

  }




  constructor() { }

}
