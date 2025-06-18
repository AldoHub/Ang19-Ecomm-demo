import { Component, input, InputSignal, output } from '@angular/core';

@Component({
  selector: 'app-primary-button',
  imports: [],
  templateUrl: './primary-button.html',
  styleUrl: './primary-button.css'
})
export class PrimaryButton {

  public label: InputSignal<string> = input('');
  public btnClicked = output();

  //send the event out
  public handleButtonClick(){
    this.btnClicked.emit();
  }
}
