import { X, Award, Code2, Sparkles, Zap } from 'lucide-react';
import { CollectibleDetail } from '@/data/collectibleDetails';

interface CollectiblePopupProps {
  collectible: CollectibleDetail;
  onClose: () => void;
}

const CollectiblePopup = ({ collectible, onClose }: CollectiblePopupProps) => {
  const getCategoryIcon = () => {
    switch (collectible.category) {
      case 'Achievement':
        return <Award className="w-8 h-8 text-yellow-400" />;
      case 'Project':
        return <Sparkles className="w-8 h-8 text-purple-400" />;
      case 'Programming':
      case 'Web Framework':
      case 'Backend':
        return <Code2 className="w-8 h-8 text-blue-400" />;
      default:
        return <Zap className="w-8 h-8 text-green-400" />;
    }
  };

  const getCategoryColor = () => {
    switch (collectible.category) {
      case 'Achievement':
        return 'from-yellow-500 to-orange-500';
      case 'Project':
        return 'from-purple-500 to-pink-500';
      case 'Programming':
        return 'from-blue-500 to-cyan-500';
      case 'Web Framework':
        return 'from-indigo-500 to-purple-500';
      case 'Backend':
        return 'from-green-500 to-emerald-500';
      case 'Database':
        return 'from-red-500 to-orange-500';
      case 'Cloud':
        return 'from-sky-500 to-blue-500';
      case 'Tools':
        return 'from-pink-500 to-rose-500';
      default:
        return 'from-gray-500 to-slate-500';
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm animate-fade-in">
      <div className="relative bg-gradient-to-br from-background to-background/95 rounded-2xl p-8 max-w-lg w-full mx-4 border-4 border-primary/30 shadow-2xl animate-scale-in">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-destructive/20 hover:bg-destructive/30 rounded-full p-2 transition-all"
        >
          <X className="w-5 h-5 text-foreground" />
        </button>

        {/* Celebration effect */}
        <div className="absolute -top-12 left-1/2 -translate-x-1/2">
          <div className="text-6xl animate-bounce">🎉</div>
        </div>

        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <div className={`p-4 bg-gradient-to-br ${getCategoryColor()} rounded-xl shadow-lg`}>
            {getCategoryIcon()}
          </div>
          <div>
            <div className="text-sm text-muted-foreground mb-1">{collectible.category}</div>
            <h2 className="text-3xl font-bold text-foreground">{collectible.name}</h2>
          </div>
        </div>

        {/* Achievement badge */}
        <div className="mb-4 bg-primary/10 border-2 border-primary/30 rounded-lg px-4 py-2 text-center">
          <p className="text-primary font-bold text-sm">✨ Skill Unlocked! ✨</p>
        </div>

        {/* Description */}
        <div className="mb-4">
          <h3 className="text-sm font-semibold text-muted-foreground mb-2 uppercase tracking-wide">
            About
          </h3>
          <p className="text-foreground leading-relaxed">{collectible.description}</p>
        </div>

        {/* Experience */}
        <div className="mb-6">
          <h3 className="text-sm font-semibold text-muted-foreground mb-2 uppercase tracking-wide">
            My Experience
          </h3>
          <div className="bg-accent/20 rounded-lg p-4 border border-accent/30">
            <p className="text-foreground leading-relaxed">{collectible.experience}</p>
          </div>
        </div>

        {/* Continue button */}
        <button
          onClick={onClose}
          className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white font-bold py-3 rounded-lg shadow-lg transition-all transform hover:scale-105"
        >
          Continue Exploring! →
        </button>

        {/* Sparkle effects */}
        <div className="absolute top-8 right-8 text-yellow-400 animate-ping opacity-50">✨</div>
        <div className="absolute bottom-12 left-8 text-blue-400 animate-ping opacity-50" style={{ animationDelay: '0.5s' }}>⭐</div>
        <div className="absolute top-1/2 right-12 text-green-400 animate-ping opacity-50" style={{ animationDelay: '1s' }}>💫</div>
      </div>

      <style jsx>{`
        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-scale-in {
          animation: scale-in 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default CollectiblePopup;
