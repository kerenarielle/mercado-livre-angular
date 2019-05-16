import { Itens } from './../model/produto.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class ProdutoService {

  apiUrl: string = 'http://localhost:3003/'

  constructor(private http: HttpClient) {}

  getProdutos() {
    return this.http.get(this.apiUrl);
  }

  getProdutoById(id: String) {
    return this.http.get<Itens>(this.apiUrl+'api/items/'+id);
  }

  getDescricao(id: String) {
    return this.http.get(this.apiUrl+'api/items/'+id+'descriptions')
  }

}
