import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnChanges, OnInit, OnDestroy {
  title = 'Día 4 del reto';
  url = 'https://s1.ppllstatics.com/lasprovincias/www/multimedia/202112/12/media/cortadas/gatos-kb2-U160232243326NVC-1248x770@Las%20Provincias.jpg';
  /* name = 'Isabel Roldán Córdoba'; */

  cities = ['Barcelona', 'Madrid', 'Córdoba'];
  name!: string;

  ngOnChanges(changes: SimpleChanges): void {
      console.log('Change ->', changes);
  }

  ngOnInit(): void {
      console.log('OnInit -> ');
  }

  ngOnDestroy(): void {
      console.log('Destroy');
  }
}
