import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Flame } from "lucide-react";
import { heroBurgerImage } from "@/data/menuItems";

interface HeroProps {
  onMenuClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onMenuClick }) => {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url(${heroBurgerImage})`,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black/90"></div>
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="flex items-center justify-center mb-6">
          <Flame className="w-16 h-16 text-vibrant-red animate-pulse" />
        </div>
        <h1 className="font-heading text-4xl sm:text-5xl md:text-8xl font-bold text-white mb-4 tracking-wider">
          ALTA PINTA
          <br />
          FAST FOOD
        </h1>
        <p className="text-xl md:text-2xl text-light-gray mb-6">
          Sandwiches y Mas en Tartagal
        </p>
        <Badge className="bg-vibrant-red text-white text-lg px-6 py-3 mb-8 border-2 border-vibrant-red">
          TODOS LOS SÁNDWICHES INCLUYEN PAPAS
        </Badge>
        <div>
          <Button
            size="lg"
            className="bg-vibrant-red hover:bg-vibrant-red/90 text-white text-xl px-12 py-7 font-heading tracking-wider shadow-red"
            onClick={onMenuClick}
          >
            PEDIR AHORA
          </Button>
        </div>
      </div>
    </section>
  );
};
