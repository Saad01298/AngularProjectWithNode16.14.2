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

  async calledthroughButton() {
    if(this.flag == 0) {
      console.log(this.flag);
      this.flag = 1;
      this.name = this.serviceVar.sampleMethod(" Ali");
    }
    else if (this.flag == 1) {
      console.log(this.flag);
      this.flag = 2;
      this.name = this.name + await this.serviceVar.callApi();
    }
    else {
      console.log(this.flag);
      this.flag = 0;
      this.name = this.serviceVar.sampleMethod("");
    }
  }

}
