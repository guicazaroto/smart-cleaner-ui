import React from 'react';

type MessagesProps = { 
  messages: Array<{ 
    id: number,
     nome: string,
     email: string,
     message: string,
     telefone: string 
    }> 
}
export const MessagesTab = ({ messages }: MessagesProps) => {
  return (
    <div className="max-w-3xl mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Mensagens Recebidas</h2>
      <div className="overflow-hidden">
        {messages.map((message) => (
          <div key={message?.id} className={`bg-gray-800 p-4 mb-4 rounded-lg`}>
            <p className="text-lg font-semibold text-white">{message?.nome}</p>
            <p className="text-gray-300">{message?.telefone}</p>
            <p className="text-gray-300">{message?.email}</p>
            <p className="text-gray-200 mt-2">{message?.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MessagesTab;
