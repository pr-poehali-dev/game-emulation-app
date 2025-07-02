import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Game = () => {
  const { gameId } = useParams();
  const navigate = useNavigate();

  const gameData = {
    1: {
      title: "SPACE INVADERS",
      emoji: "🚀",
      color: "from-green-500 to-emerald-600",
    },
    2: {
      title: "PAC-MAN",
      emoji: "👾",
      color: "from-yellow-500 to-orange-600",
    },
    3: {
      title: "STREET FIGHTER",
      emoji: "👊",
      color: "from-red-500 to-pink-600",
    },
    4: { title: "TETRIS", emoji: "🧩", color: "from-blue-500 to-purple-600" },
    5: { title: "MARIO BROS", emoji: "🍄", color: "from-red-500 to-red-700" },
    6: {
      title: "DONKEY KONG",
      emoji: "🦍",
      color: "from-amber-500 to-orange-700",
    },
  };

  const game = gameData[gameId as keyof typeof gameData];

  if (!game) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-900 via-purple-900 to-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-red-400 font-mono mb-4">
            GAME NOT FOUND
          </h1>
          <Button
            onClick={() => navigate("/")}
            className="bg-purple-600 hover:bg-purple-500 font-mono"
          >
            <Icon name="ArrowLeft" size={16} className="mr-2" />
            BACK TO LIBRARY
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-purple-900 to-gray-900">
      {/* Header */}
      <div className="bg-gray-900 border-b-4 border-purple-500 p-6">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button
              variant="outline"
              onClick={() => navigate("/")}
              className="border-purple-500 text-purple-300 bg-purple-500/10 font-mono"
            >
              <Icon name="ArrowLeft" size={16} className="mr-2" />
              LIBRARY
            </Button>
            <div
              className={`w-12 h-12 bg-gradient-to-br ${game.color} rounded-lg flex items-center justify-center text-xl`}
            >
              {game.emoji}
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white font-mono">
                {game.title}
              </h1>
              <p className="text-purple-300 font-mono text-sm">READY TO PLAY</p>
            </div>
          </div>

          <div className="flex space-x-2">
            <Button
              variant="outline"
              onClick={() => navigate("/multiplayer")}
              className="border-orange-500 text-orange-300 bg-orange-500/10 font-mono"
            >
              <Icon name="Users" size={16} className="mr-2" />
              MULTIPLAYER
            </Button>
            <Button
              variant="outline"
              onClick={() => navigate("/settings")}
              className="border-green-500 text-green-300 bg-green-500/10 font-mono"
            >
              <Icon name="Settings" size={16} />
            </Button>
          </div>
        </div>
      </div>

      {/* Game Screen */}
      <div className="container mx-auto p-6">
        <Card className="bg-gray-800/80 border-2 border-purple-500/50 mb-6">
          <CardContent className="p-8">
            {/* Fake Game Screen */}
            <div className="aspect-video bg-black rounded-lg border-4 border-green-400 relative overflow-hidden mb-6">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-400/5 to-transparent animate-pulse"></div>
              <div className="flex items-center justify-center h-full">
                <div className="text-center">
                  <div className={`text-8xl mb-4 animate-bounce`}>
                    {game.emoji}
                  </div>
                  <div className="text-green-400 font-mono text-2xl mb-2 tracking-wider">
                    {game.title}
                  </div>
                  <div className="text-green-300 font-mono text-sm animate-pulse">
                    PRESS SPACE TO START
                  </div>
                </div>
              </div>

              {/* Scanlines */}
              <div className="absolute inset-0 pointer-events-none">
                {Array.from({ length: 20 }).map((_, i) => (
                  <div
                    key={i}
                    className="absolute left-0 right-0 h-px bg-green-400/20"
                    style={{ top: `${i * 5}%` }}
                  />
                ))}
              </div>
            </div>

            {/* Controls */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-gray-900/50 border border-purple-500/30">
                <CardContent className="p-4">
                  <h3 className="text-lg font-bold text-purple-400 font-mono mb-3">
                    CONTROLS
                  </h3>
                  <div className="space-y-2 text-sm font-mono">
                    <div className="flex justify-between">
                      <span className="text-gray-300">MOVE:</span>
                      <span className="text-green-400">ARROW KEYS</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">FIRE:</span>
                      <span className="text-green-400">SPACE</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">PAUSE:</span>
                      <span className="text-green-400">P</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 border border-orange-500/30">
                <CardContent className="p-4">
                  <h3 className="text-lg font-bold text-orange-400 font-mono mb-3">
                    CHEATS
                  </h3>
                  <div className="space-y-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full border-orange-500/50 text-orange-300 bg-orange-500/10 font-mono"
                    >
                      INFINITE LIVES
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full border-orange-500/50 text-orange-300 bg-orange-500/10 font-mono"
                    >
                      MAX SCORE
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full border-orange-500/50 text-orange-300 bg-orange-500/10 font-mono"
                    >
                      GOD MODE
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 border border-green-500/30">
                <CardContent className="p-4">
                  <h3 className="text-lg font-bold text-green-400 font-mono mb-3">
                    STATS
                  </h3>
                  <div className="space-y-2 text-sm font-mono">
                    <div className="flex justify-between">
                      <span className="text-gray-300">HIGH:</span>
                      <span className="text-green-400">999,999</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">LEVEL:</span>
                      <span className="text-green-400">1</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">LIVES:</span>
                      <span className="text-green-400">3</span>
                    </div>
                  </div>
                  <Badge className="w-full mt-3 bg-green-500/20 text-green-400 border-green-500/50 font-mono">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                    READY
                  </Badge>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Game;
