import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Itens, Descricao } from './../model/produto.model';
import { environment } from './../../environments/environment';
import { ResponseModel } from '../model/response.model';

@Injectable()
export class ProdutoService {

  public response: ResponseModel;

  constructor(private http: HttpClient) {}

  getProdutos() {
    return new Promise((resolve, reject) =>{
      this.http.get<ResponseModel>(environment.apiEndPoint).subscribe(
        res => {
          resolve(res.results);
        },
        err => {
          reject(err);
        }
      )
    })
  }

  getProdutoById(id: String) {
    return this.http.get<Itens>(environment.apiEndPoint+'api/items/'+id);
  }

  getDescricao(id: String) {
    return this.http.get<Descricao[]>(environment.apiEndPoint+'api/items/'+id+'/descriptions');
  }

}
