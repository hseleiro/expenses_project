import {Component, ContentChild, OnInit, TemplateRef} from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {
  @ContentChild('title') title!: TemplateRef<any> | null
  @ContentChild('firstIcon') firstIcon!: TemplateRef<any> | null

  constructor() { }

  ngOnInit(): void {
  }

}
