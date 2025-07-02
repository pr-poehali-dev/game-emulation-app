import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const GameLibrary = () => {
  const navigate = useNavigate();
  const games = [
    {
      id: 1,
      title: "SPACE INVADERS",
      console: "ARCADE",
      players: "1-2P",
      status: "online",
      cheats: 3,
      image: "🚀",
      color: "from-green-500 to-emerald-600",
    },
    {
      id: 2,
      title: "PAC-MAN",
      console: "ARCADE",
      players: "1P",
      status: "online",
      cheats: 5,
      image: "👾",
      color: "from-yellow-500 to-orange-600",
    },
    {
      id: 3,
      title: "STREET FIGHTER",
      console: "ARCADE",
      players: "1-2P",
      status: "multiplayer",
      cheats: 8,
      image: "👊",
      color: "from-red-500 to-pink-600",
    },
    {
      id: 4,
      title: "TETRIS",
      console: "NES",
      players: "1-2P",
      status: "online",
      cheats: 2,
      image: "🧩",
      color: "from-blue-500 to-purple-600",
    },
    {
      id: 5,
      title: "MARIO BROS",
      console: "NES",
      players: "1-2P",
      status: "multiplayer",
      cheats: 12,
      image: "🍄",
      color: "from-red-500 to-red-700",
    },
    {
      id: 6,
      title: "DONKEY KONG",
      console: "ARCADE",
      players: "1P",
      status: "online",
      cheats: 4,
      image: "🦍",
      color: "from-amber-500 to-orange-700",
    },
  ];

  return (
    <div className="container mx-auto px-6 py-8">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 font-mono">
            GAME LIBRARY
          </h2>
          <p className="text-purple-300 font-mono text-sm mt-1">
            SELECT YOUR ADVENTURE
          </p>
        </div>

        <div className="flex space-x-2">
          <Button
            variant="outline"
            size="sm"
            className="border-purple-500 text-purple-300 font-mono"
          >
            <Icon name="Filter" size={14} className="mr-1" />
            FILTER
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="border-green-500 text-green-300 font-mono"
          >
            <Icon name="Search" size={14} className="mr-1" />
            SEARCH
          </Button>
        </div>
      </div>

      {/* Game Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {games.map((game) => (
          <Card
            key={game.id}
            className="bg-gray-800/80 border-2 border-purple-500/30 hover:border-purple-400 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 group cursor-pointer"
          >
            <CardContent className="p-6">
              {/* Game Icon and Status */}
              <div className="flex items-start justify-between mb-4">
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${game.color} rounded-lg flex items-center justify-center text-2xl shadow-lg transform group-hover:scale-110 transition-transform duration-300`}
                >
                  {game.image}
                </div>
                <div className="flex flex-col items-end space-y-1">
                  <Badge
                    variant="outline"
                    className={`
                      ${game.status === "online" ? "border-green-400 text-green-400 bg-green-400/10" : "border-orange-400 text-orange-400 bg-orange-400/10"}
                      font-mono text-xs
                    `}
                  >
                    <div
                      className={`w-1.5 h-1.5 ${game.status === "online" ? "bg-green-400" : "bg-orange-400"} rounded-full mr-1 animate-pulse`}
                    ></div>
                    {game.status.toUpperCase()}
                  </Badge>
                  <Badge
                    variant="outline"
                    className="border-purple-400 text-purple-300 bg-purple-400/10 font-mono text-xs"
                  >
                    {game.console}
                  </Badge>
                </div>
              </div>

              {/* Game Info */}
              <div className="mb-4">
                <h3 className="text-xl font-bold text-white font-mono tracking-wide mb-1">
                  {game.title}
                </h3>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-purple-300 font-mono">
                    <Icon name="Users" size={12} className="inline mr-1" />
                    {game.players}
                  </span>
                  <span className="text-orange-300 font-mono">
                    <Icon name="Zap" size={12} className="inline mr-1" />
                    {game.cheats} CHEATS
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-2">
                <Button
                  onClick={() => navigate(`/game/${game.id}`)}
                  className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-mono text-sm"
                >
                  <Icon name="Play" size={16} className="mr-2" />
                  PLAY
                </Button>
                <Button
                  onClick={() => navigate("/settings")}
                  variant="outline"
                  size="sm"
                  className="border-orange-500 text-orange-300 bg-orange-500/10 hover:bg-orange-500/20 font-mono"
                >
                  <Icon name="Settings" size={16} />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Load More */}
      <div className="text-center mt-12">
        <Button
          variant="outline"
          className="border-purple-500 text-purple-300 bg-purple-500/10 hover:bg-purple-500/20 font-mono px-8"
        >
          <Icon name="RotateCcw" size={16} className="mr-2" />
          LOAD MORE GAMES
        </Button>
      </div>
    </div>
  );
};

export default GameLibrary;
