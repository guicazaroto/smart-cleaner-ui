'use client'
import { useFormStatus } from "react-dom";

export function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button disabled={pending} type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
      {pending ? 'Carregando...' : 'Cadastrar' }
    </button>
  )
}