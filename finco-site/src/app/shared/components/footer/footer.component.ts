import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  dataAtual!: number;

  constructor() {
  }
  ngOnInit(): void {
    this.dataAtual = new Date().getFullYear()
  }

}
