import { Component, Input, OnChanges } from "@angular/core";

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges{

  @Input() //variavel poderá receber de um componente externo
  rating: number = 0;
  
  starWidth: number = 0;
  

  ngOnChanges(): void {
    this.starWidth = this.rating * 74 / 5;
  }
}
