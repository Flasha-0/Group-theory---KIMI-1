import HeroBackground from '@/components/HeroBackground';
import AxiomBuilder from '@/components/AxiomBuilder';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const scrollToContent = () => {
    const el = document.getElementById('intro');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-[95vh] flex flex-col items-center justify-center overflow-hidden bg-gray-900"
    >
      <HeroBackground />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <div className="mb-4">
          <span className="inline-block px-4 py-1.5 bg-indigo-500/20 text-indigo-300 text-sm font-medium rounded-full border border-indigo-500/30">
            كتاب تفاعلي شامل
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white font-heading mb-4 leading-tight">
          نظرية الزمر
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 font-heading mb-2">
          Group Theory
        </p>
        <p className="text-base md:text-lg text-gray-400 max-w-xl mx-auto leading-relaxed mb-8">
          فهم البنية الجوهرية للرياضيات من خلال التماثل والتفاعل.
          استكشف المفاهيم، التعريفات، والبراهين خطوة بخطوة.
        </p>

        <AxiomBuilder />
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToContent}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 hover:text-white transition-colors animate-bounce"
      >
        <ChevronDown className="w-8 h-8" />
      </button>

      {/* Gradient overlay at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-50 to-transparent z-10" />
    </section>
  );
}
