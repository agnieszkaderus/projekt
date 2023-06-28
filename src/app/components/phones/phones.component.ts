import {Component, ElementRef, Input} from '@angular/core';
import {DataService} from "../../services/data.service";

@Component({
  selector: 'app-phones',
  templateUrl: './phones.component.html',
  styleUrls: ['./phones.component.css']
})
export class PhonesComponent {
  @Input() filterText: string="";

  selectedItemId: string | null = null;
  selectedItem: any; // Jeśli masz określony typ elementu, zamiast any użyj odpowiedniego typu

  public items$: any;
  public i$: any;
  constructor(private service: DataService, private elementRef: ElementRef) {
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
      this.items$ = response.filter(item => item.type === "phone");
    });
  }

  goToItem(itemId: string) {
    this.selectedItemId = itemId;
    // @ts-ignore
    this.selectedItem = this.items$.find(item => item.id === itemId);

    // Przewiń stronę do samego dołu
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth'
    });
  }



  // isPhone(item:any){
  //   if(item.type==="phone"){
  //     return true;
  //   }
  // }
}
