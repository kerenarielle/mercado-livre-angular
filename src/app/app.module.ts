import { environment } from './../environments/environment';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaProdutosComponent } from './lista-produtos/lista-produtos.component';
import { ItemComponent } from './item/item.component';
import { ProdutoService } from './services/produtos.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ListaProdutosComponent,
    ItemComponent
  ],
  imports: [
    HttpModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    ProdutoService,
    {provide: 'API_URL', useValue: environment.apiEndPoint}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
