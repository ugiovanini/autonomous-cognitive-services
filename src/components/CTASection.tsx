import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Phone } from "lucide-react";

const CTASection = () => {
  return (
    <section id="contact" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main CTA Card */}
          <div className="glass-strong rounded-3xl p-8 lg:p-12 text-center animated-border">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-foreground">Pronto para automatizar</span>
              <br />
              <span className="gradient-text">suas operações?</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
              Agende uma demonstração e descubra como a AOP pode transformar 
              a eficiência operacional do seu negócio com IA governada.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Button variant="hero" size="xl" className="group w-full sm:w-auto">
                Agendar Demonstração
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="glass" size="xl" className="w-full sm:w-auto">
                Falar com Especialista
              </Button>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-muted-foreground">
              <a 
                href="mailto:contato@autonomouscognitive.com" 
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4" />
                contato@autonomouscognitive.com
              </a>
              <span className="hidden sm:block text-border">|</span>
              <a 
                href="tel:+5511999999999" 
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4" />
                +55 (11) 99999-9999
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
