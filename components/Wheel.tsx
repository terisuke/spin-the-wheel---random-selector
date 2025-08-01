
import React from 'react';

interface WheelProps {
  topics: string[];
  rotation: number;
  onTransitionEnd: () => void;
}

const COLORS = [
  '#4f46e5', '#db2777', '#f97316', '#16a34a', '#0891b2', 
  '#d946ef', '#ca8a04', '#65a30d', '#be123c', '#0ea5e9'
];

const Wheel: React.FC<WheelProps> = ({ topics, rotation, onTransitionEnd }) => {
  const numTopics = topics.length;
  const segmentDegrees = numTopics > 0 ? 360 / numTopics : 360;

  const gradientParts = topics.map((_, index) => {
    const color = COLORS[index % COLORS.length];
    const startAngle = index * segmentDegrees;
    const endAngle = (index + 1) * segmentDegrees;
    return `${color} ${startAngle}deg ${endAngle}deg`;
  });
  
  const conicGradient = numTopics > 0 ? `conic-gradient(${gradientParts.join(', ')})` : 'conic-gradient(#6b7280 0deg 360deg)';
  
  return (
    <div 
      className="relative w-[350px] h-[350px] md:w-[450px] md:h-[450px] rounded-full overflow-hidden shadow-2xl border-8 border-gray-700"
      onTransitionEnd={onTransitionEnd}
    >
      <div
        className="w-full h-full rounded-full"
        style={{
          background: conicGradient,
          transform: `rotate(${rotation}deg)`,
          transition: 'transform 6000ms cubic-bezier(0.2, 0.8, 0.2, 1)',
        }}
      >
        {numTopics > 0 && topics.map((topic, index) => {
          const angle = segmentDegrees * index + segmentDegrees / 2;
          return (
            <div
              key={index}
              className="absolute w-full h-full"
              style={{ transform: `rotate(${angle}deg)` }}
            >
              <span
                className="absolute left-[55%] top-1/2 -translate-y-1/2 origin-left text-white font-semibold text-sm md:text-base transform"
                style={{ transform: `rotate(-90deg) ` }}
              >
                {topic.length > 15 ? `${topic.substring(0, 13)}...` : topic}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Wheel;
