import { NgModule } from '@angular/core';
import { ListaProdutosComponent } from './lista-produtos/lista-produtos.component';
import { Routes, RouterModule } from '@angular/router';
import { ItemComponent } from './item/item.component';

const routes: Routes = [
  {
    path: '',
    component: ListaProdutosComponent
  },
  {
    path: 'home',
    component: ListaProdutosComponent
  },
  {
    path: 'home/:id',
    component: ListaProdutosComponent
  },
  {
    path: 'item',
    component: ItemComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
