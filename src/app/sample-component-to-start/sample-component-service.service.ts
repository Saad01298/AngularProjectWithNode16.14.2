import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SampleComponentServiceService {
  apiReturnedValue : any = "";

  sampleMethod(sampleValue : any) {
    return "Saad"+sampleValue;
  }

  callApi() : any {
    fetch("http://localhost:8080/sampleApiForAngular")
		.then(response => response.json())
		.then(data=>{
        console.log(data['name']);
        this.apiReturnedValue = data['name'];
      }
    )
    .catch(error=>{
        console.log(error);
      }
    );

    return this.apiReturnedValue;
  }
}
