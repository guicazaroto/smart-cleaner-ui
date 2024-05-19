export type City = { name: string}

export interface User {
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
  active: boolean;
  telefone: string;
  cpf: string;
  data_nascimento: string;
  cep: string;
  logradouro: string;
  numero: string;
  cidade: string;
  uf: string;
  descricao: string;
}
