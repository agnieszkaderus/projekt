import {Component, Input, OnInit} from '@angular/core';
import {DataService} from "../../services/data.service";

@Component({
  selector: 'app-notebooks',
  templateUrl: './notebooks.component.html',
  styleUrls: ['./notebooks.component.css']
})
export class NotebooksComponent implements OnInit{
  @Input() filterText: string="";


  public items$: any;
  public i$: any;
  constructor(private service: DataService) {
  }

  activeIndex = 0;

  ngOnInit() {
    this.getAll();
    setInterval(() => {
      this.nextSlide();
    }, 3000);
  }

  nextSlide() {
    this.activeIndex = (this.activeIndex + 1) % this.items$.length;
  }

  getAll() {
    this.service.getAll().subscribe(response => {
      // @ts-ignore
      this.items$ = response.filter(item => item.type === "notebook");
    });
  }
}
