import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'posts',
    loadChildren: () => import('./pages/posts/posts.module').then( m => m.PostsPageModule)
  },
  {
    path: 'subcategory/:id',
    loadChildren: () => import('./pages/subcategory/subcategory.module').then( m => m.SubcategoryPageModule)
  },
  {
    path: 'postdetail/:postId',
    loadChildren: () => import('./pages/postdetail/postdetail.module').then( m => m.PostdetailPageModule)
  },
  {
    path: 'videopost/:postId',
    loadChildren: () => import('./pages/videopost/videopost.module').then( m => m.VideopostPageModule)
  },
  {
    path: 'video',
    loadChildren: () => import('./pages/video/video.module').then( m => m.VideoPageModule)
  },
  {
    path: 'whichtest',
    loadChildren: () => import('./pages/whichtest/whichtest.module').then( m => m.WhichtestPageModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./pages/contact/contact.module').then( m => m.ContactPageModule)
  },
  {
    path: 'cheatsheets',
    loadChildren: () => import('./pages/cheatsheets/cheatsheets.module').then( m => m.CheatsheetsPageModule)
  },
  {
    path: 'search/:search_keyword',
    loadChildren: () => import('./search/search.module').then( m => m.SearchPageModule)
  },
  
 
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]

  
})




export class AppRoutingModule {}
