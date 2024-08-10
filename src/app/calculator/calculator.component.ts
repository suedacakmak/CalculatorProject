import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  isDarkMode = false;
  input = '0';
  result = '=';
  history: { input: string, result: string }[] = [];
  showHistory = false; 

  toggleMode() {
    this.isDarkMode = !this.isDarkMode;
  }

  toggleHistory() {
    this.showHistory = !this.showHistory;  
  }

  pressNum(num: string) {
    if (this.input === '0') {
      this.input = num; 
    } else {
      this.input += num; 
    }
    this.result = ''; 
  }
  
  pressOperator(op: string) {
   
    if (this.input === '' || this.input === '0') {
      return; 
    }

    
    if (['+', '-', '*', '/','%'].includes(this.input.trim().slice(-1))) {
      return;
    }

    this.input += ' ' + op + ' ';
    this.result = '';
  }

  calculate() {
    try {
      this.result = eval(this.input);
      this.history.unshift({ input: this.input, result: this.result });
      if (this.history.length > 3) {
        this.history.pop();
      }
    } catch (e) {
      this.result = 'Error';
    }
  }

  clear() {
    this.input = '0'; 
    this.result = '='; 
  }

  toggleSign() {
    
    if (this.input.startsWith('-')) {
      this.input = this.input.substring(1);
    } else {
      this.input = '-' + this.input;
    }
  }

}
