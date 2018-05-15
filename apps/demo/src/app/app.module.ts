import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NxModule } from '@nrwl/nx';
import { Lib1Module } from '@nx-upgrade-test/lib1';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren:
      '@nx-upgrade-test/routed-lib/src/routed-lib.module.ts#RoutedLibModule'
  }
];

@NgModule({
  imports: [
    BrowserModule,
    NxModule.forRoot(),
    RouterModule.forRoot(routes),
    Lib1Module
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
