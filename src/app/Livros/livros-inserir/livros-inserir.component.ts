import { Component, EventEmitter,Output, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LivrosService} from '../livros.service';

@Component({
  selector: 'app-livros-inserir',
  templateUrl: './livros-inserir.component.html',
  styleUrls: ['./livros-inserir.component.css'],
})
  export class LivrosInserirComponent {
    constructor(public livroService: LivrosService){}
    onAdicionarLivro(form: NgForm){
      if(form.invalid){
        return;
      }
      this.livroService.adicionarLivros(
        form.value.id,
        form.value.titulo,
        form.value.autor,
        form.value.paginas
      );
    form.resetForm();

  }
  }


