import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  input1:number=0;
  input2:number=0;
  operation:string="Add";
  output:number=0;
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    switch(this.operation){
      case "Add":
        this.output=this.input1+this.input2;
        break;
      case "Subtract":
        this.output=this.input1-this.input2;
        break;
      case "Multiply":
        this.output=this.input1*this.input2;
        break;
      case "Divide":
        this.output=this.input1/this.input2;
        break;
      default:
        this.output=this.input1+this.input2;
        break;
    }
  }
}
