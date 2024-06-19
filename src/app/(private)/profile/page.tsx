'use client'
import React, { useState } from 'react';
import { MessagesTab } from './messages';
import Profile from './form'

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('profile');

  const handleTabClick = (tab: any) => {
    setActiveTab(tab);
  };

  return (
    <div className="max-w-2xl mx-auto my-10">
      <div className="flex bg-gray-100 border-b border-gray-300">
        <div
          onClick={() => handleTabClick('profile')}
          className={`py-2 px-4 cursor-pointer ${
            activeTab === 'profile' ? 'bg-white border-l border-t border-r rounded-t text-gray-700' : 'text-gray-500'
          }`}
        >
          Perfil
        </div>
        <div
          onClick={() => handleTabClick('messages')}
          className={`py-2 px-4 cursor-pointer ${
            activeTab === 'messages' ? 'bg-white border-l border-t border-r rounded-t text-gray-700' : 'text-gray-500'
          }`}
        >
          Mensagens Recebidas
        </div>
      </div>

      <div className="bg-white p-4 border-l border-r border-b rounded-b border-gray-300">
        {activeTab === 'profile' && <Profile />}
        {activeTab === 'messages' && <MessagesTab />}
      </div>
    </div>
  );
};

const ProfileTab = () => {
  return (
    <div>
      {/* Conteúdo do perfil */}
      <p>Aqui vai o conteúdo do perfil do usuário.</p>
    </div>
  );
};


export default Tabs;
