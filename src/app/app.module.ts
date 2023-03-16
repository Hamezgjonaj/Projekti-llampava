import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatInputModule } from '@angular/material/input';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { AdminProduktetComponent } from './admin/admin-produktet/admin-produktet.component';
import { LoginComponent } from './login/login.component';
import { EmployeerComponent } from './employeer/employeer.component';
import { NavbarAdminComponent } from './navbar-admin/navbar-admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { FormComponent } from './admin/admin-produktet/form/form.component';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { NgChartsModule } from 'ng2-charts';
import { FirstPageComponent } from './first-page/first-page.component';
import { AdminComponent } from './admin/admin.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { MatRadioModule } from '@angular/material/radio';
import { DeleteModalComponent } from './admin/admin-produktet/delete-modal/delete-modal.component';

import { AdminPunonjesComponent } from './admin/admin-punonjes/admin-punonjes.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NewPunetorComponent } from './admin/admin-punonjes/new-punetor/new-punetor.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    AdminDashboardComponent,
    AdminProduktetComponent,
    LoginComponent,
    EmployeerComponent,
    NavbarAdminComponent,
    FormComponent,
    DeleteModalComponent,
    FirstPageComponent,
    AdminComponent,
    AdminPunonjesComponent,
    NewPunetorComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatIconModule,
    MatCardModule,
    MatSidenavModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    NgChartsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    MatRadioModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
