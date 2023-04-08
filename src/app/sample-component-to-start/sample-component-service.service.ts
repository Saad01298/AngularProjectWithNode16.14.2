import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SampleComponentServiceService {
  apiReturnedValue : any = "";

  constructor(private http: HttpClient){}

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

  callAPIObservable(): Observable<any> {
    return this.http.get("http://localhost:8080/sampleApiForAngular");
  }
}
