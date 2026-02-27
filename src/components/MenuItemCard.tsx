import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MenuItem } from "@/types/menu";

interface MenuItemCardProps {
  item: MenuItem;
  onAddToCart: (item: MenuItem) => void;
}

export const MenuItemCard: React.FC<MenuItemCardProps> = ({
  item,
  onAddToCart,
}) => {
  const showPrice = item.category !== "salsas";
  const displayPrice = item.category === "salsas" ? "INCLUIDO" : `$${item.price}`;

  return (
    <Card className="overflow-hidden bg-card border-2 border-border hover:border-vibrant-red transition-all duration-300 h-full flex flex-col">
      <div className="aspect-square overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
      </div>
      <div className="p-5 flex-1 flex flex-col">
        <h3 className="font-heading text-2xl font-bold mb-2 text-white tracking-wide">
          {item.name}
        </h3>
        <p className="text-light-gray text-sm mb-4 line-clamp-2">
          {item.description}
        </p>
        <div className="flex items-center justify-between mt-auto">
          <span className="font-heading text-3xl font-bold text-golden-yellow">
            {displayPrice}
          </span>
          <Button
            className="bg-vibrant-red hover:bg-vibrant-red/90 text-white font-heading tracking-wide focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-golden-yellow"
            onClick={() => onAddToCart(item)}
          >
            AGREGAR
          </Button>
        </div>
      </div>
    </Card>
  );
};
