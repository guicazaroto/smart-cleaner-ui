import { Dispatch, SetStateAction } from "react";

export type City = { name: string}

export interface User {
  id?: string;
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

export type ProfileFormProps = {
  setStep: Dispatch<SetStateAction<number>>,
  userData: User,
  setUserData: Dispatch<SetStateAction<User>>,
  photo: string,
  setPhoto: Dispatch<SetStateAction<string>>,
  cities: City[],
  setCities: Dispatch<SetStateAction<City[]>>,
}