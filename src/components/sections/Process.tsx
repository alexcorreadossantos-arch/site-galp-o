const Process = () => {
  const steps = [
    { step: "01", title: "Seleção da Madeira", desc: "Escolhemos madeiras com veios únicos e história, respeitando cada característica natural." },
    { step: "02", title: "Preparação & Cura", desc: "Secagem controlada para garantir estabilidade estrutural e preservar a beleza da madeira." },
    { step: "03", title: "Aplicação da Resina", desc: "Resina epóxi de qualidade aplicada em camadas em ambiente controlado, criando profundidade e luminosidade únicas." },
    { step: "04", title: "Polimento Premium", desc: "Acabamento artesanal que revela todos os detalhes, com proteção duradoura e toque de seda." },
  ];

  return (
    <section className="py-24 bg-card">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.4em] text-gold uppercase mb-3">Nossa Essência</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">O Processo Artesanal</h2>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((item) => (
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
  );
};

export default Process;
