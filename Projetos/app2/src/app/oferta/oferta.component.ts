import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { OfertaServices} from '../ofertas.service';
import {Oferta} from '../shared/oferta.model';

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [OfertaServices]
})
export class OfertaComponent implements OnInit {

  private route: ActivatedRoute;
  private ofertaCarregada: Oferta;

  constructor(route: ActivatedRoute, private ofertaService: OfertaServices) { 
    this.route = route;
  }

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    
    this.ofertaService.getOfertasPorId(id).
    then ((oferta: Oferta) => this.ofertaCarregada = oferta);
  }

}
