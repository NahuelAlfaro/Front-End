import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SkillsComponent } from './components/skills/skills.component';
import { HttpClientModule } from '@angular/common/http';
import { interceptorProvider } from './service/intercepor-service';
import { EducacionComponent } from './components/educacion/educacion.component';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { NewEducacionComponent } from './components/educacion/new-educacion.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia.component';
import { EditEducacionComponent } from './components/educacion/edit-educacion.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    ProjectsComponent,
    SkillsComponent,
    EducacionComponent,
    ExperienciaComponent,
    NewEducacionComponent,
    EditExperienciaComponent,
    NewExperienciaComponent,
    EditEducacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
