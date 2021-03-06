import { Component, OnInit } from '@angular/core';
import {OfertaServices} from '../ofertas.service';
import {Oferta} from '../shared/oferta.model'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [OfertaServices]
})
export class HomeComponent implements OnInit {

  private ofertas:Oferta[]

  constructor(private ofertasService: OfertaServices) { }

  ngOnInit() {
 
      this.ofertasService.getOfertas()
      .then((result: Oferta[]) => 
      {
        console.log("Chegou o resultado das ofertas")
        this.ofertas = result
      })
      .catch((result:any) => 
      {
        console.log("Erro");
        console.log(result);
      })
  }

}
