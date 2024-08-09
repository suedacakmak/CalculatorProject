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
    this.showHistory = !this.showHistory;  // Geçmişi göster/gizle
  }

  pressNum(num: string) {
    if (this.input === '0') {
      this.input = num; // Eğer input "0" ise, girilen değer ile değiştir
    } else {
      this.input += num; // Aksi halde mevcut input değerine ekle
    }
    this.result = ''; // Yeni bir sayı girildiğinde result'ı temizle
  }
  
  pressOperator(op: string) {
    this.input += ' ' + op + ' ';
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
    this.input = '';
    this.result = '';
  }
}
