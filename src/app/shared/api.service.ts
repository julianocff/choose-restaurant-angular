import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() {}

  getAll() {
    return of([
      {
        id: 1,
        nome: 'Rossi',
        endereco: 'Endereço Rossi',
        votos: 3,
        categoria: 'Buffet Livre'
      },
      {
        id: 2,
        nome: 'Clube do Comercio',
        endereco: 'Endereço Clube do Comercio',
        votos: 3,
        categoria: 'Prato Pronto'
      },
      {
        id: 3,
        nome: 'Oca',
        endereco: 'Endereço Madero',
        votos: 3,
        categoria: 'Pizzaria'
      },
      {
        id: 4,
        nome: 'Refugios',
        endereco: 'Endereço Refugios',
        votos: 3,
        categoria: 'Lanchonete'
      }
    ]);
  }
}
