import Image from "next/image"
import { getUserById } from "./services/get-user-profile"
import { getUsers } from "../services/getUsers";
import Calendar from "../components/Calendar";
import { User } from "../../cadastro/helpers/types";

export async function generateStaticParams() {
  const users = await getUsers();
  const usersIds = users.data.map((user: User) => ({ userId: String(user.id) }));

  return usersIds;
}

export default async function Perfil ({params}: { params: { userId: string }} ) {
  const user = await getUserById(params.userId)
  const {data } = user


  return (
    <div className="py-5 min-h-screen bg-gray-100 flex justify-around">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">Perfil do Usuário</h2>
        <div className="flex justify-center items-center mb-4">
          <div className="w-32 h-32 bg-gray-200 rounded-full overflow-hidden">
            <Image 
              width={32} 
              height={32} 
              src={user.imagem_url || 'https://picsum.photos/200/150'} 
              className="w-full h-full object-cover" 
              alt="Foto do usuário"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nome</label>
            <p className="text-gray-700" id="name">{data.name}</p>
          </div>
           <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <p className="text-gray-700" id="email">{data.email}</p>
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Telefone</label>
            <p className="text-gray-700" id="phone">{data.telefone}</p>
          </div>
          <div className="mb-4">
            <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">Cidade</label>
            <p className="text-gray-700" id="city">{data.cidade}</p>
          </div>
          <div className="mb-4">
            <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">Estado</label>
            <p className="text-gray-700" id="state">{data.uf}</p>
          </div>
          <div className="col-span-2 mb-4">
            <label htmlFor="bio" className="block text-sm font-medium text-gray-700 mb-1">Descrição</label>
            <p className="text-gray-700" id="bio">{data.descricao}</p>
          </div> 
        </div>

        {/* <Calendar /> */}

      </div>
    </div>
  )
}