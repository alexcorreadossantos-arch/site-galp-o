import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-gold-muted py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center gap-6">
        <div className="flex flex-col gap-1 items-center">
          <p className="font-display text-lg font-bold text-foreground">
            Galpão 360 <span className="text-gold italic font-normal">Wood Studio</span>
          </p>
          <p className="text-xs text-muted-foreground tracking-wider">
            Madeira Natural · Resina Epóxi · Design Exclusivo
          </p>
        </div>

        <a
          href="https://www.google.com/maps/search/?api=1&query=Vrs+826+km14%2C+Alto+Feliz+RS+-+Rio+Grande+do+sul+-+Brasil"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-muted-foreground hover:text-gold transition-all duration-300 bg-background/20 px-4 py-2 rounded-full border border-gold/10 cursor-pointer hover:scale-105"
        >
          <MapPin size={14} className="text-gold" />
          <p className="text-xs tracking-wide">
            Vrs 826 km14, Alto Feliz RS - Rio Grande do sul - Brasil
          </p>
        </a>

        <p className="text-xs text-muted-foreground tracking-widest mt-2">
          © {new Date().getFullYear()} Galpão 360 Wood Studio · Todos os direitos reservados
        </p>
        <Link 
          to="/politica-de-privacidade" 
          className="text-[10px] text-muted-foreground/50 hover:text-gold transition-colors tracking-[0.2em] uppercase mt-2"
        >
          Políticas de Privacidade
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
