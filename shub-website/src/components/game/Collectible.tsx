import { Sparkles, Code2, Zap } from 'lucide-react';

interface CollectibleProps {
  x: number;
  y: number;
  size: number;
  label: string;
  collected: boolean;
  type?: 'skill' | 'achievement' | 'power';
}

const Collectible = ({ x, y, size, label, collected, type = 'skill' }: CollectibleProps) => {
  if (collected) return null;

  const getIcon = () => {
    switch (type) {
      case 'achievement':
        return <Sparkles className="w-full h-full text-yellow-300" />;
      case 'power':
        return <Zap className="w-full h-full text-blue-300" />;
      default:
        return <Code2 className="w-full h-full text-green-300" />;
    }
  };

  const getColorClass = () => {
    switch (type) {
      case 'achievement':
        return 'bg-gradient-to-br from-yellow-400 to-orange-500';
      case 'power':
        return 'bg-gradient-to-br from-blue-400 to-purple-500';
      default:
        return 'bg-gradient-to-br from-green-400 to-emerald-500';
    }
  };

  return (
    <div
      className="absolute transition-all duration-200"
      style={{
        left: `${x}px`,
        top: `${y}px`,
        width: `${size}px`,
        height: `${size}px`,
      }}
    >
      <div className={`w-full h-full ${getColorClass()} rounded-full shadow-lg border-2 border-white/50 animate-bounce relative`}>
        <div className="absolute inset-0 p-1">
          {getIcon()}
        </div>

        {/* Glow effect */}
        <div className="absolute inset-0 rounded-full bg-white/30 animate-ping"></div>

        {/* Tooltip */}
        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black/80 text-white px-2 py-1 rounded text-xs whitespace-nowrap opacity-0 hover:opacity-100 transition-opacity pointer-events-none">
          {label}
        </div>
      </div>
    </div>
  );
};

export default Collectible;
