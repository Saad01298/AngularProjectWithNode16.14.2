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
    return fetch("http://localhost:8080/sampleApiForAngular")
		.then(response => response.json())
		.then(data=>{
        this.apiReturnedValue = data['name'];
        return this.apiReturnedValue;
      }
    )
    .catch(error=>{
        console.log(error);
      }
    );
  }
}
