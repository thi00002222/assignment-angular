import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { DuanListComponent } from './component/duan-list/duan-list.component';
import { DuanThemComponent } from './component/duan-them/duan-them.component';
import { DuanSuaComponent } from './component/duan-sua/duan-sua.component';
import { NvListComponent } from './component/nv-list/nv-list.component';
import { NvThemComponent } from './component/nv-them/nv-them.component';
import { NvSuaComponent } from './component/nv-sua/nv-sua.component';
import { TaskListComponent } from './component/task-list/task-list.component';
import { TaskThemComponent } from './component/task-them/task-them.component';
import { TaskSuaComponent } from './task-sua/task-sua.component';
import { NotFoundComponent } from './component/not-found/not-found.component';

export const routes: Routes = [
    {path:'', component:HomeComponent},

    {path:'du_an', component:DuanListComponent},
    {path:'du_an/them', component:DuanThemComponent},
    {path:'du_an/sua/:id', component:DuanSuaComponent},

    {path:'nhan_vien', component:NvListComponent},
    {path:'nhan_vien/them', component:NvThemComponent},
    {path:'nhan_vien/sua/:id', component:NvSuaComponent},

    {path:'task', component:TaskListComponent},
    {path:'task/them', component:TaskThemComponent},
    {path:'task/sua/:id', component:TaskSuaComponent},
    {path:'**', component:NotFoundComponent},
];
