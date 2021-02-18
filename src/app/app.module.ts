import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule} from '@angular/forms';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RouterModule} from '@angular/router';
import { IndexComponent } from './index/index.component';
import { Error404Component } from './error-404/error-404.component';
import { HttpClientModule} from '@angular/common/http';
import { CourseModule } from './courses/course.module';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    IndexComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    CourseModule,
    RouterModule.forRoot([
      {
        path: '', component: IndexComponent
        //path: '', redirectTo: '', pathMatch: 'full' //quando passar url em branco, irá redirecionar para a rota de cursos
      },
      {
        path: '**', component: Error404Component //quando acessar url que não existe
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
