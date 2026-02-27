import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { MenuItem, CartItem } from "@/types/menu";
import { menuItems } from "@/data/menuItems";
import { Hero } from "@/components/Hero";
import { MenuSection } from "@/components/MenuSection";
import { CartDrawer } from "@/components/CartDrawer";
import { Footer } from "@/components/Footer";

const Index = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const whatsappNumber = "+543873558381";

  const addToCart = (item: MenuItem) => {
    const priceToUse = item.category === "acompanhamientos" ? 0 : item.price;
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      return [...prevCart, { ...item, price: priceToUse, quantity: 1 }];
    });
  };

  const removeFromCart = (id: number) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === id);
      if (existingItem && existingItem.quantity > 1) {
        return prevCart.map((cartItem) =>
          cartItem.id === id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        );
      }
      return prevCart.filter((cartItem) => cartItem.id !== id);
    });
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const handleWhatsAppCheckout = () => {
    if (cart.length === 0) return;
    
    const itemsList = cart
      .map((item) => `${item.quantity}x ${item.name} ($${item.price})`)
      .join(", ");
    const total = getTotalPrice();
    const message = `Hola Alta Pinta, quiero pedir: ${itemsList}. Total: $${total}. Mi dirección es: `;
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, "_blank");
  };

  return (
    <div className="min-h-screen bg-deep-black text-foreground">
      <Hero onMenuClick={() => document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" })} />

      {/* Menu Section */}
      <section id="menu" className="py-32 bg-deep-black" aria-label="Menú de productos">
        <div className="container mx-auto px-4">
          <MenuSection
            title="SANDWICHES"
            items={menuItems.filter((item) => item.category === "sandwiches")}
            onAddToCart={addToCart}
          />
          <MenuSection
            title="BEBIDAS"
            items={menuItems.filter((item) => item.category === "bebidas")}
            onAddToCart={addToCart}
          />
          <MenuSection
            title="SALSAS"
            items={menuItems.filter((item) => item.category === "salsas")}
            onAddToCart={addToCart}
          />
          <MenuSection
            title="ACOMPAÑAMIENTOS"
            items={menuItems.filter((item) => item.category === "acompanhamientos")}
            onAddToCart={addToCart}
          />
          <MenuSection
            title="PLATOS"
            items={menuItems.filter((item) => item.category === "platos")}
            onAddToCart={addToCart}
            isLastSection={true}
          />
        </div>
      </section>

      <Footer whatsappNumber={whatsappNumber} />

      {/* Floating Cart Button */}
      {getTotalItems() > 0 && (
        <div className="fixed bottom-6 right-6 z-50">
          <Button
            size="lg"
            className="bg-vibrant-red hover:bg-vibrant-red/90 text-white rounded-full shadow-red w-16 h-16 relative"
            onClick={() => setIsCartOpen(true)}
          >
            <ShoppingCart className="w-6 h-6" />
            <span className="absolute -top-2 -right-2 bg-golden-yellow text-black font-bold rounded-full w-7 h-7 flex items-center justify-center text-sm">
              {getTotalItems()}
            </span>
          </Button>
        </div>
      )}

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onRemoveFromCart={removeFromCart}
        onAddToCart={addToCart}
        getTotalPrice={getTotalPrice}
        onCheckout={handleWhatsAppCheckout}
      />
    </div>
  );
};

export default Index;
