import { Injectable } from "@angular/core";
import { ProjetoFiltro } from "src/app/home/projeto/filtro/projeto-filtro";

@Injectable({
  providedIn: "root"
})
export class ProjetoFormService {
  private filtro!: ProjetoFiltro;

  constructor() {
    this.iniciarFiltro();
  }

  iniciarFiltro() {
    this.filtro = new ProjetoFiltro();
  }

  setFiltro(filtro: ProjetoFiltro): void {
    this.filtro = filtro;
  }

  setCategoriaSubCategoria(categoria: String, subCategoria: String) {
    this.filtro.Categoria = categoria;
    this.filtro.SubCategoria = subCategoria;
  }

  setCategoriaSubCategoria2(categoria: String, subCategoria: String) {
    this.filtro.Categoria2 = categoria;
    this.filtro.SubCategoria2 = subCategoria;
  }

  setLocal(local: String) {
    this.filtro.Local = local;
  }

  getFiltro(): ProjetoFiltro {
    return this.filtro;
  }
}
