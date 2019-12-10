import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-restaurante',
  templateUrl: './cadastro-restaurante.component.html',
  styleUrls: ['./cadastro-restaurante.component.scss']
})
export class CadastroRestauranteComponent implements OnInit {

  confirmaCadastro() {
    if (!confirm('Deseja realizar o cadastro?')) {
      return false;
    }
    alert('Cadastro realizado com sucesso!');
  }

  cancelarCadastro() {
    location.reload();
  }
  constructor() { }

  ngOnInit() {
  }

}
