import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { Shell } from '@app/shell/services/shell.service';

const routes: Routes = [
  Shell.childRoutes([
    { path: '', redirectTo: 'app-landing', pathMatch: 'full' },
    { path: 'app-landing', loadChildren: './pages/app-landing/app-landing.module#AppLandingModule'},
    { path: 'about', loadChildren: './pages/about/about.module#AboutModule' }
  ]),
  { path: 'terms', loadChildren: './pages/terms/terms.module#TermsModule' },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
      
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}
