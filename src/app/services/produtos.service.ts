import { Itens, Descricao } from './../model/produto.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResponseModel } from '../model/response.model';

@Injectable()
export class ProdutoService {

  apiUrl: string = 'http://localhost:3003/'
  public response: ResponseModel

  constructor(private http: HttpClient) {}

  getProdutos() {
    return new Promise((resolve, reject) =>{
      this.http.get<ResponseModel>(this.apiUrl).subscribe(
        res => {
          resolve(res.results);
        },
        err => {
          reject(err)
        }
      )
    })
  }

  getProdutoById(id: String) {
    return this.http.get<Itens>(this.apiUrl+'api/items/'+id);
  }

  getDescricao(id: String) {
    return this.http.get<Descricao[]>(this.apiUrl+'api/items/'+id+'/descriptions');
  }

}
