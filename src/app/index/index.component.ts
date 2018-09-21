import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CoreService } from '../core/core.service'
import { DataService } from '../data.service'
import { Product } from '../core/model'
import { config } from '../config'

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  products: Product;

  constructor(
    private http: CoreService,
    private sharedData: DataService
  ) { }

  ngOnInit() {

  }

}
