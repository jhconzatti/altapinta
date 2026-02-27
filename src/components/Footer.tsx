import { Code, MessageCircle, Phone as PhoneIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FooterProps {
  whatsappNumber: string;
}

export const Footer: React.FC<FooterProps> = ({ whatsappNumber }) => {
  return (
    <footer className="bg-secondary border-t border-border py-12">
      <div className="max-w-4xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <h3 className="font-heading text-2xl font-bold text-white mb-2 tracking-wider">
              ALTA PINTA
            </h3>
            <p className="text-light-gray text-sm">
              Sandwiches y Mas en Tartagal.
            </p>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="font-heading text-lg font-bold text-golden-yellow mb-4 tracking-wide">
              CONTACTO
            </h4>
            <div className="space-y-3 text-light-gray text-sm">
              <p>
                <span className="text-white font-semibold">Teléfono:</span> (387) 3873-558381
              </p>
              <p>
                <span className="text-white font-semibold">WhatsApp:</span> {whatsappNumber}
              </p>
              <p>
                <span className="text-white font-semibold">Dirección:</span> B 200 Viviendas Mza. A - Tartagal, Salta
              </p>
            </div>
          </div>

          {/* Direct Actions */}
          <div>
            <h4 className="font-heading text-lg font-bold text-golden-yellow mb-4 tracking-wide">
              CONTACTA AHORA
            </h4>
            <div className="space-y-3">
              <Button
                asChild
                className="w-full bg-vibrant-red hover:bg-vibrant-red/90 text-white font-heading tracking-wide shadow-red"
              >
                <a
                  href={`https://wa.me/${whatsappNumber.replace(/\D/g, "")}?text=Hola%2C%20quiero%20hacer%20un%20pedido`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-2 w-4 h-4" />
                  WhatsApp
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="w-full border-golden-yellow text-golden-yellow hover:bg-golden-yellow hover:text-secondary font-heading tracking-wide"
              >
                <a href={`tel:+${whatsappNumber.replace(/\D/g, "")}`}>
                  <PhoneIcon className="mr-2 w-4 h-4" />
                  Llamar
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Developer Credit */}
        <div className="pt-8 border-t border-border flex items-center justify-between">
          <p className="text-light-gray text-xs">
            © 2026 Alta Pinta Fast Food. Todos los derechos reservados.
          </p>
          <a 
              href="https://julianoconzatti.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xs flex items-center gap-2 hover:text-golden-yellow transition-colors duration-300 group"
            >
              <Code size={14} className="group-hover:rotate-12 transition-transform" />
              <span>Desarrollado por <span className="font-semibold text-white group-hover:text-golden-yellow transition-colors">Juliano Conzatti</span></span>
            </a>
        </div>
      </div>
    </footer>
  );
};
