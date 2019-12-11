import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-seleciona-restaurante',
  templateUrl: './seleciona-restaurante.component.html',
  styleUrls: ['./seleciona-restaurante.component.scss']
})
export class SelecionaRestauranteComponent implements OnInit {

  restaurantes = [];
  ativo;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getAll().subscribe(
      (response) => {
        this.restaurantes = response;
      }
    );
  }

  isAtivo(item) {
    return item === this.ativo;
  }

  votar(item) {
    this.ativo = item;
  }

  enviar() {

  }

}
