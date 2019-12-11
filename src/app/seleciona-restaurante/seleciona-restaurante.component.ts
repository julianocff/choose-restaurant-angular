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
  ultimoVoto;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.getAll();
    this.api.getUltimoVoto().subscribe((response) => {
      this.ultimoVoto = response;
    });
  }

  getAll() {
    this.api.getAll().subscribe(
      (response) => {
        this.restaurantes = response;
      }
    );
  }

  isAtivo(item) {
    return item === this.ativo || item === this.ultimoVoto;
  }

  votar(item) {
    if (!this.ultimoVoto) {
      this.ativo = item;
    }
  }

  enviar() {
    if (!this.ativo) {
      return alert('Selecione um restaurante.');
    }
    this.api.enviar(this.ativo).subscribe(() => {
      this.getAll();
    });
  }

}
