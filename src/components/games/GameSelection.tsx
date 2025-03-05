
import { Game } from '@/types';

interface GameSelectionProps {
  onGameSelect: (gameId: string) => void;
}

export default function GameSelection({ onGameSelect }: GameSelectionProps) {
  // Temporary mock data - will be replaced with API call
  const games: Game[] = [
    { id: 'hsr', name: 'Honkai: Star Rail', image: '/games/hsr.png', platform: ['PC', 'Mobile'] },
    { id: 'genshin', name: 'Genshin Impact', image: '/games/genshin.png', platform: ['PC', 'PS4', 'Mobile'] },
    // Add other games...
  ];

  return (
    <div>
      <div className="p-6 bg-indigo-600">
        <h1 className="text-2xl font-bold text-white">Select a Game</h1>
        <p className="text-indigo-200 mt-1">Choose the game you want to automate</p>
      </div>
      
      <div className="p-6">
        <div className="space-y-3">
          {games.map((game) => (
            <div 
              key={game.id}
              onClick={() => onGameSelect(game.id)}
              className="flex items-center p-3 border rounded-md cursor-pointer hover:bg-gray-50 transition-colors"
            >
              <img 
                src={game.image} 
                alt={game.name} 
                className="w-12 h-12 rounded-md object-cover"
              />
              <div className="ml-4">
                <h3 className="font-medium text-gray-900">{game.name}</h3>
                <p className="text-sm text-gray-500">{game.platform.join(', ')}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}