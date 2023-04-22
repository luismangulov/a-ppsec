import { Routes } from '@angular/router';
import { HomePage } from './modules/home/home.page';
import { DenunciationPage } from './modules/denunciation/denunciation.page';
import { NewsPage } from './modules/news/news.page';
import { AuthPage } from './modules/auth/auth.page';
import { LayoutComponent } from './share/components/layout/layout.component';

export const routes: Routes = [
  {
    path: '',
    component: AuthPage,
  },
  {
    path: 'account',
    component: LayoutComponent,
    // loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomePage },
      {
        path: 'denunciation', 
        loadChildren: () => import('./modules/denunciation/denunciation.routes').then((m) => m.routers)
    },
      { path: 'news', component: NewsPage }
    ]
  },
  // {
  //   path: 'create-denunciation',
  //   loadComponent: () => import('./modules/denunciation/create-denunciation/create-denunciation.page').then( m => m.CreateDenunciationPage)
  // },
  // {
  //   path: 'view-denunciation',
  //   loadComponent: () => import('./modules/denunciation/view-denunciation/view-denunciation.page').then( m => m.ViewDenunciationPage)
  // },
];
