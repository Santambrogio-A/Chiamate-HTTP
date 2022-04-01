import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'http';
}
export class FooComponent implements OnInit {
  data: Object;
  loading: boolean;
  o :Observable<Object>;
}  
