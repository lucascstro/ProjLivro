import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import {Livros} from '../livros.model';
import {LivrosService} from '../livros.service';
import {Subscription, Observable} from 'rxjs';


@Component({
  selector: 'app-livros-lista',
  templateUrl: './livros-lista.component.html',
  styleUrls: ['./livros-lista.component.css']
})

export class LivrosListaComponent implements OnInit,OnDestroy {
  livros: Livros[] = [];
private livrosSubscription: Subscription;l

  constructor(public  livroService: LivrosService) { }
  ngOnInit(): void {
    this.livroService.getLivros();
    this.livrosSubscription = this.livroService
    .getListaDeLivrosAtualizadaObservable()
    .subscribe((clientes: Livros[]) => {
    this.livros = clientes;
    });
    }
  ngOnDestroy(): void{
    this.livrosSubscription.unsubscribe();
  }

}
