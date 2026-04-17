import { Link } from "react-router-dom";

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

        <p className="text-sm text-muted-foreground/80 tracking-widest -mt-2">
          Alto Feliz - Serra Gaúcha - Rio grande do sul - Brasil
        </p>
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
