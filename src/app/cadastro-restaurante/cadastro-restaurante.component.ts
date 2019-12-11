import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-cadastro-restaurante',
  templateUrl: './cadastro-restaurante.component.html',
  styleUrls: ['./cadastro-restaurante.component.scss']
})
export class CadastroRestauranteComponent implements OnInit {

  nome: string;
  endereco: string;
  categoria: string;

  confirmaCadastro() {

    if (!this.validate()) {
      return alert('Preencha os campos');
    }

    if (!confirm('Deseja realizar o cadastro?')) {
      return false;
    }

    this.enviar();
  }

  validate() {
    return (
      this.nome && this.endereco && this.categoria
    );
  }

  cancelarCadastro() {
    location.reload();
  }

  constructor(private api: ApiService) { }

  ngOnInit() {
  }

  enviar() {
    this.api.cadastrar({
      nome: this.nome,
      endereco: this.endereco,
      categoria: this.categoria,
    }).subscribe(
      () => {
        alert('Cadastro realizado com sucesso!');
        this.nome = '';
        this.endereco = '';
        this.categoria = '';
      }
    );
  }

}
