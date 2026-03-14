import { RefObject } from "react";

interface FeaturedPieceProps {
  featuredRef: RefObject<HTMLDivElement>;
  riverTableImg: string;
  onZoom: (imgs: string[], index: number) => void;
}

const FeaturedPiece = ({ featuredRef, riverTableImg, onZoom }: FeaturedPieceProps) => {
  return (
    <section className="py-28 px-6 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div className="relative group" ref={featuredRef}>
          <div className="absolute -inset-1 bg-gradient-gold opacity-20 blur-xl group-hover:opacity-30 transition-opacity duration-500" />
          <div
            className="relative overflow-hidden border border-gold-muted aspect-video cursor-zoom-in"
            onClick={() => onZoom([riverTableImg], 0)}
          >
            <img
              src={riverTableImg}
              alt="Peça Destaque River Table"
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-gold animate-pulse" />
              <span className="text-xs text-gold tracking-widest uppercase">Peça Exclusiva</span>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="space-y-8">
          <div>
            <p className="text-xs tracking-[0.4em] text-gold uppercase mb-3">Destaque da Coleção</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight">
              Mesa River Table
              <span className="block italic font-normal text-gold text-3xl mt-1">cor Azul Centauro</span>
            </h2>
          </div>

          <div className="space-y-6 font-elegant text-lg text-foreground/80 leading-relaxed">
            <p>
              Imagine a força bruta da natureza capturada em um instante de pura eternidade. <strong>Este exemplar</strong> da nossa coleção, a River Table Azul Centauro, não é apenas um móvel; é uma união ousada entre o peso visual da madeira maciça e a modernidade vibrante do epóxi.
            </p>
            <p>
              Os veios naturais e as bordas trabalhadas e elegantes da madeira contam histórias de sobrevivência e tempo, valorizadas pelo acabamento sólido e pela profundidade da resina epóxi em sua tonalidade <span className="text-gold italic">Azul Centauro</span>.
            </p>
            <p>
              A exclusividade da nessa peça se eleva pela arte da finalização. Oferecemos <strong>diversos tipos de acabamentos premium</strong> para que a mesa harmonize perfeitamente com a sua essência:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
            {[
              { label: "Acabamento Alto Brilho", value: "Efeito vitrificado e reflexivo, puro luxo." },
              { label: "Acetinado Fosco", value: "Toque de seda, evidenciando a textura natural." },
              { label: "Design Personalizado", value: "Bordas, pés e layout 100% sob medida para você." },
            ].map((spec) => (
              <div key={spec.label} className="border border-[hsl(var(--border))] p-5 bg-card/50 hover:border-gold transition-colors duration-300">
                <p className="text-xs text-gold tracking-widest uppercase mb-2">{spec.label}</p>
                <p className="text-sm font-light text-foreground/80">{spec.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPiece;
