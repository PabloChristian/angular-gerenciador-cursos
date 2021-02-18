import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { ReplacePipe } from "../pipe/replace.pipe";
import { StarComponent } from "../star/star.component";
import { CourseInfoComponent } from "./course-info.component";
import { CourseListComponent } from "./course-list.component";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [
    CourseListComponent,
    CourseInfoComponent,
    ReplacePipe,
    StarComponent
  ], 
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: 'courses', component: CourseListComponent //quando acessar url courses, irá redirecionar para o componente
      },
      {
        path: 'courses/info/:id', component: CourseInfoComponent
      }
    ])
  ]
})
export class CourseModule{

}
