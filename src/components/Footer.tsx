import { Brain } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border/50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <Brain className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <span className="font-display font-bold text-lg text-foreground">
                Autonomous
              </span>
              <span className="block text-xs text-muted-foreground -mt-0.5">
                Cognitive Services
              </span>
            </div>
          </div>

          {/* Info */}
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground">
              Plataforma B2B de Automação Operacional e Decisão Assistida
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              Resultado da fusão: Autonomous Chat Cognitivo + EASY APP + SmartConcierge
            </p>
          </div>

          {/* Copyright */}
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Autonomous Cognitive Services
          </div>
        </div>

        {/* Tech Stack Note */}
        <div className="mt-8 pt-6 border-t border-border/30 text-center">
          <p className="text-xs text-muted-foreground">
            Stack: Python + FastAPI | PostgreSQL + Redis | React/Next.js | WhatsApp API | 
            Governança ISO/IEC 38500 & 42001
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
