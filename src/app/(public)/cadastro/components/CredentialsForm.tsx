export default function CredentialsForm ({ setStep }: any) {
  return (
      <form>
        <div className="grid grid-cols-1 gap-4">
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              required
              type="email"
              id="email"
              name="email"
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
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <button 
          type="submit" 
          className="bg-blue-500 text-white rounded w-full py-2"
          onClick={() => setStep(2)}
        >
          Próximo
        </button>
      </form>
  )
}