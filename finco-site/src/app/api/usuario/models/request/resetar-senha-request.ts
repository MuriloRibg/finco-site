export class ResetarSenhaRequest {
  Email?: string | null | undefined;
  Code?: number | null | undefined;
  Password!: string;
}
