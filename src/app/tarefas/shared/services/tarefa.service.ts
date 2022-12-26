import { TarefaModel } from './../models/tarefa.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  constructor() { }

  listarTodas(): TarefaModel[] {
    const tarefas = localStorage['tarefas'];
    return tarefas ? JSON.parse(tarefas) : [];
  }

  cadastrar(tarefa: TarefaModel): void {
    const tarefas = this.listarTodas();
    tarefa.id = new Date().getTime();
    tarefas.push(tarefa);
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }

  buscaPorId(id: number): TarefaModel {
    const tarefas: TarefaModel[] = this.listarTodas();
    return tarefas.find(tarefa => tarefa.id === id);
  }

  atualizar(tarefa: TarefaModel):void {
    const tarefas: TarefaModel[] = this.listarTodas();
    tarefas.forEach((obj, index, objs) => {
      if(tarefa.id === obj.id) objs[index] = tarefa;

    });
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }

  remover(id: number): void {
    let tarefas: TarefaModel[] = this.listarTodas();
    tarefas = tarefas.filter(tarefa => tarefa.id !== id);
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }

  alterarStatus(id: number): void {
    const tarefas: TarefaModel[] = this.listarTodas();
    tarefas.forEach((obj, index, objs) => {
      if(id === obj.id) objs[index].concluida = !obj.concluida;
    });
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }
}
