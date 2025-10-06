interface PlatformProps {
  x: number;
  y: number;
  width: number;
  height: number;
  label?: string;
  type?: 'default' | 'project' | 'experience' | 'education';
}

const Platform = ({ x, y, width, height, label, type = 'default' }: PlatformProps) => {
  const getColorClass = () => {
    switch (type) {
      case 'project':
        return 'bg-gradient-to-r from-purple-500 to-pink-500';
      case 'experience':
        return 'bg-gradient-to-r from-blue-500 to-cyan-500';
      case 'education':
        return 'bg-gradient-to-r from-green-500 to-emerald-500';
      default:
        return 'bg-gradient-to-r from-orange-500 to-amber-500';
    }
  };

  return (
    <div
      className="absolute"
      style={{
        left: `${x}px`,
        top: `${y}px`,
        width: `${width}px`,
        height: `${height}px`,
      }}
    >
      <div className={`w-full h-full ${getColorClass()} rounded-lg shadow-lg border-4 border-white/20 relative overflow-hidden`}>
        {/* Texture pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full grid grid-cols-4 gap-1 p-1">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="bg-white/30 rounded"></div>
            ))}
          </div>
        </div>

        {label && (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-white font-bold text-xs text-center px-2 drop-shadow-lg">
              {label}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Platform;
