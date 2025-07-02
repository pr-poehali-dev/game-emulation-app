import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Icon from "@/components/ui/icon";

const Settings = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-purple-900 to-gray-900">
      {/* Header */}
      <div className="bg-gray-900 border-b-4 border-green-500 p-6">
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
              <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400 font-mono">
                SETTINGS
              </h1>
              <p className="text-green-300 font-mono text-sm">
                CONFIGURE YOUR EXPERIENCE
              </p>
            </div>
          </div>

          <Button className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 font-mono">
            <Icon name="Save" size={16} className="mr-2" />
            SAVE
          </Button>
        </div>
      </div>

      <div className="container mx-auto p-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Display Settings */}
          <Card className="bg-gray-800/80 border-2 border-green-500/50">
            <CardContent className="p-6">
              <h2 className="text-xl font-bold text-green-400 font-mono mb-6 flex items-center">
                <Icon name="Monitor" size={20} className="mr-2" />
                DISPLAY
              </h2>

              <div className="space-y-6">
                <div>
                  <label className="text-sm font-mono text-gray-300 mb-2 block">
                    RESOLUTION
                  </label>
                  <Select defaultValue="1920x1080">
                    <SelectTrigger className="bg-gray-900/50 border-green-500/30 text-green-300 font-mono">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-900 border-green-500/30">
                      <SelectItem
                        value="1920x1080"
                        className="text-green-300 font-mono"
                      >
                        1920x1080
                      </SelectItem>
                      <SelectItem
                        value="1680x1050"
                        className="text-green-300 font-mono"
                      >
                        1680x1050
                      </SelectItem>
                      <SelectItem
                        value="1440x900"
                        className="text-green-300 font-mono"
                      >
                        1440x900
                      </SelectItem>
                      <SelectItem
                        value="1280x720"
                        className="text-green-300 font-mono"
                      >
                        1280x720
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-mono text-gray-300 mb-2 block">
                    BRIGHTNESS
                  </label>
                  <Slider
                    defaultValue={[75]}
                    max={100}
                    step={1}
                    className="[&>.relative]:bg-gray-700 [&_[role=slider]]:bg-green-500 [&_[role=slider]]:border-green-400"
                  />
                  <div className="flex justify-between text-xs text-gray-400 font-mono mt-1">
                    <span>0%</span>
                    <span>75%</span>
                    <span>100%</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-mono text-gray-300">
                      FULLSCREEN
                    </p>
                    <p className="text-xs text-gray-500 font-mono">
                      Launch games in fullscreen mode
                    </p>
                  </div>
                  <Switch className="data-[state=checked]:bg-green-500" />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-mono text-gray-300">
                      CRT FILTER
                    </p>
                    <p className="text-xs text-gray-500 font-mono">
                      Authentic retro scanlines
                    </p>
                  </div>
                  <Switch
                    defaultChecked
                    className="data-[state=checked]:bg-green-500"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-mono text-gray-300">
                      PIXEL PERFECT
                    </p>
                    <p className="text-xs text-gray-500 font-mono">
                      Sharp pixel scaling
                    </p>
                  </div>
                  <Switch
                    defaultChecked
                    className="data-[state=checked]:bg-green-500"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Audio Settings */}
          <Card className="bg-gray-800/80 border-2 border-purple-500/50">
            <CardContent className="p-6">
              <h2 className="text-xl font-bold text-purple-400 font-mono mb-6 flex items-center">
                <Icon name="Volume2" size={20} className="mr-2" />
                AUDIO
              </h2>

              <div className="space-y-6">
                <div>
                  <label className="text-sm font-mono text-gray-300 mb-2 block">
                    MASTER VOLUME
                  </label>
                  <Slider
                    defaultValue={[80]}
                    max={100}
                    step={1}
                    className="[&>.relative]:bg-gray-700 [&_[role=slider]]:bg-purple-500 [&_[role=slider]]:border-purple-400"
                  />
                  <div className="flex justify-between text-xs text-gray-400 font-mono mt-1">
                    <span>0%</span>
                    <span>80%</span>
                    <span>100%</span>
                  </div>
                </div>

                <div>
                  <label className="text-sm font-mono text-gray-300 mb-2 block">
                    SFX VOLUME
                  </label>
                  <Slider
                    defaultValue={[70]}
                    max={100}
                    step={1}
                    className="[&>.relative]:bg-gray-700 [&_[role=slider]]:bg-purple-500 [&_[role=slider]]:border-purple-400"
                  />
                </div>

                <div>
                  <label className="text-sm font-mono text-gray-300 mb-2 block">
                    MUSIC VOLUME
                  </label>
                  <Slider
                    defaultValue={[60]}
                    max={100}
                    step={1}
                    className="[&>.relative]:bg-gray-700 [&_[role=slider]]:bg-purple-500 [&_[role=slider]]:border-purple-400"
                  />
                </div>

                <div>
                  <label className="text-sm font-mono text-gray-300 mb-2 block">
                    AUDIO DEVICE
                  </label>
                  <Select defaultValue="default">
                    <SelectTrigger className="bg-gray-900/50 border-purple-500/30 text-purple-300 font-mono">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-900 border-purple-500/30">
                      <SelectItem
                        value="default"
                        className="text-purple-300 font-mono"
                      >
                        Default Speakers
                      </SelectItem>
                      <SelectItem
                        value="headphones"
                        className="text-purple-300 font-mono"
                      >
                        Gaming Headset
                      </SelectItem>
                      <SelectItem
                        value="bluetooth"
                        className="text-purple-300 font-mono"
                      >
                        Bluetooth Audio
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-mono text-gray-300">MUTE ALL</p>
                    <p className="text-xs text-gray-500 font-mono">
                      Disable all audio
                    </p>
                  </div>
                  <Switch className="data-[state=checked]:bg-purple-500" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Controls Settings */}
          <Card className="bg-gray-800/80 border-2 border-orange-500/50">
            <CardContent className="p-6">
              <h2 className="text-xl font-bold text-orange-400 font-mono mb-6 flex items-center">
                <Icon name="Gamepad2" size={20} className="mr-2" />
                CONTROLS
              </h2>

              <div className="space-y-6">
                <div>
                  <label className="text-sm font-mono text-gray-300 mb-2 block">
                    INPUT DEVICE
                  </label>
                  <Select defaultValue="keyboard">
                    <SelectTrigger className="bg-gray-900/50 border-orange-500/30 text-orange-300 font-mono">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-900 border-orange-500/30">
                      <SelectItem
                        value="keyboard"
                        className="text-orange-300 font-mono"
                      >
                        Keyboard
                      </SelectItem>
                      <SelectItem
                        value="gamepad"
                        className="text-orange-300 font-mono"
                      >
                        USB Gamepad
                      </SelectItem>
                      <SelectItem
                        value="both"
                        className="text-orange-300 font-mono"
                      >
                        Keyboard + Gamepad
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-3">
                  <p className="text-sm font-mono text-gray-300">
                    KEY BINDINGS
                  </p>
                  <div className="grid grid-cols-2 gap-3 text-xs font-mono">
                    <div className="flex justify-between p-2 bg-gray-900/50 rounded">
                      <span className="text-gray-400">UP:</span>
                      <span className="text-orange-300">↑</span>
                    </div>
                    <div className="flex justify-between p-2 bg-gray-900/50 rounded">
                      <span className="text-gray-400">DOWN:</span>
                      <span className="text-orange-300">↓</span>
                    </div>
                    <div className="flex justify-between p-2 bg-gray-900/50 rounded">
                      <span className="text-gray-400">LEFT:</span>
                      <span className="text-orange-300">←</span>
                    </div>
                    <div className="flex justify-between p-2 bg-gray-900/50 rounded">
                      <span className="text-gray-400">RIGHT:</span>
                      <span className="text-orange-300">→</span>
                    </div>
                    <div className="flex justify-between p-2 bg-gray-900/50 rounded">
                      <span className="text-gray-400">ACTION:</span>
                      <span className="text-orange-300">SPACE</span>
                    </div>
                    <div className="flex justify-between p-2 bg-gray-900/50 rounded">
                      <span className="text-gray-400">PAUSE:</span>
                      <span className="text-orange-300">P</span>
                    </div>
                  </div>
                </div>

                <Button
                  variant="outline"
                  className="w-full border-orange-500/50 text-orange-300 bg-orange-500/10 font-mono"
                >
                  <Icon name="Settings" size={16} className="mr-2" />
                  CONFIGURE KEYS
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Advanced Settings */}
          <Card className="bg-gray-800/80 border-2 border-red-500/50">
            <CardContent className="p-6">
              <h2 className="text-xl font-bold text-red-400 font-mono mb-6 flex items-center">
                <Icon name="Cpu" size={20} className="mr-2" />
                ADVANCED
              </h2>

              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-mono text-gray-300">VSYNC</p>
                    <p className="text-xs text-gray-500 font-mono">
                      Prevent screen tearing
                    </p>
                  </div>
                  <Switch
                    defaultChecked
                    className="data-[state=checked]:bg-red-500"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-mono text-gray-300">
                      FRAME LIMITER
                    </p>
                    <p className="text-xs text-gray-500 font-mono">
                      Cap FPS to 60
                    </p>
                  </div>
                  <Switch
                    defaultChecked
                    className="data-[state=checked]:bg-red-500"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-mono text-gray-300">
                      FAST FORWARD
                    </p>
                    <p className="text-xs text-gray-500 font-mono">
                      Enable speed boost
                    </p>
                  </div>
                  <Switch className="data-[state=checked]:bg-red-500" />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-mono text-gray-300">AUTO SAVE</p>
                    <p className="text-xs text-gray-500 font-mono">
                      Save state automatically
                    </p>
                  </div>
                  <Switch
                    defaultChecked
                    className="data-[state=checked]:bg-red-500"
                  />
                </div>

                <div className="pt-4 border-t border-red-500/30">
                  <Button
                    variant="outline"
                    className="w-full border-red-500/50 text-red-300 bg-red-500/10 font-mono mb-3"
                  >
                    <Icon name="RotateCcw" size={16} className="mr-2" />
                    RESET TO DEFAULT
                  </Button>

                  <Button
                    variant="outline"
                    className="w-full border-red-500/50 text-red-300 bg-red-500/10 font-mono"
                  >
                    <Icon name="Download" size={16} className="mr-2" />
                    EXPORT SETTINGS
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Settings;
