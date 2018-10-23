import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {OfertaServices} from '../../ofertas.service'

@Component({
  selector: 'app-onde-fica',
  templateUrl: './onde-fica.component.html',
  styleUrls: ['./onde-fica.component.css'],
  providers: [OfertaServices]
})
export class OndeFicaComponent implements OnInit {

  private descricao:string = '';
  private activatedRoute : ActivatedRoute;
  constructor(
    router : ActivatedRoute, 
    private ofertasService: OfertaServices
  ) {
    this.activatedRoute = router
   }

  ngOnInit() {
    
    this.ofertasService.getOndeFicarOfertaPorId(this.activatedRoute.parent.snapshot.params['id'])
    .then((descricao:string) => 
    {
      this.descricao = descricao
    })
  }

}
