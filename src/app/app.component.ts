import { Component, OnChanges, OnInit, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnChanges, OnInit, AfterViewInit, OnDestroy {
  title = 'PruebaIngreso';

 
  ngOnInit(): void {
    // Before render
    // Async- Fetch
  }

  ngOnChanges() {
    // Before and during render
    // Changes Input
    // Everytime the input changes
  }
  ngAfterViewInit() {
    // After render
    // After the view is initialized
    // Handler tags Children
  }
ngOnDestroy(): void {
    // Delete the component
  }
}


