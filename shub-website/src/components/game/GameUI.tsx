import { Trophy, Star, Code2, Gamepad2 } from 'lucide-react';

interface GameUIProps {
  score: number;
  collectedCount: number;
  totalCollectibles: number;
}

const GameUI = ({ score, collectedCount, totalCollectibles }: GameUIProps) => {
  return (
    <div className="absolute top-4 left-4 right-4 z-10 flex justify-between items-start">
      {/* Score Panel */}
      <div className="bg-black/80 backdrop-blur-sm rounded-lg px-6 py-3 border-2 border-primary/50 shadow-lg">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Star className="w-6 h-6 text-yellow-400 animate-pulse" />
            <div>
              <div className="text-xs text-muted-foreground">Score</div>
              <div className="text-xl font-bold text-primary">{score}</div>
            </div>
          </div>

          <div className="w-px h-10 bg-border"></div>

          <div className="flex items-center gap-2">
            <Code2 className="w-6 h-6 text-green-400" />
            <div>
              <div className="text-xs text-muted-foreground">Skills Collected</div>
              <div className="text-xl font-bold text-foreground">
                {collectedCount}/{totalCollectibles}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Controls Guide */}
      <div className="bg-black/80 backdrop-blur-sm rounded-lg px-4 py-3 border-2 border-primary/50 shadow-lg">
        <div className="flex items-center gap-2 mb-2">
          <Gamepad2 className="w-5 h-5 text-primary" />
          <div className="text-sm font-bold text-foreground">Controls</div>
        </div>
        <div className="text-xs text-muted-foreground space-y-1">
          <div>← → or A/D: Move</div>
          <div>↑ or W/Space: Jump</div>
        </div>
      </div>

      {/* Completion Badge */}
      {collectedCount === totalCollectibles && (
        <div className="absolute top-20 left-1/2 -translate-x-1/2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg px-6 py-4 border-4 border-white shadow-2xl animate-bounce">
          <div className="flex items-center gap-3">
            <Trophy className="w-8 h-8 text-white" />
            <div className="text-white">
              <div className="text-sm font-semibold">Portfolio Complete!</div>
              <div className="text-xs">You've collected all skills!</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GameUI;
