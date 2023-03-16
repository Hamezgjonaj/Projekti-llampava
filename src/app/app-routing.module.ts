import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { AdminProduktetComponent } from './admin/admin-produktet/admin-produktet.component';
import { FormComponent } from './admin/admin-produktet/form/form.component';
import { AdminPunonjesComponent } from './admin/admin-punonjes/admin-punonjes.component';
import { NewPunetorComponent } from './admin/admin-punonjes/new-punetor/new-punetor.component';
import { AdminComponent } from './admin/admin.component';
import { EmployeerComponent } from './employeer/employeer.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { NavbarAdminComponent } from './navbar-admin/navbar-admin.component';
import { GuardService } from '../app/guard.service';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'admin', component: AdminComponent, canActivate: [GuardService] },
  {
    path: 'navbar-admin',
    component: NavbarAdminComponent,
    canActivate: [GuardService],
  },
  { path: 'admin-punonjes', component: AdminPunonjesComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'admin-dashboard', component: AdminDashboardComponent },
  { path: 'new-punetor', component: NewPunetorComponent },
  { path: 'form', component: FormComponent },
  { path: 'admin-produktet', component: AdminProduktetComponent },
  {
    path: 'employeer',
    component: EmployeerComponent,
    canActivate: [GuardService],
  },
  { path: '**', redirectTo: 'PageNotFound', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
