import { Component, OnInit } from '@angular/core';
import {OfertaServices} from '../ofertas.service';
import {Oferta} from '../shared/oferta.model'

@Component({
  selector: 'app-restaurantes',
  templateUrl: './restaurantes.component.html',
  styleUrls: ['./restaurantes.component.css'],
  providers: [OfertaServices]
})
export class RestaurantesComponent implements OnInit {

  private ofertasDeRestaurante:Oferta[]

  constructor(private ofertasService: OfertaServices) { }

  ngOnInit() {
    this.ofertasService.getOfertasPorcategoria("restaurante")
    .then((result : Oferta[]) =>
    {
      this.ofertasDeRestaurante = result;
    })
    .catch((result:any) => 
    {
      console.log("Erro");
      console.log(result);
    })
  }

}
