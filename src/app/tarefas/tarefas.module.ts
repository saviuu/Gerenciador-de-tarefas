import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TarefaService } from './shared/services';
import { ListarTarefaComponent } from './listar';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ListarTarefaComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  providers: [
    TarefaService
  ]
})
export class TarefasModule { }
