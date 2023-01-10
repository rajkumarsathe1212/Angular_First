import { Component } from '@angular/core';

@Component({
  selector: 'app-assignment1',
  templateUrl: './assignment1.component.html',
  styleUrls: ['./assignment1.component.css']
})
export class Assignment1Component {

  quarters:string[]=["Q1","Q2","Q3"];
  selectedquarter = "Q1";

  months:string[]=["Jan","Feb","Mar","Apr"];
  selectedmonth = "Jan";

 quarterchanged(){
  if(this.selectedquarter=="Q1"){
    this.months = ["Jan","Feb","Mar","Apr"];
    this.selectedmonth = "Jan";
  }
  else if(this.selectedquarter == "Q2"){
    this.months = ["May","June","July","Aug"];
    this.selectedmonth="May";
  }
  else{
    this.months= ["Sep","Oct","Nov","Dec"];
    this.selectedmonth = "Sep";
  }
 }


}
