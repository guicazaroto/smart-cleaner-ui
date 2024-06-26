import React from 'react';

type MessagesProps = { 
  messages: Array<{ 
    id: number,
     name: string,
     email: string,
     text: string,
     telefone: string 
    }> 
}
export const MessagesTab = ({ messages }: MessagesProps) => {
  return (
    <div className="max-w-3xl mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Mensagens Recebidas</h2>
      <div className="overflow-hidden">
        {messages.map((message, index) => (
          <div key={message.id} className={`bg-gray-800 p-4 mb-4 rounded-lg`}>
            <p className="text-lg font-semibold text-white">{message.name} - <span className='text-sm'>{message.telefone}</span></p>
            <p className="text-gray-300">{message.email}</p>
            <p className="text-gray-200 mt-2">{message.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MessagesTab;
