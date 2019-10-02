import { Routes } from '@angular/router';

import { PostItBrowseComponent } from './component/post-it-browse/post-it-browse.component';
import { PostItEditComponent } from './component/post-it-edit/post-it-edit.component';

export const routes: Routes = [
    {
        path: '',
        component: PostItBrowseComponent,
    },
    {
        path: ':id',
        component: PostItEditComponent
    },
    {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
    }
];