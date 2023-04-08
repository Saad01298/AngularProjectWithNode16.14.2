import { Component, OnInit } from '@angular/core';
import { SampleComponentServiceService } from './sample-component-service.service';

@Component({
  selector: 'app-sample-component-to-start',
  templateUrl: './sample-component-to-start.component.html',
  styleUrls: ['./sample-component-to-start.component.css']
})
export class SampleComponentToStartComponent implements OnInit {

  name: String = "Saad";
  flag = 0;
  constructor(private serviceVar: SampleComponentServiceService) {}
  
  ngOnInit(): void {
    
  }

  calledthroughButton() {
    if(this.flag == 0) {
      this.flag = 1;
      this.name = this.serviceVar.sampleMethod(" Ali");
    }
    else {
      this.flag = 0;
      this.name = this.serviceVar.sampleMethod("");
    }

  }

}
