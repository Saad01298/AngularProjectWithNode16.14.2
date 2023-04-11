import { Component, OnInit } from '@angular/core';
import { Params } from '@angular/router';
import { SampleServiceService } from '../app.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {

  
  passedValue = "all";

  OTU = true; 
  GPT = true;
  Google = true;

  allActive = true;
  oneActive = false;


  constructor(private sampleService: SampleServiceService, private route: ActivatedRoute) {}
  ngOnInit(): void {

    this.route.queryParams.subscribe(
      (queryParams: Params) => {
        this.passedValue = queryParams['selectedValue']
        if(this.passedValue == "all") {
          this.allActive = true;
          this.oneActive = false;
          this.OTU = true; 
          this.GPT = true;
          this.Google = true;
        } else if (this.passedValue == "otu") {
          this.oneActive = true;
          this.OTU = true; 

          this.allActive = false;
          this.GPT = false;
          this.Google = false;
        } else if (this.passedValue == "gpt") {
          this.oneActive = true;
          this.GPT = true;
          
          this.allActive = false;
          this.OTU = false; 
          this.Google = false;
        } else if (this.passedValue == "google") {
          this.oneActive = true;
          this.Google = true;
          
          this.allActive = false;
          this.OTU = false; 
          this.GPT = false;
        }
      }
    );



    // this.sampleService.forEmitingValue.subscribe(data=>{
    //   if(data == "all") {
    //     this.allActive = true;
    //     this.oneActive = false;
    //     this.OTU = true; 
    //     this.GPT = true;
    //     this.Google = true;
    //   } else if (data == "otu") {
    //     this.oneActive = true;
    //     this.OTU = true; 

    //     this.allActive = false;
    //     this.GPT = false;
    //     this.Google = false;
    //   } else if (data == "gpt") {
    //     this.oneActive = true;
    //     this.GPT = true;
        
    //     this.allActive = false;
    //     this.OTU = false; 
    //     this.Google = false;
    //   } else if (data == "google") {
    //     this.oneActive = true;
    //     this.Google = true;
        
    //     this.allActive = false;
    //     this.OTU = false; 
    //     this.GPT = false;
    //   }

    // });
  }
  // if all is selected, then make first 3 as true, allActive as true, and oneActive as false
  // if one of the three are selected then make both of its variable as true, all others as false


}
