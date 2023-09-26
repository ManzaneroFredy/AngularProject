import { Component } from '@angular/core';
import { BusquedaService } from 'src/app/servicio/busqueda.service';
import { Busqueda } from 'src/app/interfaces/busqueda';

@Component({
  selector: 'app-cpm-busqueda',
  templateUrl: './cpm-busqueda.component.html',
  styleUrls: ['./cpm-busqueda.component.css']
})
export class CpmBusquedaComponent {
  result! : Busqueda | null;
  txtBusqueda!: string;
  

  constructor(private ServicioBusquedaService: BusquedaService){
    
  }

  ngOnInit(): void{
    
    // this.ServicioBusquedaService.busqueda('merida').then(
    //   (response) => {
    //     alert("Número total de elementos llamados -angular- :" + response.total_count);
    //     this.result = response;
    //   },(error) => {
    //     alert("Error " + error.statuText)
    //   }
    // )
  }

  busquedaGit = () =>{
    this.ServicioBusquedaService.busqueda(this.txtBusqueda).then(
      (response) => {
        this.result = response;
      },(error) => {
        alert("Error " + error.statuText)
      }
    )
  }
}


