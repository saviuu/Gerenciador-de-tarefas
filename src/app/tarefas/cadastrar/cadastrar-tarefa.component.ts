import { TarefaService } from './../shared/services/tarefa.service';
import { TarefaModel } from './../shared/models/tarefa.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar-tarefa',
  templateUrl: './cadastrar-tarefa.component.html',
  styleUrls: ['./cadastrar-tarefa.component.css']
})
export class CadastrarTarefaComponent implements OnInit {

  @ViewChild('formTarefa', { static: true }) formTarefa: NgForm;
  tarefa: TarefaModel;

  constructor(
    private _tarefaService: TarefaService,
    private _router: Router
    ){}

  ngOnInit() {
    this.tarefa = new TarefaModel();
  }

  cadastrar(): void {
    if(this.formTarefa.form.valid){
      this._tarefaService.cadastrar(this.tarefa);
      this._router.navigate(["/tarefas"]);
    }
  }
}
