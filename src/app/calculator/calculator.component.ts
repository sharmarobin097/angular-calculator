import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  calcModel: any = {};
  isAverage = false;
  isSum = false;
  result = false;
  average = 0.0;
  sum = 0.0;
  invalidMessage = '';
  invalidAction = false;
  numberListSplit: string[];

  constructor() { }

  ngOnInit() {
  }

  reset() {
    location.reload();
  }

  calculateSum() {
    let sum = 0.0;

    for(let num of this.numberListSplit){
      sum = sum + Number(num);
    }
    this.sum = sum;
  }

  calculateAverage(){
    this.calculateSum();
    this.average = this.sum / this.numberListSplit.length;
  }


  onSubmit() {
    let temp = this.calcModel.numberList;
    this.numberListSplit = this.calcModel.numberList.trim().split(' ');

    if(isNaN(temp.replace(/[. ]+/g, ""))) {
      this.invalidMessage += 'Invalid Format - Please enter space separated numbers \n';
      this.invalidAction = true;
    } else{
          if ('average' === this.calcModel.operations.toLowerCase()) {
            this.calculateAverage();
            this.result = true;
            this.isAverage = true;
          } else if ('sum' === this.calcModel.operations.toLowerCase() ) {
            this.calculateSum();
            this.result = true;
            this.isSum = true;
          } else {
            this.invalidAction = true;
            this.invalidMessage += 'Invalid Operation';
          }
  }
  }
  }

