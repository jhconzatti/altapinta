import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Flame, ShoppingCart, Plus, Minus, Phone, MapPin, X, Code, MessageCircle } from "lucide-react";
import heroBurger from "@/assets/hero-burger.jpg";
import patySimple from "@/assets/paty-simple.jpeg";
import patyDoble from "@/assets/paty-doble.jpeg";
import cocaCola from "@/assets/coca-cola.png";
import cocoImg from "@/assets/coco.png";
import limonada from "@/assets/limonada-con-menta-y-gengibre.png";
import maracuya from "@/assets/maracuya.png";
import guacamole from "@/assets/guacamole.jpeg";
import choclo from "@/assets/choclo.jpeg";
import criolla from "@/assets/criolla.jpeg";
import mayonesaApio from "@/assets/mayonesa-de-apio.jpeg";
import cheddar from "@/assets/cheddar.jpeg";
import sandwichMila from "@/assets/sándwich-de-mila.jpeg";
import hamburger from "@/assets/burger-classic.jpg";
import papas from "@/assets/papas.jpeg";
import papasAborizadas from "@/assets/papas-saborizadas.jpeg";
import napo from "@/assets/napo.jpeg";
import milaAlPlato from "@/assets/mila-al-plato-3-personas.jpeg";

interface MenuItem {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  category: "sandwiches" | "bebidas" | "salsas" | "acompanhamientos" | "platos";
}

interface CartItem extends MenuItem {
  quantity: number;
}

