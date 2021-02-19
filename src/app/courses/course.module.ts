import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { CourseInfoComponent } from "./course-info.component";
import { CourseListComponent } from "./course-list.component";
import { CommonModule } from "@angular/common";
import { StarModule } from "../shared/component/star/star.module";
import { PipeModule } from "../shared/pipe/pipe.module";
@NgModule({
  declarations: [
    CourseListComponent,
    CourseInfoComponent
  ], 
  imports: [
    CommonModule,
    FormsModule,
    StarModule,
    PipeModule,
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
