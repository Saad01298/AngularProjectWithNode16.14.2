import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SampleComponentToStartComponent } from './sample-component-to-start/sample-component-to-start.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { UploadFileComponent } from './upload-file/upload-file.component';

const routes: Routes = [
  {path: 'search', component: SearchResultComponent},
  {path: 'uploadFile', component: UploadFileComponent},
  {path: '', component: SampleComponentToStartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
