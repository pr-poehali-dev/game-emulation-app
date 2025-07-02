import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Multiplayer = () => {
  const navigate = useNavigate();

  const rooms = [
    {
      id: 1,
      name: "RETRO LEGENDS",
      game: "PAC-MAN",
      players: "3/4",
      ping: 12,
      status: "open",
    },
    {
      id: 2,
      name: "SPACE WARRIORS",
      game: "SPACE INVADERS",
      players: "2/2",
      ping: 24,
      status: "full",
    },
    {
      id: 3,
      name: "FIGHT CLUB",
      game: "STREET FIGHTER",
      players: "1/2",
      ping: 8,
      status: "open",
    },
    {
      id: 4,
      name: "PUZZLE MASTERS",
      game: "TETRIS",
      players: "2/4",
      ping: 16,
      status: "open",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-purple-900 to-gray-900">
      {/* Header */}
      <div className="bg-gray-900 border-b-4 border-orange-500 p-6">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button
              variant="outline"
              onClick={() => navigate("/")}
              className="border-purple-500 text-purple-300 bg-purple-500/10 font-mono"
            >
              <Icon name="ArrowLeft" size={16} className="mr-2" />
              BACK
            </Button>
            <div>
              <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400 font-mono">
                MULTIPLAYER LOBBY
              </h1>
              <p className="text-orange-300 font-mono text-sm">
                FIND PLAYERS • CREATE ROOMS
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Badge
              variant="outline"
              className="border-green-400 text-green-400 bg-green-400/10 font-mono"
            >
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
              127 ONLINE
            </Badge>
            <Button className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500 font-mono">
              <Icon name="Plus" size={16} className="mr-2" />
              CREATE ROOM
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto p-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Room List */}
          <div className="lg:col-span-2">
            <Card className="bg-gray-800/80 border-2 border-orange-500/50">
              <CardContent className="p-6">
                <h2 className="text-xl font-bold text-orange-400 font-mono mb-4">
                  ACTIVE ROOMS
                </h2>
                <div className="space-y-3">
                  {rooms.map((room) => (
                    <Card
                      key={room.id}
                      className="bg-gray-900/50 border border-purple-500/30 hover:border-orange-500/50 transition-colors cursor-pointer"
                    >
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                              <Icon
                                name="Users"
                                size={20}
                                className="text-white"
                              />
                            </div>
                            <div>
                              <h3 className="font-bold text-white font-mono">
                                {room.name}
                              </h3>
                              <p className="text-orange-300 font-mono text-sm">
                                {room.game}
                              </p>
                            </div>
                          </div>

                          <div className="flex items-center space-x-4">
                            <div className="text-right">
                              <div className="text-sm text-gray-300 font-mono">
                                {room.players}
                              </div>
                              <div className="text-xs text-green-400 font-mono">
                                {room.ping}ms
                              </div>
                            </div>

                            <Badge
                              variant="outline"
                              className={`
                                ${room.status === "open" ? "border-green-400 text-green-400 bg-green-400/10" : "border-red-400 text-red-400 bg-red-400/10"}
                                font-mono
                              `}
                            >
                              {room.status.toUpperCase()}
                            </Badge>

                            <Button
                              size="sm"
                              disabled={room.status === "full"}
                              className="bg-orange-600 hover:bg-orange-500 font-mono"
                            >
                              JOIN
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Player Stats */}
            <Card className="bg-gray-800/80 border-2 border-purple-500/50">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-purple-400 font-mono mb-4">
                  YOUR STATS
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-300 font-mono">RANK:</span>
                    <span className="text-orange-400 font-mono font-bold">
                      LEGEND
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300 font-mono">WINS:</span>
                    <span className="text-green-400 font-mono">247</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300 font-mono">LOSSES:</span>
                    <span className="text-red-400 font-mono">63</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300 font-mono">W/L RATIO:</span>
                    <span className="text-purple-400 font-mono">3.92</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Match */}
            <Card className="bg-gray-800/80 border-2 border-green-500/50">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-green-400 font-mono mb-4">
                  QUICK MATCH
                </h3>
                <div className="space-y-3">
                  <Button className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 font-mono">
                    <Icon name="Zap" size={16} className="mr-2" />
                    FIND MATCH
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full border-green-500 text-green-300 bg-green-500/10 font-mono"
                  >
                    <Icon name="Users" size={16} className="mr-2" />
                    INVITE FRIENDS
                  </Button>
                </div>

                <div className="mt-4 p-3 bg-gray-900/50 rounded border border-green-500/30">
                  <p className="text-xs text-green-300 font-mono text-center">
                    Average wait time: 30s
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Recent Players */}
            <Card className="bg-gray-800/80 border-2 border-blue-500/50">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-blue-400 font-mono mb-4">
                  RECENT PLAYERS
                </h3>
                <div className="space-y-2">
                  {["PIXEL_MASTER", "RETRO_KING", "ARCADE_PRO"].map(
                    (player) => (
                      <div
                        key={player}
                        className="flex items-center justify-between p-2 bg-gray-900/50 rounded"
                      >
                        <span className="text-blue-300 font-mono text-sm">
                          {player}
                        </span>
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-blue-500/50 text-blue-300 font-mono text-xs"
                        >
                          INVITE
                        </Button>
                      </div>
                    ),
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Multiplayer;
