import heroVideo from "@/assets/hero-video-new.mp4";
import mesaSlide1 from "@/assets/mesa-slide-1.jpg";
import mesaSlide2 from "@/assets/mesa-slide-2.jpg";
import relogioSlide1 from "@/assets/relogio-slide-new-1.jpg";
import relogioSlide2 from "@/assets/relogio-slide-new-2.jpg";
import relogioSlide3 from "@/assets/relogio-slide-new-3.jpg";
import relogioSlide4 from "@/assets/relogio-slide-new-4.jpg";
import tabua1 from "@/assets/tabua-slide-1.jpg";
import tabua2 from "@/assets/tabua-slide-2.jpg";
import tabua3 from "@/assets/tabua-slide-3.jpg";
import tabua4 from "@/assets/tabua-slide-4.jpg";
import tabua5 from "@/assets/tabua-slide-5.jpg";
import abridorImg from "@/assets/abridor-magnetico-resina.jpg";
import riverTableImg from "@/assets/river-table-blue-straight.png";
import { useEffect, useRef, useState } from "react";
import { X, ZoomIn, ZoomOut } from "lucide-react";

const ProductImageSlideshow = ({ imgs, title, onZoom }: { imgs: string[], title: string, onZoom: (img: string) => void }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (imgs.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % imgs.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [imgs.length]);

  return (
    <div
      className="group relative w-full h-full overflow-hidden aspect-square cursor-zoom-in"
      onClick={() => onZoom(imgs[currentIndex])}
    >
      {imgs.map((img, index) => (
        <div
          key={img}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
        >
          <img
            src={img}
            alt={`${title} - view ${index + 1}`}
            className={`w-full h-full object-cover transition-transform duration-[6000ms] ease-out ${
              imgs.length > 1
                ? index === currentIndex ? "scale-110" : "scale-100"
                : "scale-100 group-hover:scale-110"
            }`}
          />
        </div>
      ))}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent pointer-events-none" />
      {/* Indicators */}
      {imgs.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
          {imgs.map((_, index) => (
            <div
              key={index}
              className={`h-1 transition-all duration-300 rounded-full ${index === currentIndex ? "w-4 bg-gold" : "w-1 bg-white/30"
                }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const Index = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isZoomed, setIsZoomed] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const featuredRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.addEventListener("canplay", () => setVideoLoaded(true));
    }

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getParallaxShift = () => {
    if (!featuredRef.current) return 0;
    const rect = featuredRef.current.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    // Calculate how far through the viewport the element is
    const elementCenter = rect.top + rect.height / 2;
    const viewportCenter = windowHeight / 2;
    const distanceFromCenter = elementCenter - viewportCenter;

    // Return a subtle translation value
    return distanceFromCenter * 0.1;
  };

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* ── HERO ── */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Video background */}
        <video
          ref={videoRef}
          src={heroVideo}
          autoPlay
          muted
          loop
          playsInline
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 scale-[1.12] origin-center ${videoLoaded ? "opacity-60" : "opacity-0"}`}
        />

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/30 to-background/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-background/60" />

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">


          <h1 className="font-display text-6xl md:text-8xl font-bold mb-4 leading-none tracking-tight">
            <span className="block text-foreground">Galpão 360</span>
            <span className="block text-gold italic font-normal text-5xl md:text-7xl mt-2">
              Wood Studio
            </span>
          </h1>

          <p className="font-elegant text-xl md:text-2xl font-light text-foreground/70 mt-6 mb-10 italic tracking-wide">
            A exclusividade da natureza refletindo a sua personalidade.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => document.getElementById('colecao')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-10 py-4 bg-gradient-gold text-primary-foreground font-semibold tracking-[0.15em] uppercase text-sm transition-all duration-300 hover:opacity-90 hover:scale-105 shadow-gold"
            >
              Ver Coleção
            </button>
            <button
              onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-10 py-4 border border-gold-muted text-gold font-light tracking-[0.15em] uppercase text-sm transition-all duration-300 hover:border-gold hover:bg-[hsl(var(--gold)/0.08)]"
            >
              Solicitar Orçamento
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <div className="w-px h-12 bg-gradient-to-b from-transparent to-[hsl(var(--gold)/0.5)]" />
          <div className="w-1.5 h-1.5 rounded-full bg-gold" />
        </div>
      </section>

      {/* ── INTRO STRIP ── */}
      <section className="py-6 border-y border-gold-muted overflow-hidden">
        <div className="w-full flex flex-wrap gap-8 md:gap-16 justify-center items-center px-4">
          {["Peças Exclusivas", "Madeira Natural", "Acabamento Artesanal"].map((item, i) => (
            <div key={i} className="flex items-center gap-8 md:gap-16">
              <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground whitespace-nowrap">
                {item}
              </span>
              {i < 2 && <span className="text-gold text-xs">✦</span>}
            </div>
          ))}
        </div>
      </section>

      {/* ── FEATURED PIECE ── */}
      <section className="py-28 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative group" ref={featuredRef}>
            <div className="absolute -inset-1 bg-gradient-gold opacity-20 blur-xl group-hover:opacity-30 transition-opacity duration-500" />
            <div
              className="relative overflow-hidden border border-gold-muted aspect-video cursor-zoom-in"
              onClick={() => setSelectedImage(riverTableImg)}
            >
              <img
                src={riverTableImg}
                alt="Peça Destaque River Table"
                className="w-full h-[120%] object-cover animate-ken-burns absolute -top-[10%]"
                style={{
                  transform: `translateY(${getParallaxShift()}px) scale(1.1)`
                }}
              />
              {/* Shimmer Effect for a "live" feel */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer" />
              </div>
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

            <p className="font-elegant text-lg text-foreground/70 leading-relaxed">
              Cada peça nasce da fusão entre a alma da madeira e a eternidade da resina epóxi.
              Os veios naturais contam histórias de décadas de crescimento, preservados para sempre
              sob camadas de resina cristalina de alta clareza.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Material", value: "Madeira Nobre + Resina Epóxi" },
                { label: "Acabamento", value: "Fosco / Acetinado" },
                { label: "Personalização", value: "100% sob medida" },
                { label: "Garantia", value: "Vitalícia" },
              ].map((spec) => (
                <div key={spec.label} className="border border-[hsl(var(--border))] p-4 bg-card">
                  <p className="text-xs text-muted-foreground tracking-widest uppercase mb-1">{spec.label}</p>
                  <p className="text-sm font-medium text-foreground/90">{spec.value}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ── COLEÇÃO ── */}
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
          {[
            {
              imgs: [riverTableImg, mesaSlide1, mesaSlide2],
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
              desc: "Um mundo de possibilidades em cores, texturas e 3 tamanhos disponíveis: 33, 43, 53cm de diâmetro. Uma arte funcional na parede da sua casa.",
              badge: "Personalizável",
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
              imgs: [abridorImg],
              tag: "Exclusivo",
              title: "Abridor Magnético",
              sub: "",
              desc: "Abridor de garrafa rustico, com traços únicos, pode ser totalmente customizado. Excelente escolha para o cantinho do churrasco.",
              badge: "Único",
            },
          ].map((produto) => (
            <div key={produto.title} className="group relative overflow-hidden border border-gold-muted bg-card hover:border-gold transition-all duration-500 flex flex-col">
              {/* Image / Slideshow */}
              <div className="relative">
                <ProductImageSlideshow
                  imgs={produto.imgs}
                  title={produto.title}
                  onZoom={(img) => { setSelectedImage(img); setIsZoomed(false); }}
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
                  <h3 className="font-display text-2xl font-semibold text-foreground">{produto.title}</h3>
                </div>
                <p className="text-base text-muted-foreground font-elegant leading-relaxed flex-grow">{produto.desc}</p>
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

      {/* ── PROCESS ── */}
      <section className="py-24 bg-card">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.4em] text-gold uppercase mb-3">Nossa Essência</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold">O Processo Artesanal</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Seleção da Madeira", desc: "Escolhemos troncos com veios únicos e história, respeitando cada característica natural." },
              { step: "02", title: "Preparação & Cura", desc: "Secagem controlada para garantir estabilidade estrutural e preservar a beleza da madeira." },
              { step: "03", title: "Aplicação da Resina", desc: "Resina epóxi de alta clareza aplicada em camadas, criando profundidade e luminosidade únicas." },
              { step: "04", title: "Polimento Premium", desc: "Acabamento artesanal que revela todos os detalhes, com proteção duradoura e toque de seda." },
            ].map((item) => (
              <div key={item.step} className="group relative">
                <div className="text-6xl font-display font-bold text-[hsl(var(--gold)/0.12)] mb-4 group-hover:text-[hsl(var(--gold)/0.2)] transition-colors duration-300">
                  {item.step}
                </div>
                <div className="w-8 h-px bg-gold mb-4" />
                <h3 className="font-display text-lg font-semibold mb-2 text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed font-elegant">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="py-24 border-y border-gold-muted">
        <div className="max-w-4xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: "+500", label: "Peças Entregues" },
            { value: "6", label: "Anos de Experiência" },
            { value: "100%", label: "Artesanal" },
            { value: "∞", label: "Exclusividade" },
          ].map((stat) => (
            <div key={stat.label} className="space-y-2">
              <p className="font-display text-4xl md:text-5xl font-bold text-gold">{stat.value}</p>
              <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section id="contato" className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--gold)/0.05)] via-[hsl(var(--gold)/0.02)] to-[hsl(var(--gold)/0.05)]" />
        <div className="relative max-w-3xl mx-auto text-center space-y-8">
          <p className="text-xs tracking-[0.4em] text-gold uppercase">Sua Peça Única Aguarda</p>
          <h2 className="font-display text-4xl md:text-6xl font-bold leading-tight">
            Transforme Madeira
            <span className="block italic font-normal text-gold mt-2">em Obra de Arte</span>
          </h2>
          <p className="font-elegant text-lg text-foreground/60 max-w-xl mx-auto">
            Entre em contato e inicie a criação da sua peça exclusiva.
            Cada projeto é único, como você.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <a href="https://wa.me/5554996043029" className="px-12 py-5 bg-gradient-gold text-primary-foreground font-semibold tracking-[0.2em] uppercase text-sm transition-all duration-300 hover:opacity-90 hover:scale-105 shadow-gold inline-block">
              WhatsApp Studio
            </a>
            <a href="mailto:contato@galpao360.com" className="px-12 py-5 border border-gold-muted text-gold font-light tracking-[0.2em] uppercase text-sm transition-all duration-300 hover:border-gold inline-block">
              Enviar E-mail
            </a>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-gold-muted py-10 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-display text-lg font-bold text-foreground">
              Galpão 360 <span className="text-gold italic font-normal">Wood Studio</span>
            </p>
            <p className="text-xs text-muted-foreground mt-1 tracking-wider">
              Madeira Natural · Resina Epóxi · Design Exclusivo
            </p>
          </div>
          <p className="text-xs text-muted-foreground tracking-widest">
            © 2024 Galpão 360 Wood Studio · Todos os direitos reservados
          </p>
        </div>
      </footer>
      {/* ── LIGHTBOX ── */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-md flex flex-col items-center justify-center p-4 md:p-10 animate-in fade-in duration-300"
        >
          {/* Controls */}
          <div className="absolute top-6 right-6 flex items-center gap-4 z-10">
            <button
              className="text-gold hover:text-white transition-colors p-2 bg-background/40 backdrop-blur-sm rounded-full"
              onClick={() => setIsZoomed(!isZoomed)}
              title={isZoomed ? "Zoom Out" : "Zoom In"}
            >
              {isZoomed ? <ZoomOut size={24} /> : <ZoomIn size={24} />}
            </button>
            <button
              className="text-gold hover:text-white transition-colors p-2 bg-background/40 backdrop-blur-sm rounded-full"
              onClick={() => {
                setSelectedImage(null);
                setIsZoomed(false);
              }}
            >
              <X size={24} />
            </button>
          </div>

          <div
            className={`relative w-full h-full flex items-center justify-center overflow-hidden cursor-move transition-all duration-500 rounded-lg`}
            onClick={() => !isZoomed && setSelectedImage(null)}
          >
            <img
              src={selectedImage}
              alt="Enlarged View"
              className={`max-w-full max-h-full object-contain shadow-2xl border border-gold/20 transition-transform duration-500 ease-in-out ${isZoomed ? "scale-150 cursor-zoom-out" : "scale-100 cursor-zoom-in"}`}
              onClick={(e) => {
                e.stopPropagation();
                setIsZoomed(!isZoomed);
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
