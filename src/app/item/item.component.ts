import { Itens, Descricao } from './../model/produto.model';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ProdutoService } from '../services/produtos.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  public item : Itens;
  public imageUrl;
  public condicao;
  public descricao;

  constructor(
    private produtosService: ProdutoService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params =>{
      const id = params['item'];

      this.produtosService.getProdutoById(id).subscribe(
        res => {
          let imagens = []
          
          this.item = res;
          this.condicao = this.item.condition === 'new' ? 'Novo' : 'Usado';
          
          this.item.pictures.map(e => {
            imagens.push(e.url)
          })
          this.imageUrl = imagens[0];


          this.produtosService.getDescricao(id).subscribe(
            res => {
              res.forEach(e => {
                this.descricao = e.plain_text
              })
            }
          )
        }
      )
    })
  }
}
