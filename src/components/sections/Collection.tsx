import ProductImageSlideshow from "../ProductImageSlideshow";
import relogioSlide1 from "@/assets/relogio-slide-new-1.jpg";
import relogioSlide2 from "@/assets/relogio-slide-new-2.jpg";
import relogioSlide3 from "@/assets/relogio-slide-new-3.jpg";
import relogioSlide4 from "@/assets/relogio-slide-new-4.jpg";
import mesaSlide1 from "@/assets/mesa-slide-1.jpg";
import mesaSlide2 from "@/assets/mesa-slide-2.jpg";
import mesaSlide3 from "@/assets/mesa-slide-3.jpg";
import mesaSlide4 from "@/assets/mesa-slide-4.jpg";
import tabua1 from "@/assets/tabua-slide-1.jpg";
import tabua2 from "@/assets/tabua-slide-2.jpg";
import tabua3 from "@/assets/tabua-slide-3.jpg";
import tabua4 from "@/assets/tabua-slide-4.jpg";
import tabua5 from "@/assets/tabua-slide-5.jpg";
import abridorSlide1 from "@/assets/abridor-slide-1.jpg";
import abridorSlide2 from "@/assets/abridor-slide-2.jpg";
import riverTableImg from "@/assets/river-table-blue-straight.png";

interface CollectionProps {
  onZoom: (imgs: string[], index: number) => void;
}

const Collection = ({ onZoom }: CollectionProps) => {
  const produtos = [
    {
      imgs: [mesaSlide1, mesaSlide2, mesaSlide3, mesaSlide4, riverTableImg],
      tag: "Destaque",
      title: "River Table",
      sub: "",
      desc: "Mesa jantar. Peça principal da coleção, totalmente exclusiva. Valoriza o ambiente.",
      badge: "Sob Medida",
    },
    {
      imgs: [relogioSlide1, relogioSlide2, relogioSlide3, relogioSlide4],
      tag: "Novo",
      title: "Relógio de Parede",
      sub: "",
      desc: "Um mundo de possibilidades em cores, texturas e 3 tamanhos disponíveis: 35cm, 45cm ou 55cm de diâmetro. Uma arte funcional na parede da sua casa.",
      badge: "Artesanal",
    },
    {
      imgs: [tabua1, tabua2, tabua3, tabua4, tabua5],
      tag: "Popular",
      title: "Tábua de Churrasco",
      sub: "",
      desc: "Tábua em madeira que pode ser personalizada em vários formatos. Perfeita para presentear.",
      badge: "Premium",
    },
    {
      imgs: [abridorSlide1, abridorSlide2],
      tag: "Exclusivo",
      title: "Abridor de garrafa magnético",
      sub: "",
      desc: "Abridor de garrafa rustico, com traços únicos, pode ser totalmente customizado. Excelente escolha para o cantinho do churrasco.",
      badge: "Único",
    },
  ];

  return (
    <section id="colecao" className="py-28 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <p className="text-xs tracking-[0.4em] text-gold uppercase mb-3">Feito à Mão, Peça por Peça</p>
        <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight">
          Nossa Coleção
          <span className="block italic font-normal text-gold text-3xl mt-1">Exclusiva</span>
        </h2>
        <p className="font-elegant text-lg text-foreground/60 mt-4 max-w-xl mx-auto">
          Cada peça é única — combinações que não se repetem
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {produtos.map((produto) => (
          <div key={produto.title} className="group relative overflow-hidden border border-gold-muted bg-card hover:border-gold transition-all duration-500 flex flex-col">
            {/* Image / Slideshow */}
            <div className="relative">
              <ProductImageSlideshow
                imgs={produto.imgs}
                title={produto.title}
                onZoom={onZoom}
              />

              {/* Tag Overlays */}
              <div className="absolute top-3 left-3 z-20">
                <span className="text-[10px] tracking-[0.25em] uppercase px-2 py-1 bg-[hsl(var(--gold)/0.15)] border border-gold-muted text-gold backdrop-blur-sm">
                  {produto.tag}
                </span>
              </div>
              <div className="absolute top-3 right-3 z-20">
                <span className="text-[10px] tracking-widest uppercase px-2 py-1 bg-background/80 text-muted-foreground border border-[hsl(var(--border))] backdrop-blur-sm">
                  {produto.badge}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col flex-grow">
              <div className="mb-3">
                {produto.sub && <p className="text-[10px] tracking-[0.35em] uppercase text-gold mb-1">{produto.sub}</p>}
                <h3 className="font-display text-xl font-semibold text-foreground">{produto.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground font-elegant leading-relaxed flex-grow">{produto.desc}</p>
              <div className="pt-6 mt-auto">
                <div className="w-full h-px bg-gradient-to-r from-gold-muted to-transparent mb-4" />
                <button
                  onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-full py-2.5 border border-gold-muted text-gold text-xs tracking-[0.2em] uppercase font-light hover:bg-[hsl(var(--gold)/0.08)] hover:border-gold transition-all duration-300"
                >
                  Solicitar Orçamento
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Collection;
