import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CadastroRestauranteComponent } from './cadastro-restaurante/cadastro-restaurante.component';
import { SelecionaRestauranteComponent } from './seleciona-restaurante/seleciona-restaurante.component';

export const ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'cadastroRestaurante',
    component: CadastroRestauranteComponent
  },
  {
    path: 'selecionaRestaurante',
    component: SelecionaRestauranteComponent
  },

];
