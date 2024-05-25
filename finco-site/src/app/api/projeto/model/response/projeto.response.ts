export class ProjetoResponse {
    Id!: Number; 
    Titulo!: String;
    UserName!: String;
    DataFinal!: Date
    Categoria!: String; 

    constructor(titulo: String, userName: String, dataFinal: Date, categoria: String) {
        this.Titulo = titulo;
        this.UserName = userName;
        this.DataFinal = dataFinal;
        this.Categoria = categoria;
    }
}
