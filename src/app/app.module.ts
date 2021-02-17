import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule} from '@angular/forms';
import { CourseListComponent } from './courses/course-list.component';
import { StarComponent } from './star/star.component';
import { ReplacePipe } from './pipe/replace.pipe';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RouterModule} from '@angular/router';
import { IndexComponent } from './index/index.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    StarComponent,
    ReplacePipe,
    NavBarComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: '', component: IndexComponent
        //path: '', redirectTo: '', pathMatch: 'full' //quando passar url em branco, irá redirecionar para a rota de cursos
      },
      {
        path: 'courses', component: CourseListComponent //quando acessar url courses, irá redirecionar para o componente
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
