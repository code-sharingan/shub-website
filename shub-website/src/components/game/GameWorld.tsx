import { useEffect, useState } from 'react';
import Player from './Player';
import Platform from './Platform';
import Collectible from './Collectible';
import GameUI from './GameUI';
import CollectiblePopup from './CollectiblePopup';
import { useGamePhysics } from '@/hooks/useGamePhysics';
import { skills, platforms, achievements } from '@/data/gameData';
import { collectibleDetails } from '@/data/collectibleDetails';
import { Sparkles } from 'lucide-react';
import cyberBg from '@/assets/cyber-bg.png';

const COLLECTIBLE_SIZE = 30;

const GameWorld = () => {
  const [showInstructions, setShowInstructions] = useState(true);

  const allCollectibles = [
    ...skills.map((skill) => ({
      x: skill.x,
      y: skill.y,
      size: COLLECTIBLE_SIZE,
      id: skill.id,
      label: skill.label,
      type: skill.type,
      collected: false,
    })),
    ...achievements.map((achievement) => ({
      x: achievement.x,
      y: achievement.y,
      size: COLLECTIBLE_SIZE,
      id: achievement.id,
      label: achievement.label,
      type: achievement.type,
      collected: false,
    })),
  ];

  const { playerX, playerY, isJumping, direction, score, collectedItems, lastCollectedId, clearLastCollected } = useGamePhysics(
    platforms,
    allCollectibles
  );

  const [currentPopup, setCurrentPopup] = useState<string | null>(null);

  // Show popup when new item is collected
  useEffect(() => {
    if (lastCollectedId && collectibleDetails[lastCollectedId]) {
      setCurrentPopup(lastCollectedId);
    }
  }, [lastCollectedId]);

  const handleClosePopup = () => {
    setCurrentPopup(null);
    clearLastCollected();
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowInstructions(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className="relative w-full h-screen overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${cyberBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Background clouds */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-16 bg-white/40 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-32 right-20 w-40 h-20 bg-white/30 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-56 left-1/3 w-36 h-18 bg-white/35 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-40 right-1/4 w-44 h-22 bg-white/25 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      </div>

      {/* Sun */}
      <div className="absolute top-10 right-10 w-20 h-20 bg-yellow-300 rounded-full shadow-lg animate-pulse">
        <div className="absolute inset-0 bg-yellow-200 rounded-full animate-ping opacity-20"></div>
      </div>

      {/* Game UI */}
      <GameUI
        score={score}
        collectedCount={collectedItems.length}
        totalCollectibles={allCollectibles.length}
      />

      {/* Instructions Overlay */}
      {showInstructions && (
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 animate-fade-in">
          <div className="bg-gradient-to-br from-primary/90 to-accent/90 rounded-2xl p-8 max-w-lg border-4 border-white/30 shadow-2xl">
            <div className="flex items-center gap-3 mb-4">
              <Sparkles className="w-8 h-8 text-yellow-300" />
              <h2 className="text-3xl font-bold text-white">Welcome to My Interactive Portfolio!</h2>
            </div>
            <p className="text-white/90 mb-4">
              Navigate through my career journey as a platformer game! Collect skills, explore projects, and discover my achievements.
            </p>
            <div className="bg-black/30 rounded-lg p-4 mb-4 text-white">
              <div className="font-bold mb-2">Controls:</div>
              <div className="space-y-1 text-sm">
                <div>• Use <kbd className="px-2 py-1 bg-white/20 rounded">←</kbd> <kbd className="px-2 py-1 bg-white/20 rounded">→</kbd> or <kbd className="px-2 py-1 bg-white/20 rounded">A</kbd> <kbd className="px-2 py-1 bg-white/20 rounded">D</kbd> to move</div>
                <div>• Use <kbd className="px-2 py-1 bg-white/20 rounded">↑</kbd> or <kbd className="px-2 py-1 bg-white/20 rounded">W</kbd> or <kbd className="px-2 py-1 bg-white/20 rounded">Space</kbd> to jump</div>
              </div>
            </div>
            <div className="text-center">
              <button
                onClick={() => setShowInstructions(false)}
                className="bg-white text-primary px-6 py-3 rounded-lg font-bold hover:bg-white/90 transition-all shadow-lg"
              >
                Start Playing!
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Game Container */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-[1200px] h-[600px] border-4 border-white/50 rounded-lg shadow-2xl overflow-hidden bg-gradient-to-b from-transparent to-green-900/20">
          {/* Mountains background */}
          <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-green-700/30 to-transparent pointer-events-none"></div>

          {/* Grid overlay for depth */}
          <div className="absolute inset-0 opacity-5 pointer-events-none">
            <div className="w-full h-full" style={{
              backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(255, 255, 255, .05) 25%, rgba(255, 255, 255, .05) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, .05) 75%, rgba(255, 255, 255, .05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(255, 255, 255, .05) 25%, rgba(255, 255, 255, .05) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, .05) 75%, rgba(255, 255, 255, .05) 76%, transparent 77%, transparent)',
              backgroundSize: '50px 50px'
            }}></div>
          </div>

          {/* Platforms */}
          {platforms.map((platform, index) => (
            <Platform key={index} {...platform} />
          ))}

          {/* Collectibles */}
          {allCollectibles.map((collectible) => (
            <Collectible
              key={collectible.id}
              {...collectible}
              collected={collectedItems.includes(collectible.id)}
            />
          ))}

          {/* Player */}
          <Player
            x={playerX}
            y={playerY}
            width={40}
            height={50}
            isJumping={isJumping}
            direction={direction}
          />

          {/* Ground */}
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-green-600 to-green-800 border-t-4 border-green-500">
            {/* Grass texture */}
            <div className="absolute top-0 left-0 right-0 h-2 bg-green-400"></div>
            <div className="absolute inset-0 opacity-20">
              <div className="w-full h-full grid grid-cols-12 gap-1 p-2">
                {[...Array(48)].map((_, i) => (
                  <div key={i} className="bg-green-700/50 rounded"></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Info Section Below Game */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center">
        <div className="bg-black/60 backdrop-blur-sm rounded-lg px-6 py-3 border-2 border-primary/50">
          <p className="text-white text-sm">
            Explore the platforms to learn about my projects, experience, and education!
          </p>
        </div>
      </div>

      {/* Collectible Popup */}
      {currentPopup && collectibleDetails[currentPopup] && (
        <CollectiblePopup
          collectible={collectibleDetails[currentPopup]}
          onClose={handleClosePopup}
        />
      )}
    </div>
  );
};

export default GameWorld;
