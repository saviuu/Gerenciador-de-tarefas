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
}
