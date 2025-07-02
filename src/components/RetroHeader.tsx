import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const RetroHeader = () => {
  return (
    <div className="relative bg-gray-900 border-b-4 border-purple-500 shadow-2xl overflow-hidden">
      {/* CRT Scanlines Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent animate-pulse"></div>

      <div className="container mx-auto px-6 py-8">
        <div className="flex items-center justify-between">
          {/* Logo and Title */}
          <div className="flex items-center space-x-4">
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center border-2 border-green-400 shadow-lg shadow-green-400/50">
                <Icon name="Gamepad2" size={32} className="text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full animate-ping"></div>
            </div>
            <div>
              <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-purple-400 to-orange-400 font-mono tracking-wider">
                RETRO ARCADE
              </h1>
              <p className="text-purple-300 text-sm font-mono">
                MULTIPLAYER • CHEATS • CLASSICS
              </p>
            </div>
          </div>

          {/* Status and Controls */}
          <div className="flex items-center space-x-4">
            <Badge
              variant="outline"
              className="border-green-400 text-green-400 bg-green-400/10 font-mono"
            >
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
              ONLINE
            </Badge>

            <Button
              variant="outline"
              className="border-purple-500 text-purple-300 bg-purple-500/10 hover:bg-purple-500/20 font-mono"
            >
              <Icon name="Users" size={16} className="mr-2" />
              MULTIPLAYER
            </Button>

            <Button
              variant="outline"
              className="border-orange-500 text-orange-300 bg-orange-500/10 hover:bg-orange-500/20 font-mono"
            >
              <Icon name="Zap" size={16} className="mr-2" />
              CHEATS
            </Button>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="mt-6 flex items-center justify-center space-x-8 py-4 bg-gray-800/50 rounded-lg border border-purple-500/30">
          <div className="text-center">
            <div className="text-2xl font-bold text-green-400 font-mono">
              127
            </div>
            <div className="text-xs text-purple-300 font-mono">GAMES</div>
          </div>
          <div className="w-px h-8 bg-purple-500/50"></div>
          <div className="text-center">
            <div className="text-2xl font-bold text-orange-400 font-mono">
              8
            </div>
            <div className="text-xs text-purple-300 font-mono">PLAYERS</div>
          </div>
          <div className="w-px h-8 bg-purple-500/50"></div>
          <div className="text-center">
            <div className="text-2xl font-bold text-pink-400 font-mono">42</div>
            <div className="text-xs text-purple-300 font-mono">HIGH SCORE</div>
          </div>
        </div>
      </div>

      {/* Glowing bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-400 via-purple-500 to-orange-400 animate-pulse"></div>
    </div>
  );
};

export default RetroHeader;
