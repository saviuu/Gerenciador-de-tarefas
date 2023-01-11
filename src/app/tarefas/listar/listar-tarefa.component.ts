
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

  remover($event: any, tarefa: TarefaModel): void {
    $event.preventDefault();
    if(confirm(`Deseja remover a tarefa "${tarefa.nome}"?`)){
      this._tarefaService.remover(tarefa.id);
      this.tarefas = this._tarefaService.listarTodas();
    }
  }

  alterarStatus($event: any,tarefa: TarefaModel): void {
    $event.preventDefault();
    if(confirm(`Deseja alterar o status da tarefa "${tarefa.nome}"?`)){
      this._tarefaService.alterarStatus(tarefa.id);
      this.tarefas = this._tarefaService.listarTodas()
    }
  }
}
