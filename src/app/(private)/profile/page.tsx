'use client'
import React, { use, useEffect, useState } from 'react';
import { MessagesTab } from './messages';
import Profile from './form'
import Cookies from 'js-cookie';
import { BASE_URL } from '@/helpers/constants';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [messages, setMessages] = useState([]);

  const handleTabClick = (tab: any) => {
    setActiveTab(tab);
  };


  useEffect(() => {
    const token = Cookies.get("token") as string

    const fetchMessages = async () => {
      const res = await fetch(`${BASE_URL}/cleaner/message`, {
        headers: {
          'Authorization': token
        }
      });

      if (res.ok) {
        const result = await res.json();
        setMessages(result.data);
      }
    }

    fetchMessages();
  }, [])

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
        {activeTab === 'messages' && <MessagesTab messages={messages} />}
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
