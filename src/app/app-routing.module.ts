import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SampleComponentToStartComponent } from './sample-component-to-start/sample-component-to-start.component';
import { SearchResultComponent } from './search-result/search-result.component';

const routes: Routes = [
  {path: 'search', component: SearchResultComponent},
  {path: '', component: SampleComponentToStartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
