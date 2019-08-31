import { NewComponent } from './new/new.component';
import { FeedComponent } from './feed/feed.component';

import {Routes , RouterModule} from '@angular/router';
import { ModuleWithProviders } from '@angular/compiler/src/core';

const routers :  Routes = [

    { path: 'Feed', component : FeedComponent},
    { path: 'New', component : NewComponent},
    { path: '', component : FeedComponent},
];

 export const routing : ModuleWithProviders = RouterModule.forRoot(routers);