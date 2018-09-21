import { Component } from '@angular/core';
import { DataService } from './data.service'
import { CoreService } from './core/core.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
   providers: [CoreService, DataService]
})
export class AppComponent {
  title = 'app';
}
