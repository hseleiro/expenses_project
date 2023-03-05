import {Component, ContentChild, OnInit, TemplateRef} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @ContentChild('header') header!: TemplateRef<any> | null
  @ContentChild('content') content!: TemplateRef<any> | null
  @ContentChild('actions') actions!: TemplateRef<any> | null

  constructor() { }

  ngOnInit(): void {}

}
