
import React from 'react';

interface ResultModalProps {
  isOpen: boolean;
  onClose: () => void;
  topic: string | null;
}

const ResultModal: React.FC<ResultModalProps> = ({ isOpen, onClose, topic }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 transition-opacity duration-300 animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="bg-gray-800 rounded-2xl shadow-2xl p-8 md:p-12 text-center transform transition-all duration-300 scale-95 animate-zoom-in"
        onClick={e => e.stopPropagation()}
      >
        <h2 className="text-xl md:text-2xl font-light text-gray-400 mb-2">The winner is...</h2>
        <p className="text-4xl md:text-6xl font-bold text-cyan-400 my-4 drop-shadow-[0_2px_4px_rgba(0,255,255,0.5)]">
          {topic}
        </p>
        <button
          onClick={onClose}
          className="mt-8 bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-3 px-8 rounded-full transition-transform duration-300 hover:scale-105"
        >
          Spin Again!
        </button>
      </div>
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in { animation: fade-in 0.3s ease-out forwards; }

        @keyframes zoom-in {
            from { opacity: 0; transform: scale(0.9); }
            to { opacity: 1; transform: scale(1); }
        }
        .animate-zoom-in { animation: zoom-in 0.3s ease-out forwards; }
      `}</style>
    </div>
  );
};

export default ResultModal;
