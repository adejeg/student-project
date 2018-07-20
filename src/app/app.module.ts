import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppBootstrapModule} from './app-boostrap/app-bootstrap.module';
import { Routes, RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { ProjectCatalogComponent } from './project-catalog/project-catalog.component';
import { PriceComponent } from './price/price.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const ROUTES:Routes = [
  {path:"", component: HomeComponent},
  {path:"project", component: ProjectCatalogComponent},
  {path:"price", component: PriceComponent},
  {path:"login", component: LoginComponent},
  {path:"register", component: RegisterComponent},
]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    ProjectCatalogComponent,
    PriceComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppBootstrapModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
