import { Injectable } from '@angular/core';
import { Livros } from './livros.model';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({ providedIn: 'root' })
export class LivrosService{
  private livros: Livros [] = [];
private listaLivrosAtualizada = new Subject <Livros[]>();
constructor (private httpClient: HttpClient){
}

  getLivros(): void {
    this.httpClient.get <{mensagem: string, livros:
    Livros[]}>('http://localhost:3000/api/livros').subscribe(
    (dados) => {
    this.livros = dados.livros;
    this.listaLivrosAtualizada.next([...this.livros]);
    }
    )
    }
  adicionarLivros(id: number, titulo: string, autor: string, paginas: number) {
    const livro: Livros = {
    id: id,
    titulo: titulo,
    autor: autor,
    paginas: paginas,
    };
    this.httpClient.post<{mensagem: string}> ('http://localhost:3000/api/livros',
    livro).subscribe(
    (dados) => {
    console.log(dados.mensagem);
    this.livros.push(livro);
    this.listaLivrosAtualizada.next([...this.livros]);
    }
    )
    }


    getListaDeLivrosAtualizadaObservable(){
      return this.listaLivrosAtualizada.asObservable();
    }
}

