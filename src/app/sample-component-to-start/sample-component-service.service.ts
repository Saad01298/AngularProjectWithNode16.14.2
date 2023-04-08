import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SampleComponentServiceService {
  sampleMethod(sampleValue : any) {
    return "Saad"+sampleValue;
  }
}
