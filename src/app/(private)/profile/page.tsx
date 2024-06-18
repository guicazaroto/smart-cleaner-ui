'use client'

import { ufs } from "@/helpers/ufs";
import {  useContext } from "react";
import { UserContext } from "../layout";
import { User } from "@/app/(public)/cadastro/helpers/types";

const ProfilePage = () => {
  const user = useContext<User>(UserContext);
  const { 
     email,
     name,
     imagem_url,
     telefone,
     cpf,
     data_nascimento,
     cep,
     logradouro,
     numero,
     cidade,
     uf,
     descricao 
    } = user;


  return (
    <div className="mx-auto max-w-2xl	my-8">
      <form>
        <div className="grid grid-cols-1 gap-4">
        <h2 className="text-2xl font-bold mb-4 text-center">Meu Perfil</h2>
        <h3 className="text-xl font-bold mb-4 text-center">Bem Vindo(a) {name}</h3>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              required
              type="email"
              id="email"
              name="email"
              defaultValue={email}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="grid grid-cols-1">
        <div className="mb-4">
          <label htmlFor="name" className="w-full block text-sm font-medium text-gray-700 mb-1">Nome</label>
          <input
            required
            type="text"
            id="name"
            name="name"
            defaultValue={name}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"              
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="mb-4">
          <label htmlFor="telefone" className="block text-sm font-medium text-gray-700 mb-1">Telefone</label>
          <input
            required
            type="tel"
            id="telefone"
            name="telefone"
            defaultValue={telefone}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"              
          />
        </div>
        <div className="mb-4">
          <label htmlFor="data_nascimento" className="block text-sm font-medium text-gray-700 mb-1">Data de Nascimento</label>
          <input
            required
            type="date"
            id="data_nascimento"
            name="data_nascimento"
            defaultValue={data_nascimento}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"              
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="cep" className="block text-sm font-medium text-gray-700 mb-1">CEP</label>
          <input
            required
            type="text"
            id="cep"
            name="cep"
            defaultValue={cep}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"              
          />
        </div>

        <div className="mb-4">
          <label htmlFor="uf" className="block text-sm font-medium text-gray-700 mb-1">
            Estado
          </label>
          <select
            required
            id="uf"
            name="uf"
            defaultValue={uf}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option defaultValue="" disabled>Selecione um estado</option>
            {ufs.map((uf) => (
              <option key={uf.value} defaultValue={uf.value}>
                {uf.label}
              </option>
            ))}
          </select>
        </div>

        {/* <div className="mb-4">
          <label htmlFor="cidade" className="block text-sm font-medium text-gray-700 mb-1">Cidade</label>
          <select
            required
            id="cidade"
            name="cidade"
            disabled={!userData.uf || !cities.length}
            defaultValue={userData.cidade}
            onChange={(e) => setUserData({...userData, cidade: e.target.value})}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option defaultValue="" disabled>Selecione uma cidade</option>
            {cities.map((city:any) => (
              <option key={city.value} defaultValue={city.value}>
                {city.label}
              </option>
            ))}
          </select>
        </div> */}

        <div className="mb-4">
          <label htmlFor="logradouro" className="block text-sm font-medium text-gray-700 mb-1">Rua</label>
          <input
            required
            type="text"
            id="logradouro"
            name="logradouro"
            defaultValue={logradouro}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"              
          />
        </div>

        <div className="mb-4">
          <label htmlFor="number" className="block text-sm font-medium text-gray-700 mb-1">Número</label>
          <input
            required
            type="text"
            id="number"
            name="number"
            defaultValue={numero}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"              
          />
        </div>
        
        <div className="col-span-2 mb-4">
          <label htmlFor="descricao" className="block text-sm font-medium text-gray-700 mb-1">Descrição</label>
          <textarea
            id="descricao"
            name="descricao"
            defaultValue={descricao}
            rows={3}
            placeholder='Fale um pouco sobre os serviços que oferece'
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"              
          ></textarea>
        </div>
        </div>
        </div>
      </form>
    </div>
  );
}

export default ProfilePage;