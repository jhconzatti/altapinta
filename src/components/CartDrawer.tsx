import { Button } from "@/components/ui/button";
import { X, Minus, Plus, Phone } from "lucide-react";
import { CartItem, MenuItem } from "@/types/menu";

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onRemoveFromCart: (id: number) => void;
  onAddToCart: (item: MenuItem) => void;
  getTotalPrice: () => number;
  onCheckout: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cart,
  onRemoveFromCart,
  onAddToCart,
  getTotalPrice,
  onCheckout,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end md:items-center justify-end">
      <div
        className="absolute inset-0 bg-black/70"
        onClick={onClose}
      ></div>
      <div className="relative bg-card border-2 border-vibrant-red w-full md:w-96 h-[80vh] md:h-auto md:max-h-[90vh] md:m-4 flex flex-col rounded-t-2xl md:rounded-lg shadow-red">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h2 className="font-heading text-3xl font-bold text-white tracking-wider">
            TU PEDIDO
          </h2>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="text-white hover:text-vibrant-red"
          >
            <X className="w-6 h-6" />
          </Button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {cart.length === 0 ? (
            <p className="text-light-gray text-center py-8">
              Tu carrito está vacío
            </p>
          ) : (
            cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-4 bg-secondary p-4 rounded-lg border border-border"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded"
                />
                <div className="flex-1">
                  <h3 className="font-heading text-lg font-bold text-white">
                    {item.name}
                  </h3>
                  <p className="font-heading text-xl text-golden-yellow">
                    ${item.price}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    size="icon"
                    variant="outline"
                    className="h-8 w-8 border-vibrant-red text-vibrant-red hover:bg-vibrant-red hover:text-white"
                    onClick={() => onRemoveFromCart(item.id)}
                  >
                    <Minus className="w-4 h-4" />
                  </Button>
                  <span className="font-heading text-xl text-white w-8 text-center">
                    {item.quantity}
                  </span>
                  <Button
                    size="icon"
                    variant="outline"
                    className="h-8 w-8 border-vibrant-red text-vibrant-red hover:bg-vibrant-red hover:text-white"
                    onClick={() => onAddToCart(item)}
                  >
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {cart.length > 0 && (
          <div className="p-6 border-t border-border space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-heading text-2xl text-white tracking-wide">
                TOTAL:
              </span>
              <span className="font-heading text-4xl font-bold text-golden-yellow">
                ${getTotalPrice()}
              </span>
            </div>
            <Button
              size="lg"
              className="w-full bg-vibrant-red hover:bg-vibrant-red/90 text-white font-heading text-xl tracking-wider shadow-red"
              onClick={onCheckout}
            >
              <Phone className="mr-2 w-5 h-5" />
              PEDIR POR WHATSAPP
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};
