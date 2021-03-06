import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListsComponent } from './lists/lists.component';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';
import { MemberEditComponent } from './members/member-edit/member-edit.component';
import { MemberListComponent } from './members/member-list/member-list.component';
import { MessagesComponent } from './messages/messages.component';
import { AuthGuard } from './_guards/auth.guard';
import { PreventUnsavedChanges } from './_guards/prevent-unsaved-changes.guard';
import { ListsResolver } from './_resolvers/lists.resolver';
import { MemberDetailResolver } from './_resolvers/member-detail.resolver';
import { MemberEditResolver } from './_resolvers/member-edit.resolver';
import { MemberListResolver } from './_resolvers/member-list.resolver';
import { MessagesResolver } from './_resolvers/messages.resolver';

export const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
      {
        path: 'members',
        resolve: { users: MemberListResolver },
        component: MemberListComponent
      },
      {
        path: 'members/:id',
        resolve: { user: MemberDetailResolver },
        component: MemberDetailComponent
      },
      {
        path: 'member/edit',
        resolve: { user: MemberEditResolver },
        canDeactivate: [PreventUnsavedChanges],
        component: MemberEditComponent
      },
      {
        path: 'messages',
        resolve: { messages: MessagesResolver },
        component: MessagesComponent
      },
      {
        path: 'lists',
        resolve: { users: ListsResolver },
        component: ListsComponent
      }
    ]
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];
