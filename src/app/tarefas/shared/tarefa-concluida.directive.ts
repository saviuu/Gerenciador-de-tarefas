import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[tarefaConcluida]'
})
export class TarefaConcluidaDirective implements OnInit {

  @Input() tarefaConcluida: boolean;

  constructor(private _el: ElementRef) {}

  ngOnInit() {
      if(this.tarefaConcluida){
        this._el.nativeElement.style.textDecoration = "line-throught";
      }
  }
}
