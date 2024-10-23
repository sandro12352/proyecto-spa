import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: ``
})
export class SearchBoxComponent {

  @Output()
  public onValue:EventEmitter<string> = new EventEmitter();
 

  @ViewChild("txtInput")
  public input!:ElementRef<HTMLInputElement>;

  emitirValor(value:string):void{
    this.onValue.emit(value)
  }


  @Input()
    public placeholder:string="";
}
