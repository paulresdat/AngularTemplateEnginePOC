import { CommonModule } from "@angular/common";
import { Component, EventEmitter, Output } from "@angular/core";

export abstract class Layout {
  abstract onclick(cntnt: any): (value: any) => void;
  abstract onblur(cntnt: any): (value: any) => void;
  abstract onchange(cntnt: any): (value: any) => void;
}

@Component({ 
    template: '',
    standalone: true,
    imports: [CommonModule]
})
export abstract class ComplexLayout implements Layout {
  @Output()
  public AppEngineEventEmitter = new EventEmitter<string>();

  onclick(cntnt: any): (value: any) => void {
    return (value: any) => {
      this.AppEngineEventEmitter.emit(
        cntnt['name'] + " was clicked, type: " + 
        cntnt['question']['type'] + ", value logged: " + value);
    }
  }

  onblur(cntnt: any): (value: any) => void {
    return (value: any) => {
      this.AppEngineEventEmitter.emit(
        cntnt['name'] + " was blurred, type: " + 
        cntnt['question']['type'] + ", value logged: " + value);
    }
  }

  onchange(cntnt: any): (value: any) => void {
    return (value: any) => {
      this.AppEngineEventEmitter.emit(
        cntnt['name'] + " was changed, type: " + 
        cntnt['question']['type'] + ", value logged: " + value);
    }
  }
}
