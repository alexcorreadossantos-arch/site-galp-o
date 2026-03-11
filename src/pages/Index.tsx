import heroVideo from "@/assets/galpao360-river-table.mp4";
import relogioImg from "@/assets/relogio-parede-resina.jpg";
import tabuaImg from "@/assets/tabua-churrasco-resina.jpg";
import abridorImg from "@/assets/abridor-magnetico-resina.jpg";
import riverTableImg from "@/assets/river-table-produto.jpg";
import { useEffect, useRef, useState } from "react";

const Index = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.addEventListener("canplay", () => setVideoLoaded(true));
    }
  }, []);

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
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${videoLoaded ? "opacity-60" : "opacity-0"}`}
        />

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/30 to-background/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-background/60" />

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          {/* Logo / Brand */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-[hsl(var(--gold))]" />
            <span className="text-xs tracking-[0.4em] font-light text-gold uppercase">
              Since 2018
            </span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-[hsl(var(--gold))]" />
          </div>

          <h1 className="font-display text-6xl md:text-8xl font-bold mb-4 leading-none tracking-tight">
            <span className="block text-foreground">Galpão 360</span>
            <span className="block text-gold italic font-normal text-5xl md:text-7xl mt-2">
              Wood Studio
            </span>
          </h1>

          <p className="font-elegant text-xl md:text-2xl font-light text-foreground/70 mt-6 mb-10 italic tracking-wide">
            Madeira viva. Resina cristalina. Arte que dura gerações.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-10 py-4 bg-gradient-gold text-primary-foreground font-semibold tracking-[0.15em] uppercase text-sm transition-all duration-300 hover:opacity-90 hover:scale-105 shadow-gold">
              Ver Coleção
            </button>
            <button className="px-10 py-4 border border-gold-muted text-gold font-light tracking-[0.15em] uppercase text-sm transition-all duration-300 hover:border-gold hover:bg-[hsl(var(--gold)/0.08)]">
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
        <div className="flex gap-16 animate-none whitespace-nowrap px-8">
          {["River Tables", "Epoxy Resin Art", "Live Edge", "Handcrafted", "Peças Exclusivas", "Design Premium", "Madeira Natural", "Acabamento Artesanal"].map((item, i) => (
            <span key={i} className="text-xs tracking-[0.3em] uppercase text-muted-foreground inline-flex items-center gap-6">
              {item}
              {i < 7 && <span className="text-gold">✦</span>}
            </span>
          ))}
        </div>
      </section>

      {/* ── FEATURED PIECE ── */}
      <section className="py-28 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Video preview card */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-gold opacity-20 blur-xl group-hover:opacity-30 transition-opacity duration-500" />
            <div className="relative overflow-hidden border border-gold-muted">
              <video
                src={heroVideo}
                autoPlay
                muted
                loop
                playsInline
                className="w-full aspect-video object-cover"
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
                River Table
                <span className="block italic font-normal text-gold text-3xl mt-1">Epoxy Cristalino</span>
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
                { label: "Acabamento", value: "Premium Ultramate / Gloss" },
                { label: "Personalização", value: "100% sob medida" },
                { label: "Garantia", value: "Vitalícia" },
              ].map((spec) => (
                <div key={spec.label} className="border border-[hsl(var(--border))] p-4 bg-card">
                  <p className="text-xs text-muted-foreground tracking-widest uppercase mb-1">{spec.label}</p>
                  <p className="text-sm font-medium text-foreground/90">{spec.value}</p>
                </div>
              ))}
            </div>

            <button className="w-full py-4 bg-gradient-gold text-primary-foreground font-semibold tracking-[0.15em] uppercase text-sm transition-all duration-300 hover:opacity-90">
              Consultar Disponibilidade →
            </button>
          </div>
        </div>
      </section>

      {/* ── COLEÇÃO ── */}
      <section className="py-28 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.4em] text-gold uppercase mb-3">Feito à Mão, Peça por Peça</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight">
            Nossa Coleção
            <span className="block italic font-normal text-gold text-3xl mt-1">Exclusiva</span>
          </h2>
          <p className="font-elegant text-lg text-foreground/60 mt-4 max-w-xl mx-auto">
            Cada peça é única — nascida da combinação entre madeira nobre e resina epóxi cristalina.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              img: riverTableImg,
              tag: "Destaque",
              title: "River Table",
              sub: "Mesa Epóxi",
              desc: "Mesa jantar com live edge e resina cristalina. Peça principal da coleção, totalmente exclusiva.",
              badge: "Sob Medida",
            },
            {
              img: relogioImg,
              tag: "Novo",
              title: "Relógio de Parede",
              sub: "Madeira + Resina",
              desc: "Disco de madeira com resina oceânica e ponteiros dourados. Arte funcional para sua parede.",
              badge: "Artesanal",
            },
            {
              img: tabuaImg,
              tag: "Popular",
              title: "Tábua de Churrasco",
              sub: "Resina Colorida",
              desc: "Tábua em madeira maciça com incrustações de resina vibrante. Perfeita para presentear.",
              badge: "Premium",
            },
            {
              img: abridorImg,
              tag: "Exclusivo",
              title: "Abridor Magnético",
              sub: "Parede Epóxi",
              desc: "Abridor de parede em tronco com resina e imã embutido que captura as tampinhas.",
              badge: "Único",
            },
          ].map((produto) => (
            <div key={produto.title} className="group relative overflow-hidden border border-gold-muted bg-card hover:border-gold transition-all duration-500">
              {/* Image */}
              <div className="relative overflow-hidden aspect-square">
                <img
                  src={produto.img}
                  alt={produto.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                {/* Tag */}
                <div className="absolute top-3 left-3">
                  <span className="text-[10px] tracking-[0.25em] uppercase px-2 py-1 bg-[hsl(var(--gold)/0.15)] border border-gold-muted text-gold">
                    {produto.tag}
                  </span>
                </div>
                {/* Badge */}
                <div className="absolute top-3 right-3">
                  <span className="text-[10px] tracking-widest uppercase px-2 py-1 bg-background/80 text-muted-foreground border border-[hsl(var(--border))]">
                    {produto.badge}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 space-y-3">
                <div>
                  <p className="text-[10px] tracking-[0.35em] uppercase text-gold mb-1">{produto.sub}</p>
                  <h3 className="font-display text-xl font-semibold text-foreground">{produto.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground font-elegant leading-relaxed">{produto.desc}</p>
                <div className="pt-2">
                  <div className="w-full h-px bg-gradient-to-r from-gold-muted to-transparent mb-4" />
                  <button className="w-full py-2.5 border border-gold-muted text-gold text-xs tracking-[0.2em] uppercase font-light hover:bg-[hsl(var(--gold)/0.08)] hover:border-gold transition-all duration-300">
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
      <section className="py-32 px-6 relative overflow-hidden">
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
            <a href="https://wa.me/5500000000000" className="px-12 py-5 bg-gradient-gold text-primary-foreground font-semibold tracking-[0.2em] uppercase text-sm transition-all duration-300 hover:opacity-90 hover:scale-105 shadow-gold inline-block">
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
    </div>
  );
};

export default Index;
