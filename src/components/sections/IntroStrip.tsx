const IntroStrip = () => {
  return (
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
  );
};

export default IntroStrip;
