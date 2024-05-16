import { FormEvent } from "react"
import Swal from 'sweetalert2'

export default function CredentialsForm ({ setStep, userData, setUserData }: any) {
  function submitForm (e: FormEvent) {
    e.preventDefault()

    const formData = new FormData(e.target as HTMLFormElement)

    const password = formData.get('password')
    const passwordConfirmation = formData.get('passwordConfirmation')

    if (password !== passwordConfirmation) {
      Swal.fire({ text: 'As senhas não conferem', icon: 'error' })
      return
    }


    setStep(2)
  }

  return (
      <form onSubmit={submitForm}>
        <div className="grid grid-cols-1 gap-4">
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              required
              type="email"
              id="email"
              name="email"
              onChange={(e) => setUserData({...userData, email: e.target.value})}
              value={userData.email}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Senha</label>
            <input
              required
              type="password"
              id="password"
              name="password"
              pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$" 
              title="O senha de conter o mínimo de 8 dígitos, com ao menos um caractere maiúsculo, um minúsculo, um numeral e um caractere especial." 
              onChange={(e) => setUserData({...userData, password: e.target.value})}
              value={userData.password}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="passwordConfirmation" className="block text-sm font-medium text-gray-700 mb-1">Confirmação de senha</label>
          <input
            required
            type="password"
            id="passwordConfirmation"
            name="passwordConfirmation"
            pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$" 
            title="O senha de conter o mínimo de 8 dígitos, com ao menos um caractere maiúsculo, um minúsculo, um numeral e um caractere especial." 
            onChange={(e) => setUserData({...userData, passwordConfirmation: e.target.value})}
            value={userData.passwordConfirmation}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <button 
          type="submit" 
          className="bg-blue-500 text-white rounded w-full py-2"
        >
          Próximo
        </button>
      </form>
  )
}