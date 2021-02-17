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
    this._courses = this.courseService.retrieveAll();
    this.filteredCourses = this._courses;
  }

  set filter(value: string) {
    this._filterBy = value;
    this.filteredCourses = this._courses.filter((course: Course) => course.name.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1);
  }

  get filter() {
    return this._filterBy;
  }
}
