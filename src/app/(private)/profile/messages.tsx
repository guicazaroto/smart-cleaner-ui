import React from 'react';

export const MessagesTab = () => {
  // Simulando dados de mensagens recebidas
  const messages = [
    { id: 1, name: 'João Henrique', email: 'joao@example.com', telefone: '(27) 3233-32323', message: 'Olá, como vai? gostaria de saber quanto cobra para lavar uma garagem, favor entrar em contato via email.' },
    { id: 2, name: 'Maria Madalena', email: 'maria@example.com',telefone: '(27) 3233-32323', message: 'Precisamos discutir o projeto.' },
    { id: 3, name: 'Carlos Imperial', email: 'carlos@example.com', telefone: '(27) 3233-32323', message: 'Lembre-se da reunião amanhã.' },
  ];

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Mensagens Recebidas</h2>
      <div className="overflow-hidden">
        {messages.map((message, index) => (
          <div key={message.id} className={`bg-gray-800 p-4 mb-4 rounded-lg`}>
            <p className="text-lg font-semibold text-white">{message.name} - <span className='text-sm'>{message.telefone}</span></p>
            <p className="text-gray-300">{message.email}</p>
            <p className="text-gray-200 mt-2">{message.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MessagesTab;
