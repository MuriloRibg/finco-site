import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-certo',
  templateUrl: './certo.component.html',
  styleUrls: ['./certo.component.css']
})
export class CertoComponent {

  constructor(private router: Router){}
  
  mudarTelaLogin(): void{
    this.router.navigate(['/login']);
  }
}
