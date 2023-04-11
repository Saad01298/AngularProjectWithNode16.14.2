import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { SampleServiceService } from '../app.service';
import { SampleComponentServiceService } from './sample-component-service.service';

@Component({
  selector: 'app-sample-component-to-start',
  templateUrl: './sample-component-to-start.component.html',
  styleUrls: ['./sample-component-to-start.component.css']
})
export class SampleComponentToStartComponent implements OnInit {

  name: String = "Saad";
  flag = 0;
  selectedValue = "all";

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
    else if (this.flag == 2){
      console.log(this.flag);
      this.flag = 3;
      this.name = this.serviceVar.sampleMethod("");
    } else {
      console.log(this.flag);
      this.flag = 0;
      this.serviceVar.callAPIObservable().subscribe(data=>{
        this.name = this.name + data['name'];
      });
    }
  }

}
