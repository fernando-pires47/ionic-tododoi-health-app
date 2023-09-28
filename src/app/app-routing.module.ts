import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'exibicao',
    pathMatch: 'full'
  },
  {
    path: 'exibicao',
    loadChildren: () => import('./exibicao/exibicao.module').then(m => m.ExibicaoPageModule)
  },
  {   
    path: 'pesquisa', 
    loadChildren: () => import('./pesquisa/pesquisa.module').then(m => m.PesquisaPageModule) 
  },
  {
    path: 'listplanta/:id',
    loadChildren: () => import('./listplanta/listplanta.module').then(m => m.ListPlantaPageModule)
  },
  {
     path: 'detailplanta/:id', 
    loadChildren: () => import('./detailplanta/detailplanta.module').then(m => m.DetailPlantaPageModule)
  },
  { 
    path: 'detailorgao/:id', 
    loadChildren: () => import('./detailorgao/detailorgao.module').then(m => m.DetailorgaoPageModule) 
   },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
