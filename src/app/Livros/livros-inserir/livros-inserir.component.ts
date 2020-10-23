import { Component, EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-livros-inserir',
  templateUrl: './livros-inserir.component.html',
  styleUrls: ['./livros-inserir.component.css'],
})
  export class LivrosInserirComponent {
    @Output() livroAdicionado = new EventEmitter();
    id: string;
    titulo: string;
    author: string;
    paginas: string

    onAdicionarLivro(){
    const livro = {
    id: this.id,
    titulo: this.titulo,
    author: this.author,
    paginas: this.paginas,
    };
    this.livroAdicionado.emit(livro);
    }    
  }



