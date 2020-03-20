import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
    {
        path: 'tabs',
        component: TabsPage,
        children: [
            {
                path: 'tab1',
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import('../tab1/tab1.module').then(m => m.Tab1PageModule)
                    }
                ]
            },
            {
                path: 'tab2',
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import('../tab2/tab2.module').then(m => m.Tab2PageModule)
                    }
                ]
            },
            {
                path: 'tab3',
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import('../tab3/tab3.module').then(m => m.Tab3PageModule)
                    }
                ]
            },
            {
                path: 'home',
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import('../home/home.module').then(m => m.HomePageModule)
                    }
                ]
            },
            {
                path: 'video',
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import('../pages/video/video.module').then(m => m.VideoPageModule)
                    }
                ]
            },

            {
                path: 'whichtest',
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import('../pages/whichtest/whichtest.module').then(m => m.WhichtestPageModule)
                    }
                ]
            },

            {
                path: 'cheatsheets',
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import('../pages/cheatsheets/cheatsheets.module').then(m => m.CheatsheetsPageModule)
                    }
                ]
            },
            {
                path: 'contact',
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import('../pages/contact/contact.module').then(m => m.ContactPageModule)
                    }
                ]
            },
            {
                path: '',
                redirectTo: '/tabs/home',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
    },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TabsPageRoutingModule {
}
