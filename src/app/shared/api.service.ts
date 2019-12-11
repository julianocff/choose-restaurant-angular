import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';

const dadosMockados = [
  {
    id: 1,
    nome: 'Rossi',
    endereco: 'Endereço Rossi',
    votos: 1,
    categoria: 'Buffet Livre'
  },
  {
    id: 2,
    nome: 'Clube do Comercio',
    endereco: 'Endereço Clube do Comercio',
    votos: 1,
    categoria: 'Prato Pronto'
  },
  {
    id: 3,
    nome: 'Oca',
    endereco: 'Endereço Madero',
    votos: 1,
    categoria: 'Pizzaria'
  },
  {
    id: 4,
    nome: 'Refugios',
    endereco: 'Endereço Refugios',
    votos: 1,
    categoria: 'Lanchonete'
  }
];

const ordenarPorVotos = () => {
  dadosMockados.sort((left, right) => {
    return right.votos - left.votos;
  });
};

const ultimoVoto = new BehaviorSubject(null);

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() {}

  getAll() {
    ordenarPorVotos();
    return of(dadosMockados);
  }

  getUltimoVoto() {
    return ultimoVoto.asObservable();
  }

  cadastrar(item) {
    item.id = dadosMockados.length + 1;
    item.votos = 0;
    dadosMockados.push(item);
    return of(item);
  }

  enviar(item) {
    ultimoVoto.next(item);
    item.votos += 1;
    return of(item);
  }

  getVencedor() {
    ordenarPorVotos();
    return of(dadosMockados[0]);
  }

}
