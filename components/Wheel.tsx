
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
  
  // Rotate the entire gradient so first segment starts at top
  const conicGradient = numTopics > 0 ? `conic-gradient(from -90deg, ${gradientParts.join(', ')})` : 'conic-gradient(#6b7280 0deg 360deg)';
  
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
        {numTopics > 0 && topics.map((_, index) => {
          // Place numbers at the center of each segment, accounting for the -90deg rotation
          const angle = segmentDegrees * index + segmentDegrees / 2 - 90;
          return (
            <div
              key={index}
              className="absolute w-full h-full flex items-center justify-center"
              style={{ transform: `rotate(${angle}deg)` }}
            >
              <span
                className="absolute text-white font-bold text-2xl md:text-3xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
                style={{ 
                  top: '20%',
                  transform: 'translateY(-50%)'
                }}
              >
                {index + 1}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Wheel;
