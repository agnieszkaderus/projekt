import {Component, Input, OnInit} from '@angular/core';
import {DataService} from "../../services/data.service";

@Component({
  selector: 'app-all-items',
  templateUrl: './all-items.component.html',
  styleUrls: ['./all-items.component.css']
})
export class AllItemsComponent implements OnInit{
  @Input() filterText: string="";
  public items$: any;

  constructor(private service: DataService) {
  }

  ngOnInit(): void {
    this.getAll();
    console.log(this.items$);
  }

  getAll() {
    this.service.getAll().subscribe(response => {
      this.items$ = response;
    })
  }

  showModal: boolean = false;

  delete(id: string) {
    this.service.deleteItem(id).subscribe(response => {
    });
  }

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
    window.location.reload(); // Odśwież stronę
  }


}
