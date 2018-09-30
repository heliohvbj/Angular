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
    //this.ofertas = this.ofertasService.getOfertas();

   /* this.ofertasService.getOfertasSincrono()
      .then(
        (result: Oferta[]) => this.ofertas = result,
        (result:any) => console.log(result)
      )*/

    /*this.ofertasService.getOfertasAssincrono()
      .then((result: Oferta[]) => 
      {
        console.log("Chegou o resultado das ofertas")
        this.ofertas = result
      })
      .catch((result:any) => 
      {
        console.log(result)
      })*/
      
      this.ofertasService.getOfertasAssincronoComAssincrono()
      .then((result: Oferta[]) => 
      {
        console.log("Chegou o resultado das ofertas")
        this.ofertas = result
      })
      .catch((result:any) => 
      {
        console.log(result)
      })
  }

}
