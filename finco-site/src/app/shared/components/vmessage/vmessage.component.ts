import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-vmessage',
  templateUrl: './vmessage.component.html'
})
export class VmessageComponent implements OnInit {
  @Input() text!: string;
  constructor() {}

  ngOnInit(): void {}
}
