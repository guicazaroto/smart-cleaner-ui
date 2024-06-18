'use client'
import { useState } from 'react';

export const ContactModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

 const toggleModal = () => { 
   document.body.classList.toggle('overflow-hidden');
   setIsOpen(!isOpen);
  }

  const handleMessageChange = (event: any) => {
    setMessage(event.target.value);
  };

  const handleSubmit = () => {
    // Aqui você pode adicionar lógica para enviar a mensagem
    console.log('Enviando mensagem:', message);
    // Fechar o modal após enviar a mensagem (opcional)
    toggleModal();
  };

  return (
    <>
     <div className='text-center'>
        <button
          className="rounded-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-8"
          onClick={toggleModal}
        >
          Enviar Mensagem
        </button>
      </div>
    {isOpen && (
      <div className="flex items-center justify-center">
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none bg-black bg-opacity-50">
          <div className="relative bg-white w-full max-w-lg mx-auto rounded-lg shadow-lg">
            {/* Conteúdo do Modal */}
            <div className="flex flex-col items-start p-4">
              {/* Cabeçalho do Modal */}
              <div className="flex items-center justify-between w-full mb-4">
                <h3 className="text-lg font-semibold">Enviar Mensagem</h3>
                <button
                  className="text-gray-500 hover:text-gray-700 focus:outline-none"
                  onClick={toggleModal}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              {/* Corpo do Modal */}
              <textarea
                className="w-full h-32 p-2 border border-gray-300 rounded resize-none"
                placeholder="Digite sua mensagem..."
                value={message}
                onChange={handleMessageChange}
              ></textarea>
              {/* Rodapé do Modal */}
              <div className="flex justify-end w-full mt-4">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none"
                  onClick={handleSubmit}
                >
                  Enviar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      )}
    </>
  );
}

