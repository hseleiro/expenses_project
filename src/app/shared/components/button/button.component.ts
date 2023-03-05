import {Component, ContentChild, EventEmitter, Input, OnInit, Output, TemplateRef} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: '/button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @ContentChild('icon') icon!: TemplateRef<any> | null
  @ContentChild('textLeft') textLeft!: TemplateRef<any> | null
  @ContentChild('textRight') textRight!: TemplateRef<any> | null

  @Input() color: string | undefined;
  @Input() disabled: boolean | undefined;
  @Input() style: string | undefined;

  @Output() click = new EventEmitter();

  constructor() { }

  ngOnInit(): void {

  }

  onClick() {

  }

}
