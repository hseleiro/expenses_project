import {Component, ContentChild, Input, OnInit, TemplateRef} from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.css']
})
export class IconComponent implements OnInit {
  @ContentChild('iconName') iconName!: TemplateRef<any> | null

  @Input() color: string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
