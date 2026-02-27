import { MenuItem } from "@/types/menu";
import { MenuItemCard } from "./MenuItemCard";

interface MenuSectionProps {
  title: string;
  items: MenuItem[];
  onAddToCart: (item: MenuItem) => void;
  columns?: "2" | "3";
  isLastSection?: boolean;
}

export const MenuSection: React.FC<MenuSectionProps> = ({
  title,
  items,
  onAddToCart,
  columns = "3",
  isLastSection = false,
}) => {
  const gridClass =
    columns === "3"
      ? "lg:grid-cols-3"
      : columns === "2"
        ? "lg:grid-cols-3"
        : "lg:grid-cols-3";

  const marginClass = isLastSection ? "" : "mb-24";
  const gapClass = columns === "3" ? "gap-4 sm:gap-6" : "gap-6";

  return (
    <div className={marginClass}>
      <div className="flex items-center justify-center mb-8">
        <div className="h-1 w-16 bg-vibrant-red mr-4"></div>
        <h2 className="font-heading text-5xl md:text-6xl font-bold text-white tracking-wider">
          {title}
        </h2>
        <div className="h-1 w-16 bg-vibrant-red ml-4"></div>
      </div>
      <div className={`grid sm:grid-cols-2 ${gridClass} ${gapClass} max-w-4xl mx-auto px-4 sm:px-6`}>
        {items.map((item) => (
          <MenuItemCard
            key={item.id}
            item={item}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </div>
  );
};
