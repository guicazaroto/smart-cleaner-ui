import { ChangeEvent, useState } from "react";
import { formatCPF } from "@/helpers/formatCpf";
import { formatPhoneNumber } from "@/helpers/formatPhone";
import Swal from "sweetalert2";
import { formatCEP } from "@/helpers/formatCEP";
import { ufs } from "@/helpers/ufs";
import {  ProfileFormProps } from "../helpers/types";
import { getCities, handleCreateUser, handleUpload } from "../actions";
import { useRouter } from 'next/navigation';
import { revalidateTag } from 'next/cache'

export default function ProfileForm (
  {  
    setStep,
    userData,
    setUserData,
    photo,
    setPhoto,
    cities,
    setCities
  }: ProfileFormProps
) {
  const [ pending, setPending ] = useState<boolean>(false);
  const { push } = useRouter();
  const handlePhotoChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === 'string') {
          setPhoto(reader.result);
          setUserData({...userData, fileUpload: file });
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handlePhoneInputChange = (event: any) => {
    const inputValue = event.target.value;
    const formattedValue = formatPhoneNumber(inputValue);
    setUserData({...userData, telefone: formattedValue })
  };

  const handleCpfInputChange = (event: any) => {
    const inputValue = event.target.value;
    const formattedValue = formatCPF(inputValue);
    setUserData({...userData, cpf: formattedValue })
  };

  const handleCepInputChange = (event: any) => {
    const inputValue = event.target.value;
    const formattedValue = formatCEP(inputValue);
    setUserData({...userData, cep: formattedValue })
  };

  async function handleSubmit(e: any) {
    e.preventDefault();
    
    try {
      setPending(true);
      
      const data = await handleCreateUser(userData) as any;
      await handleUpload(userData.fileUpload, data.id);

      Swal.fire({
        icon: 'success',
        title: 'Usuário cadastrado',
        text: 'Usuário cadastrado com sucesso.',
      });
      push('/contratar')
      
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Erro ao cadastrar',
        text: 'Ocorreu um erro ao tentar cadastrar o usuário.',
      });
    } finally {
      setPending(false);
    }
  }
  
  

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4 flex justify-center items-center flex-col">
        <div 
          onClick={() => document.getElementById('photo')?.click()}
          className="w-32 h-32 bg-gray-200 rounded-full overflow-hidden mb-2 cursor-pointer"
        >
          {photo ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={photo} alt="User" className="w-full h-full object-cover" />
          ) : (
            <div className="flex justify-center items-center w-full h-full text-gray-400">
              <span className="text-4xl">+</span>
            </div>
          )}
        </div>

        <input
          disabled={pending}
          type="file"
          id="photo"
          name="photo"
          accept="image/*"
          onChange={handlePhotoChange}
          className="mt-1 block w-full hidden"
        />
        {!photo && (
          <p className="text-red-500 font-bold">Imagem obrigatória</p>
        )}
      </div>

      <div className="grid grid-cols-1">
        <div className="mb-4">
          <label htmlFor="name" className="w-full block text-sm font-medium text-gray-700 mb-1">Nome</label>
          <input
            disabled={pending}
            required
            type="text"
            id="name"
            name="name"
            value={userData.name}
            onChange={(e) => setUserData({...userData, name: e.target.value})}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"              
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="mb-4">
          <label htmlFor="telefone" className="block text-sm font-medium text-gray-700 mb-1">Telefone</label>
          <input
            disabled={pending}
            required
            type="tel"
            id="telefone"
            name="telefone"
            value={userData.telefone}
            onChange={handlePhoneInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"              
          />
        </div>
        <div className="mb-4">
          <label htmlFor="cpf" className="block text-sm font-medium text-gray-700 mb-1">CPF</label>
          <input
            disabled={pending}
            required
            type="text"
            id="cpf"
            name="cpf"
            value={userData.cpf}
            onChange={handleCpfInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"              
          />
        </div>
        <div className="mb-4">
          <label htmlFor="data_nascimento" className="block text-sm font-medium text-gray-700 mb-1">Data de Nascimento</label>
          <input
            disabled={pending}
            required
            type="date"
            id="data_nascimento"
            name="data_nascimento"
            value={userData.data_nascimento}
            onChange={(e) => setUserData({...userData, data_nascimento: e.target.value})}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"              
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="cep" className="block text-sm font-medium text-gray-700 mb-1">CEP</label>
          <input
            disabled={pending}
            required
            type="text"
            id="cep"
            name="cep"
            value={userData.cep}
            onChange={handleCepInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"              
          />
        </div>

        <div className="mb-4">
          <label htmlFor="uf" className="block text-sm font-medium text-gray-700 mb-1">
            Estado
          </label>
          <select
            disabled={pending}
            required
            id="uf"
            name="uf"
            value={userData.uf}
            onChange={(e) => {
              setCities([])
              setUserData({...userData, uf: e.target.value})
              getCities(e.target.value).then((data) => setCities(data))
            }}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="" disabled>Selecione um estado</option>
            {ufs.map((uf) => (
              <option key={uf.value} value={uf.value}>
                {uf.label}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="cidade" className="block text-sm font-medium text-gray-700 mb-1">Cidade</label>
          <select
            required
            id="cidade"
            name="cidade"
            disabled={!userData.uf || !cities.length || pending}
            value={userData.cidade}
            onChange={(e) => setUserData({...userData, cidade: e.target.value})}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="" disabled>Selecione uma cidade</option>
            {cities.map((city:any) => (
              <option key={city.value} value={city.value}>
                {city.label}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="logradouro" className="block text-sm font-medium text-gray-700 mb-1">Rua</label>
          <input
            disabled={pending}
            required
            type="text"
            id="logradouro"
            name="logradouro"
            value={userData.logradouro}
            onChange={(e) => setUserData({...userData, logradouro: e.target.value})}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"              
          />
        </div>

        <div className="mb-4">
          <label htmlFor="number" className="block text-sm font-medium text-gray-700 mb-1">Número</label>
          <input
            disabled={pending}
            required
            type="text"
            id="number"
            name="number"
            value={userData.numero}
            onChange={(e) => setUserData({...userData, numero: e.target.value})}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"              
          />
        </div>
        
        <div className="col-span-2 mb-4">
          <label htmlFor="descricao" className="block text-sm font-medium text-gray-700 mb-1">Descrição</label>
          <textarea
            disabled={pending}
            id="descricao"
            name="descricao"
            rows={3}
            placeholder='Fale um pouco sobre os serviços que oferece'
            value={userData.descricao}
            onChange={(e) => setUserData({...userData, descricao: e.target.value})}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"              
          ></textarea>
        </div>
      </div>
      
      <div>
      <button 
        disabled={pending || !photo} 
        type="submit" 
        className={`w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600`}
      >
        {pending ? 'Carregando...' : 'Cadastrar'}
      </button>
      <button 
        className="bg-gray-400 text-white rounded py-2 w-full mt-3"
        onClick={() => setStep(1)}
      >
        Anterior
      </button>
      </div>
    </form>
  )
}