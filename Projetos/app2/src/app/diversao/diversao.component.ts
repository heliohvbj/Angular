import { Component, OnInit } from '@angular/core';
import {OfertaServices} from '../ofertas.service';
import {Oferta} from '../shared/oferta.model'

@Component({
  selector: 'app-diversao',
  templateUrl: './diversao.component.html',
  styleUrls: ['./diversao.component.css'],
  providers: [OfertaServices]
})
export class DiversaoComponent implements OnInit {

  private ofertasDeDiversao:Oferta[]

  constructor(private ofertasService: OfertaServices) { }

  ngOnInit() {
    this.ofertasService.getOfertasPorcategoria("diversao")
    .then((result: Oferta[]) => 
    {
      this.ofertasDeDiversao = result
    })
    .catch((result:any) => 
    {
      console.log("Erro");
      console.log(result);
    })
  }

}
