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
    // Eğer input boş veya sadece boşluksa, operatör eklemeyin
    if (this.input === '' || this.input === '0') {
      return; // Eğer input alanı boşsa veya sadece "0" ise işlem yapılmaz
    }

    // Eğer input zaten bir operatörle bitiyorsa, aynı operatörü tekrar eklemeyin
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
    this.input = '0'; // Temizleme sonrası "0" olarak ayarlıyoruz
    this.result = '='; // Eşittir simgesi olarak ayarlıyoruz
  }

  toggleSign() {
    // Eğer input sayısı negatifse pozitif yap, pozitifse negatif yap
    if (this.input.startsWith('-')) {
      this.input = this.input.substring(1);
    } else {
      this.input = '-' + this.input;
    }
  }

}
