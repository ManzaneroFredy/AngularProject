import { Component, OnInit } from '@angular/core';
import { BusquedaService } from './servicio/busqueda.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private ServicioBusquedaService: BusquedaService){}

  ngOnInit(): void{
    // this.ServicioBusquedaService.busqueda('angular').then(
    //   (response) => {
    //     alert("Número total de elementos llamados -angular- :" + response.total_count);
    //   },(error) => {
    //     alert("Error " + error.statuText)
    //   }
    // )
  }
  title = 'my-app';
  secondTitle = 'angular app'
}
