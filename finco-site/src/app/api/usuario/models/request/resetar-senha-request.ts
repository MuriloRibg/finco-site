export class ResetarSenhaRequest {
  Email?: string | null | undefined;
  Code?: string | null | undefined;
  Password!: string;
}
