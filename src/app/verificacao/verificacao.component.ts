import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verificacao',
  templateUrl: './verificacao.component.html',
  styleUrls: ['./verificacao.component.css']
})
export class VerificacaoComponent {

  @ViewChild('pinContainer') pinContainer!: ElementRef;

  constructor(private router: Router) { }

  ngOnInit(): void {
    console.log('There is ' + this.pinContainer.nativeElement.length + ' Pin Container on the page.');

    this.pinContainer.nativeElement.addEventListener('keyup', (event: KeyboardEvent) => {
      const target = event.target as HTMLInputElement;

      const maxLength = parseInt(target.getAttribute("maxlength") || "0", 10);
      const myLength = target.value.length;

      if (myLength >= maxLength) {
        let next = target;
        while (next = next.nextElementSibling as HTMLInputElement) {
          if (next == null) break;
          if (next.tagName.toLowerCase() === "input") {
            next.focus();
            break;
          }
        }
      }

      if (myLength === 0) {
        let next = target;
        while (next = next.previousElementSibling as HTMLInputElement) {
          if (next == null) break;
          if (next.tagName.toLowerCase() === "input") {
            next.focus();
            break;
          }
        }
      }
    });

    this.pinContainer.nativeElement.addEventListener('keydown', (event: KeyboardEvent) => {
      const target = event.target as HTMLInputElement;
      target.value = "";
    });
  }

  

  mudarTela() : void{
    this.router.navigate(['/criar-senha']);
  }

  mudarTelaEsqueciSenha() : void{
    this.router.navigate(['/esqueci-senha']);
  }
}
