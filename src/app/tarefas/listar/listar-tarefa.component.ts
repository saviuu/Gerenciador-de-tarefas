
import { TarefaService, TarefaModel} from '../shared';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-tarefa',
  templateUrl: './listar-tarefa.component.html',
  styleUrls: ['./listar-tarefa.component.css']
})
export class ListarTarefaComponent implements OnInit {

  tarefas: TarefaModel[];

  constructor(private _tarefaService: TarefaService){}

  ngOnInit() {
    this.tarefas = this.listarTodas();
  }

  listarTodas(): TarefaModel[] {
    return this._tarefaService.listarTodas();
  }

  remover(): void {

  }
}
