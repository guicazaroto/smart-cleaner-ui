'use server'

import { revalidateTag } from "next/cache"
import { redirect } from "next/navigation";

export interface UserData {
  id: string;
  photo: string;
  name: string;
  email: string;
  phone: string;
  cpf: string;
  dateOfBirth: string;
  street: string;
  cep: string;
  city: string;
  state: string;
  number: string;
  bio: string;
  whereIWork: string;
}

export async function createUser(formData: FormData) {
  'use server'

  const rawFormData = {
    name: formData.get('name'),
    email: formData.get('email'),
    phone: formData.get('phone'),
    cpf: formData.get('cpf'),
    dateOfBirth: formData.get('dateOfBirth'),
    street: formData.get('street'),
    cep: formData.get('cep'),
    city: formData.get('city'),
    state: formData.get('state'),
    number: formData.get('number'),
    bio: formData.get('bio'),
  } as UserData

  await fetch('http://localhost:3001/users', {
    method: 'POST',
    body: JSON.stringify(rawFormData),
    headers: {
      'Content-Type': 'application/json',
    },
  })

  revalidateTag('get-users')
  redirect('/contratar')
}
