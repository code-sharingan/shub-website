import { useEffect, useRef } from 'react';

interface PlayerProps {
  x: number;
  y: number;
  width: number;
  height: number;
  isJumping: boolean;
  direction: 'left' | 'right';
}

const Player = ({ x, y, width, height, isJumping, direction }: PlayerProps) => {
  return (
    <div
      className="absolute transition-all duration-100"
      style={{
        left: `${x}px`,
        top: `${y}px`,
        width: `${width}px`,
        height: `${height}px`,
        transform: direction === 'left' ? 'scaleX(-1)' : 'scaleX(1)',
      }}
    >
      <div className="relative w-full h-full">
        {/* Character body */}
        <div className="absolute bottom-0 w-full h-full bg-gradient-to-b from-primary to-primary/80 rounded-lg shadow-lg border-2 border-primary-foreground">
          {/* Head */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-8 bg-accent rounded-full border-2 border-primary-foreground">
            {/* Eyes */}
            <div className="absolute top-2 left-1 w-1.5 h-1.5 bg-white rounded-full"></div>
            <div className="absolute top-2 right-1 w-1.5 h-1.5 bg-white rounded-full"></div>
          </div>

          {/* Body details */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-6 bg-background/20 rounded"></div>

          {/* Legs */}
          <div className={`absolute bottom-0 left-1 w-2 h-3 bg-primary-foreground rounded-b ${isJumping ? '' : 'animate-pulse'}`}></div>
          <div className={`absolute bottom-0 right-1 w-2 h-3 bg-primary-foreground rounded-b ${isJumping ? '' : 'animate-pulse'}`}></div>
        </div>

        {/* Jump effect */}
        {isJumping && (
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-white/30 rounded-full animate-pulse"></div>
        )}
      </div>
    </div>
  );
};

export default Player;
