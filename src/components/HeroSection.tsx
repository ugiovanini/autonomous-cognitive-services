import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 grid-pattern opacity-40" />
      <div className="absolute inset-0 radial-gradient" />
      
      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl float" style={{ animationDelay: '-3s' }} />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 fade-in-up">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">
              Plataforma B2B de Automação Operacional
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight mb-6 fade-in-up delay-100">
            <span className="text-foreground">IA Autônoma com</span>
            <br />
            <span className="gradient-text">Governança Nativa</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 fade-in-up delay-200">
            Automatize operações críticas com inteligência artificial agêntica. 
            Decisões assistidas, auditáveis e com controle humano quando necessário.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 fade-in-up delay-300">
            <Button variant="hero" size="xl" className="group">
              Solicitar Demonstração
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="glass" size="xl">
              Conhecer a Plataforma
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto fade-in-up delay-400">
            <div className="text-center">
              <div className="font-display text-3xl sm:text-4xl font-bold gradient-text">6+</div>
              <div className="text-sm text-muted-foreground mt-1">Módulos Verticais</div>
            </div>
            <div className="text-center">
              <div className="font-display text-3xl sm:text-4xl font-bold gradient-text">100%</div>
              <div className="text-sm text-muted-foreground mt-1">Auditável</div>
            </div>
            <div className="text-center">
              <div className="font-display text-3xl sm:text-4xl font-bold gradient-text">HITL</div>
              <div className="text-sm text-muted-foreground mt-1">Human-in-the-Loop</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
