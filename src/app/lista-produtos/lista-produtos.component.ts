import { Component, OnInit, AfterViewInit, ChangeDetectorRef, NgZone } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdutoService } from './../services/produtos.service';

@Component({
  selector: 'app-lista-produtos',
  templateUrl: './lista-produtos.component.html',
  styleUrls: ['./lista-produtos.component.scss']
})
export class ListaProdutosComponent implements OnInit, AfterViewInit {

  public produtos;

  constructor(
    private route: ActivatedRoute,
    private produtosService: ProdutoService,
    private ngZone: NgZone,
    private router: Router
  ) { }

  ngOnInit() {}

  ngAfterViewInit() {
    this.route.queryParams.subscribe(params =>{
      let search = params['id'];

      if (search) {
        this.produtosService.getProdutos().then(
          res => {
            this.produtos = res;
            let lista = []
  
            this.produtos.forEach(e => {
              let descricao = e.title.toLowerCase();
  
              if  (descricao.indexOf(search) > -1) {
                lista.push(e);
              }
            });
  
            this.ngZone.run(() => {
              this.produtos = lista;
            })
          }
        )
      } else {
        this.produtosService.getProdutos().then( res => { this.produtos = res;})
      }
    })
  }

  verItem(id) {
    this.router.navigate(['/item'], { queryParams: { item: id }})
  }
}
