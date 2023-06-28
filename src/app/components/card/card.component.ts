import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  // @ts-ignore
  @Input() image: string;
  // @ts-ignore
  @Input() title: string;
  // @ts-ignore
  @Input() description: string;
}
