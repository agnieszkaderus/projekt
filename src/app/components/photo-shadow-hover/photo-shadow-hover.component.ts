import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-photo-shadow-hover',
  templateUrl: './photo-shadow-hover.component.html',
  styleUrls: ['./photo-shadow-hover.component.css']
})
export class PhotoShadowHoverComponent {
  @Input() image: string | undefined;
  @Input() title: string | undefined;
  @Input() link: string | undefined;
}
