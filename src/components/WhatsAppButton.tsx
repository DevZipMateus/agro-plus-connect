import { MessageCircle, X } from "lucide-react";
import { useState } from "react";

const WhatsAppButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const phone1 = "5566997220387";
  const phone2 = "5566999899756";
  const message = "Olá! Gostaria de saber mais sobre os produtos da Agro+ Nutrição Animal.";

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 group"
        aria-label="WhatsApp"
      >
        {isOpen ? (
          <X size={24} className="transition-transform duration-200" />
        ) : (
          <MessageCircle size={24} className="transition-transform duration-200 group-hover:scale-110" />
        )}
      </button>

      {/* Contact Options */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 bg-white rounded-lg shadow-xl border p-4 w-64 animate-in slide-in-from-bottom-5 duration-200">
          <div className="mb-3">
            <h3 className="font-semibold text-gray-800 mb-1">Entre em contato</h3>
            <p className="text-sm text-gray-600">Escolha um dos nossos números:</p>
          </div>
          
          <div className="space-y-2">
            <a
              href={`https://wa.me/${phone1}?text=${encodeURIComponent(message)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 bg-green-50 hover:bg-green-100 rounded-lg transition-colors duration-200 group"
            >
              <div className="bg-green-500 p-2 rounded-full">
                <MessageCircle size={16} className="text-white" />
              </div>
              <div>
                <p className="font-medium text-gray-800">(66) 99722-0387</p>
                <p className="text-xs text-gray-500">Atendimento principal</p>
              </div>
            </a>

            <a
              href={`https://wa.me/${phone2}?text=${encodeURIComponent(message)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 bg-green-50 hover:bg-green-100 rounded-lg transition-colors duration-200 group"
            >
              <div className="bg-green-500 p-2 rounded-full">
                <MessageCircle size={16} className="text-white" />
              </div>
              <div>
                <p className="font-medium text-gray-800">(66) 99989-9756</p>
                <p className="text-xs text-gray-500">Atendimento alternativo</p>
              </div>
            </a>
          </div>

          <div className="mt-3 pt-3 border-t border-gray-200">
            <p className="text-xs text-gray-500 text-center">
              Horário de atendimento: Segunda a Sexta
            </p>
          </div>
        </div>
      )}

      {/* Pulse animation */}
      {!isOpen && (
        <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20"></div>
      )}
    </div>
  );
};

export default WhatsAppButton;