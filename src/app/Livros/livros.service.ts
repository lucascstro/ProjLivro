import { Injectable } from '@angular/core';
import { Livros } from './livros.model';
import { Subject } from 'rxjs';


@Injectable({ providedIn: 'root' })
export class LivrosService{
  private livros: Livros [] = [];
private listaLivrosAtualizada = new Subject <Livros[]>();

  getLivros(): Livros[]{
    return [...this.livros];
  }
  adicionarLivros(id: number, titulo: string, autor: string, paginas: number) {
    const livro: Livros = {
    id: id,
    titulo: titulo,
    autor: autor,
    paginas: paginas,
    };
    this.livros.push(livro);
    this.listaLivrosAtualizada.next([...this.livros]);
    }


    getListaDeLivrosAtualizadaObservable(){
      return this.listaLivrosAtualizada.asObservable();
    }
}

