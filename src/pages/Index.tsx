import RetroHeader from "@/components/RetroHeader";
import GameLibrary from "@/components/GameLibrary";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-purple-900 to-gray-900">
      <RetroHeader />
      <GameLibrary />
    </div>
  );
};

export default Index;
