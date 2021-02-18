import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Course } from './course';
import { CourseService } from './course.service';

@Component(
  {
    //selector: 'app-course-list', //Alterado para utilizar Rota
    templateUrl: './course-list.component.html',
    styleUrls: ['./course-list.component.css']
  }
)
export class CourseListComponent implements OnInit {
  filteredCourses: Course[] = [];
  _courses: Course[] = [];
  _filterBy: string = "";

  constructor(private courseService: CourseService){}
  
  ngOnInit() : void {
    this.retrieveAll();
  }
  retrieveAll(): void {
    this.courseService.retrieveAll().subscribe({
      next: courses => { //callback function
        this._courses = courses;
        this.filteredCourses = this._courses;
      },
      error: err => console.log('Error',err) //callback function
    });
  }

  deleteById(courseId: number): void {
    this.courseService.deleteById(courseId).subscribe({
      next: () => {
        console.log('Removeu com sucesso!');
        this.retrieveAll();
      },
      error: err => console.log('Error',err)
    })
  }

  set filter(value: string) {
    this._filterBy = value;
    this.filteredCourses = this._courses.filter((course: Course) => course.name.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1);
  }

  get filter() {
    return this._filterBy;
  }
}