const Index = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  
  const whatsappNumber = "+543873558381";

  const menuItems: MenuItem[] = [
    {
      id: 1,
      name: "PATY SIMPLE",
      price: 6000,
      description: "Huevo, Jamón, Queso, Lechuga, Tomate",
      image: patySimple,
      category: "sandwiches",
    },
    {
      id: 2,
      name: "PATY DOBLE",
      price: 8000,
      description: "Doble huevo, Doble jamón, Doble queso, Lechuga, Tomate",
      image: patyDoble,
      category: "sandwiches",
    },
    {
      id: 3,
      name: "COCA-COLA",
      price: 2500,
      description: "Bebida refrescante",
      image: cocaCola,
      category: "bebidas",
    },
    {
      id: 4,
      name: "LIMONADA MENTA Y JENGIBRE",
      price: 1600,
      description: "Bebida natural refrescante",
      image: limonada,
      category: "bebidas",
    },
    {
      id: 5,
      name: "MARACUYÁ",
      price: 600,
      description: "Bebida tropical",
      image: maracuya,
      category: "bebidas",
    },
    {
      id: 6,
      name: "COCO",
      price: 600,
      description: "Bebida tropical",
      image: cocoImg,
      category: "bebidas",
    },
    {
      id: 7,
      name: "GUACAMOLE",
      price: 1500,
      description: "Salsa premium",
      image: guacamole,
      category: "salsas",
    },
    {
      id: 8,
      name: "CHOCLO",
      price: 1200,
      description: "Salsa tradicional",
      image: choclo,
      category: "salsas",
    },
    {
      id: 9,
      name: "CRIOLLA",
      price: 1200,
      description: "Salsa casera",
      image: criolla,
      category: "salsas",
    },
    {
      id: 10,
      name: "MAYONESA DE APÍO",
      price: 1200,
      description: "Salsa especial",
      image: mayonesaApio,
      category: "salsas",
    },
    {
      id: 11,
      name: "SÁNDWICH DE MILA",
      price: 7500,
      description: "Mila jugosa con ingredientes frescos",
      image: sandwichMila,
      category: "sandwiches",
    },
    {
      id: 12,
      name: "HAMBÚRGUER",
      price: 6000,
      description: "Hamburguesa clásica de carne",
      image: hamburger,
      category: "sandwiches",
    },
    {
      id: 13,
      name: "NAPO",
      price: 8500,
      description: "Sándwich napolitano con jamón y queso",
      image: napo,
      category: "sandwiches",
    },
    {
      id: 14,
      name: "PAPAS",
      price: 1000,
      description: "Porción de papas fritas",
      image: papas,
      category: "acompanhamientos",
    },
    {
      id: 15,
      name: "PAPAS SABORIZADAS",
      price: 1500,
      description: "Papas fritas condimentadas",
      image: papasAborizadas,
      category: "acompanhamientos",
    },
    {
      id: 16,
      name: "CHEDDAR",
      price: 500,
      description: "Queso fundido de cheddar",
      image: cheddar,
      category: "salsas",
    },
    {
      id: 18,
      name: "MILA AL PLATO PARA 3 PERSONAS",
      price: 15000,
      description: "Mila generosa para compartir",
      image: milaAlPlato,
      category: "platos",
    },
  ];

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

  const sandwiches = menuItems.filter((item) => item.category === "sandwiches");
  const bebidas = menuItems.filter((item) => item.category === "bebidas");
  const salsas = menuItems.filter((item) => item.category === "salsas");
  const acompanhamientos = menuItems.filter((item) => item.category === "acompanhamientos");
  const platos = menuItems.filter((item) => item.category === "platos");

  return (
    <div className="min-h-screen bg-deep-black text-foreground">
      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroBurger})`,
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
              onClick={() => document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" })}
            >
              PEDIR AHORA
            </Button>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-32 bg-deep-black" aria-label="Menú de productos">
        <div className="container mx-auto px-4">
          {/* Sandwiches */}
          <div className="mb-24">
            <div className="flex items-center justify-center mb-8">
              <div className="h-1 w-16 bg-vibrant-red mr-4"></div>
              <h2 className="font-heading text-5xl md:text-6xl font-bold text-white tracking-wider">
                SANDWICHES
              </h2>
              <div className="h-1 w-16 bg-vibrant-red ml-4"></div>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 mx-auto px-4 sm:px-6">
              {sandwiches.map((item) => (
                <Card
                  key={item.id}
                  className="overflow-hidden bg-card border-2 border-border hover:border-vibrant-red transition-all duration-300 h-full flex flex-col"
                >
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
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
                      {item.category === "acompanhamientos" ? (
                        <span className="font-heading text-3xl font-bold text-golden-yellow">
                          INCLUIDO
                        </span>
                      ) : (
                        <span className="font-heading text-3xl font-bold text-golden-yellow">{"$" + item.price}</span>
                      )}
                      <Button
                        className="bg-vibrant-red hover:bg-vibrant-red/90 text-white font-heading tracking-wide focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-golden-yellow"
                        onClick={() => addToCart(item)}
                      >
                        AGREGAR
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Bebidas */}
          <div className="mb-24">
            <div className="flex items-center justify-center mb-8">
              <div className="h-1 w-16 bg-vibrant-red mr-4"></div>
              <h2 className="font-heading text-5xl md:text-6xl font-bold text-white tracking-wider">
                BEBIDAS
              </h2>
              <div className="h-1 w-16 bg-vibrant-red ml-4"></div>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mx-auto px-4 sm:px-6">
              {bebidas.map((item) => (
                <Card
                  key={item.id}
                  className="overflow-hidden bg-card border-2 border-border hover:border-vibrant-red transition-all duration-300 h-full flex flex-col"
                >
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
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
                      {item.category === "acompanhamientos" ? (
                        <span className="font-heading text-3xl font-bold text-golden-yellow">
                          INCLUIDO
                        </span>
                      ) : (
                        <span className="font-heading text-3xl font-bold text-golden-yellow">{"$" + item.price}</span>
                      )}
                      <Button
                        className="bg-vibrant-red hover:bg-vibrant-red/90 text-white font-heading tracking-wide focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-golden-yellow"
                        onClick={() => addToCart(item)}
                      >
                        AGREGAR
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Salsas */}
          <div className="mb-24">
            <div className="flex items-center justify-center mb-8">
              <div className="h-1 w-16 bg-vibrant-red mr-4"></div>
              <h2 className="font-heading text-5xl md:text-6xl font-bold text-white tracking-wider">
                SALSAS
              </h2>
              <div className="h-1 w-16 bg-vibrant-red ml-4"></div>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mx-auto px-4 sm:px-6">
              {salsas.map((item) => (
                <Card
                  key={item.id}
                  className="overflow-hidden bg-card border-2 border-border hover:border-vibrant-red transition-all duration-300 h-full flex flex-col"
                >
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
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
                      {item.category === "acompanhamientos" ? (
                        <span className="font-heading text-3xl font-bold text-golden-yellow">
                          INCLUIDO
                        </span>
                      ) : (
                        <span className="font-heading text-3xl font-bold text-golden-yellow">{"$" + item.price}</span>
                      )}
                      <Button
                        className="bg-vibrant-red hover:bg-vibrant-red/90 text-white font-heading tracking-wide focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-golden-yellow"
                        onClick={() => addToCart(item)}
                      >
                        AGREGAR
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Acompañamientos */}
          <div className="mb-24">
            <div className="flex items-center justify-center mb-8">
              <div className="h-1 w-16 bg-vibrant-red mr-4"></div>
              <h2 className="font-heading text-5xl md:text-6xl font-bold text-white tracking-wider">
                ACOMPAÑAMIENTOS
              </h2>
              <div className="h-1 w-16 bg-vibrant-red ml-4"></div>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mx-auto px-4 sm:px-6">
              {acompanhamientos.map((item) => (
                <Card
                  key={item.id}
                  className="overflow-hidden bg-card border-2 border-border hover:border-vibrant-red transition-all duration-300 h-full flex flex-col"
                >
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
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
                      {item.category === "acompanhamientos" ? (
                        <span className="font-heading text-3xl font-bold text-golden-yellow">
                          INCLUIDO
                        </span>
                      ) : (
                        <span className="font-heading text-3xl font-bold text-golden-yellow">{"$" + item.price}</span>
                      )}
                      <Button
                        className="bg-vibrant-red hover:bg-vibrant-red/90 text-white font-heading tracking-wide focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-golden-yellow"
                        onClick={() => addToCart(item)}
                      >
                        AGREGAR
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Platos */}
          <div>
            <div className="flex items-center justify-center mb-8">
              <div className="h-1 w-16 bg-vibrant-red mr-4"></div>
              <h2 className="font-heading text-5xl md:text-6xl font-bold text-white tracking-wider">
                PLATOS ESPECIALES
              </h2>
              <div className="h-1 w-16 bg-vibrant-red ml-4"></div>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 mx-auto px-4 sm:px-6">
              {platos.map((item) => (
                <Card
                  key={item.id}
                  className="overflow-hidden bg-card border-2 border-border hover:border-vibrant-red transition-all duration-300 h-full flex flex-col"
                >
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
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
                      {item.category === "acompanhamientos" ? (
                        <span className="font-heading text-3xl font-bold text-golden-yellow">
                          INCLUIDO
                        </span>
                      ) : (
                        <span className="font-heading text-3xl font-bold text-golden-yellow">{"$" + item.price}</span>
                      )}
                      <Button
                        className="bg-vibrant-red hover:bg-vibrant-red/90 text-white font-heading tracking-wide"
                        onClick={() => addToCart(item)}
                      >
                        AGREGAR
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-charcoal text-white py-12 border-t-2 border-vibrant-red">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start mb-4">
                <Flame className="w-10 h-10 text-vibrant-red mr-2" />
                <h3 className="font-heading text-3xl font-bold text-white tracking-wider">
                  ALTA PINTA
                </h3>
              </div>
              <p className="text-light-gray">
                Sandwiches y Mas en Tartagal
              </p>
            </div>
            <div className="text-center">
              <h4 className="font-heading text-xl font-bold mb-4 tracking-wide">
                CONTACTO
              </h4>
              <div className="space-y-2 text-light-gray">
                <div className="flex items-center justify-center gap-2">
                  <MapPin className="w-5 h-5 text-vibrant-red" />
                  <span>B 200 Viviendas Mza. A - Tartagal, Salta</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Phone className="w-5 h-5 text-vibrant-red" />
                  <span>(387) 3873-558381</span>
                </div>
              </div>
            </div>
            <div className="text-center md:text-right">
              <h4 className="font-heading text-xl font-bold mb-4 tracking-wide">
                CONTACTO DIRECTO
              </h4>
              <div className="flex gap-4 justify-center md:justify-end">
                <a
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-lg bg-vibrant-red/20 flex items-center justify-center hover:bg-vibrant-red transition-colors border border-vibrant-red"
                  title="WhatsApp"
                >
                  <MessageCircle className="w-6 h-6" />
                </a>
                <a
                  href={`tel:${whatsappNumber}`}
                  className="w-12 h-12 rounded-lg bg-vibrant-red/20 flex items-center justify-center hover:bg-vibrant-red transition-colors border border-vibrant-red"
                  title="Llamar"
                >
                  <Phone className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-neutral-400">
            <p>&copy; 2025 Alta Pinta Fast Food. Todos los derechos reservados.</p>
            
            <a 
              href="https://julianoconzatti.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-[#E65100] transition-colors duration-300 group"
            >
              <Code size={16} className="group-hover:rotate-12 transition-transform" />
              <span>Desarrollado por <span className="font-semibold text-white group-hover:text-[#E65100] transition-colors">Juliano Conzatti</span></span>
            </a>
          </div>
        </div>
      </footer>

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

      {/* Cart Sidebar */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 flex items-end md:items-center justify-end">
          <div
            className="absolute inset-0 bg-black/70"
            onClick={() => setIsCartOpen(false)}
          ></div>
          <div className="relative bg-card border-2 border-vibrant-red w-full md:w-96 h-[80vh] md:h-auto md:max-h-[90vh] md:m-4 flex flex-col rounded-t-2xl md:rounded-lg shadow-red">
            <div className="flex items-center justify-between p-6 border-b border-border">
              <h2 className="font-heading text-3xl font-bold text-white tracking-wider">
                TU PEDIDO
              </h2>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsCartOpen(false)}
                className="text-white hover:text-vibrant-red"
              >
                <X className="w-6 h-6" />
              </Button>
            </div>
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
                        onClick={() => removeFromCart(item.id)}
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
                        onClick={() => addToCart(item)}
                      >
                        <Plus className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ))
              )}
            </div>
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
                  onClick={handleWhatsAppCheckout}
                >
                  <Phone className="mr-2 w-5 h-5" />
                  PEDIR POR WHATSAPP
                </Button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
