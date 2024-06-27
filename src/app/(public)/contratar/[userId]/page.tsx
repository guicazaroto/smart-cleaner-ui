import { getUserById } from "./services/get-user-profile"
import { ContactModal } from "./components/contact-modal";


export default async function Perfil ({ params }: { params: { userId: string }} ) {
  const user = await getUserById(params.userId)
  const {data } = user

  return (
    <div className="py-5 min-h-screen bg-gray-100 flex justify-around">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">Perfil do Usuário</h2>
        <div className="flex justify-center items-center mb-4">
          <div 
            className="w-32 h-32 bg-gray-200 rounded-full overflow-hidden bg-cover bg-center" 
            style={{ backgroundImage: `url(${data?.imagem_url})` }}>
          </div>
        </div>
        <ContactModal />
        <div className="grid grid-cols-2 gap-4">
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nome</label>
            <p className="text-gray-700" id="name">{data?.name}</p>
          </div>
           <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <p className="text-gray-700" id="email">{data?.email}</p>
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Telefone</label>
            <p className="text-gray-700" id="phone">{data?.telefone}</p>
          </div>
          <div className="mb-4">
            <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">Cidade</label>
            <p className="text-gray-700" id="city">{data?.cidade}</p>
          </div>
          <div className="mb-4">
            <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">Estado</label>
            <p className="text-gray-700" id="state">{data?.uf}</p>
          </div>
          <div className="col-span-2 mb-4">
            <label htmlFor="bio" className="block text-sm font-medium text-gray-700 mb-1">Descrição</label>
            <p className="text-gray-700" id="bio">{data?.descricao}</p>
          </div>          
        </div>
      </div>
    </div>
  )
}