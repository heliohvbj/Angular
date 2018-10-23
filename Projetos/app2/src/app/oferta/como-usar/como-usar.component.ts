import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import{ OfertaServices } from '../../ofertas.service';

@Component({
  selector: 'app-como-usar',
  templateUrl: './como-usar.component.html',
  styleUrls: ['./como-usar.component.css'],
  providers: [OfertaServices]
})
export class ComoUsarComponent implements OnInit {

  private descricao: string;
  constructor(private ActivatedRoute : ActivatedRoute, private OfertaService: OfertaServices) { }

  ngOnInit() {
   
    let id = this.ActivatedRoute.parent.snapshot.params['id'];
    this.OfertaService.getComoUsarOfertaPorId(id)
    .then((descricao:string) => {this.descricao = descricao});

  }

}
