
import React, { useState, useCallback } from 'react';
import Wheel from './components/Wheel';
import ResultModal from './components/ResultModal';
import { RemoveIcon } from './components/icons';

const App: React.FC = () => {
  const [topics, setTopics] = useState<string[]>([
    'Pizza', 'Burger', 'Tacos', 'Sushi', 'Pasta', 'Salad'
  ]);
  const [newTopic, setNewTopic] = useState<string>('');
  const [isSpinning, setIsSpinning] = useState<boolean>(false);
  const [rotation, setRotation] = useState<number>(0);
  const [selectedTopicIndex, setSelectedTopicIndex] = useState<number | null>(null);
  const [showResultModal, setShowResultModal] = useState<boolean>(false);

  const handleAddTopic = (e: React.FormEvent) => {
    e.preventDefault();
    if (newTopic.trim() && !topics.includes(newTopic.trim())) {
      setTopics([...topics, newTopic.trim()]);
      setNewTopic('');
    }
  };

  const handleRemoveTopic = (indexToRemove: number) => {
    setTopics(topics.filter((_, index) => index !== indexToRemove));
  };

  const handleSpin = useCallback(() => {
    if (isSpinning || topics.length < 2) return;

    setIsSpinning(true);
    setSelectedTopicIndex(null);

    const randomIndex = Math.floor(Math.random() * topics.length);
    setSelectedTopicIndex(randomIndex);
    
    const segmentAngle = 360 / topics.length;
    const randomOffset = (Math.random() * 0.8 - 0.4) * segmentAngle;
    const targetRotation = 90 - (randomIndex * segmentAngle + segmentAngle / 2 + randomOffset);

    // Add multiple full spins for visual effect
    const fullSpins = 360 * (5 + Math.floor(Math.random() * 4)); 
    
    setRotation(prevRotation => prevRotation + fullSpins + targetRotation);

  }, [isSpinning, topics.length]);

  const handleTransitionEnd = () => {
    // Only show modal after the spin, not initial render
    if(isSpinning) {
       setShowResultModal(true);
    }
  };

  const closeModalAndReset = () => {
    setShowResultModal(false);
    setIsSpinning(false);
  };

  const canSpin = !isSpinning && topics.length >= 2;

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen bg-gray-900 text-gray-100 p-4 font-sans">
      <div className="lg:w-1/3 w-full p-6 bg-gray-800 rounded-xl shadow-2xl mb-8 lg:mb-0 lg:mr-8 flex-shrink-0">
        <h1 className="text-3xl font-bold text-center text-cyan-400 mb-6">Spin the Wheel!</h1>
        <form onSubmit={handleAddTopic} className="flex mb-4">
          <input
            type="text"
            value={newTopic}
            onChange={(e) => setNewTopic(e.target.value)}
            placeholder="Add a new topic"
            className="flex-grow p-3 bg-gray-700 border-2 border-gray-600 rounded-l-lg focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition"
          />
          <button type="submit" className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold p-3 rounded-r-lg transition duration-300">
            Add
          </button>
        </form>
        <div className="h-64 overflow-y-auto pr-2">
          {topics.map((topic, index) => (
            <div key={index} className="flex items-center justify-between bg-gray-700 p-3 rounded-lg mb-2 animate-fade-in">
              <div className="flex items-center flex-1">
                <span className="bg-cyan-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3 flex-shrink-0">
                  {index + 1}
                </span>
                <span className="truncate pr-2">{topic}</span>
              </div>
              <button onClick={() => handleRemoveTopic(index)} className="text-red-400 hover:text-red-500 transition-colors duration-200">
                <RemoveIcon />
              </button>
            </div>
          ))}
           {topics.length < 2 && (
            <div className="text-center text-yellow-400 p-3 bg-yellow-900/50 rounded-lg">
                Please add at least 2 topics to spin the wheel.
            </div>
           )}
        </div>
      </div>

      <div className="relative flex flex-col items-center justify-center">
        <div className="absolute -top-4 z-20 transform">
           <div className="w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-t-[30px] border-t-cyan-400 drop-shadow-[0_2px_2px_rgba(0,255,255,0.5)]"></div>
        </div>
        <Wheel topics={topics} rotation={rotation} onTransitionEnd={handleTransitionEnd} />
        <button
          onClick={handleSpin}
          disabled={!canSpin}
          className="absolute z-10 bg-white text-gray-900 font-extrabold text-2xl w-32 h-32 rounded-full border-8 border-gray-800 shadow-xl hover:bg-gray-200 hover:scale-105 active:scale-95 transition-all duration-300 disabled:bg-gray-400 disabled:text-gray-600 disabled:cursor-not-allowed disabled:scale-100"
        >
          SPIN!
        </button>
      </div>

      <ResultModal 
        isOpen={showResultModal} 
        onClose={closeModalAndReset} 
        topic={selectedTopicIndex !== null ? topics[selectedTopicIndex] : null} 
      />
    </div>
  );
};

export default App;
