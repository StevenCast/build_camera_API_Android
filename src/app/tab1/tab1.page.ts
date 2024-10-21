import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() {}

  display: string = '';
  buttons: string[] = [
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '0', '.', '=', '+',
    'CE'
  ];

  onButtonClick(button: string) {
    if (button === '=') {
      this.calculate();
    } 
    else if(button === 'CE'){
      this.clean();
    } else {
      this.display += button;
    }
  }

  clean(){
    try {
      this.display = "";
    } catch (error) {
      this.display = "Error";

    }
  }


  calculate() {
    try {
      this.display = eval(this.display);
    } catch (error) {
      this.display = 'Error';
    }
  }

}
