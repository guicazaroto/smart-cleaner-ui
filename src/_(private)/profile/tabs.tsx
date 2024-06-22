import { useState } from 'react';

const Tabs = () => {
    const [activeTab, setActiveTab] = useState('profile');

    const handleTabClick = (tab: any) => {
        setActiveTab(tab);
    };

    return (
        <div className="max-w-2xl mx-auto mt-8">
            <div className="border-b border-gray-200">
                <div className="flex">
                    <button
                        className={`tab flex-1 text-center py-4 px-6 bg-white border-b-2 border-transparent 
                                    ${activeTab === 'profile' ? 'border-blue-500' : 'hover:border-gray-300 focus:outline-none'}`}
                        onClick={() => handleTabClick('profile')}
                    >
                        Perfil de Usuário
                    </button>
                    <button
                        className={`tab flex-1 text-center py-4 px-6 bg-white border-b-2 border-transparent 
                                    ${activeTab === 'messages' ? 'border-blue-500' : 'hover:border-gray-300 focus:outline-none'}`}
                        onClick={() => handleTabClick('messages')}
                    >
                        Mensagens Recebidas
                    </button>
                </div>
            </div>

            <div className="mt-6">
                <div className={`tab-content ${activeTab === 'profile' ? '' : 'hidden'}`}>
                    <p>Conteúdo do perfil do usuário vai aqui...</p>
                </div>

                <div className={`tab-content ${activeTab === 'messages' ? '' : 'hidden'}`}>
                    <ul>
                        <li>Mensagem 1</li>
                        <li>Mensagem 2</li>
                        <li>Mensagem 3</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Tabs;
