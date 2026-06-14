import { useState } from 'react';
import { Check, X, Shield, Link2, CircleDot, ArrowLeftRight } from 'lucide-react';

interface Axiom {
  id: string;
  nameAr: string;
  nameEn: string;
  icon: React.ReactNode;
  description: string;
}

const axioms: Axiom[] = [
  {
    id: 'closure',
    nameAr: 'الإغلاق',
    nameEn: 'Closure',
    icon: <Shield className="w-5 h-5" />,
    description: 'a * b ∈ G لكل a, b ∈ G',
  },
  {
    id: 'associative',
    nameAr: 'التجميعية',
    nameEn: 'Associativity',
    icon: <Link2 className="w-5 h-5" />,
    description: '(a * b) * c = a * (b * c)',
  },
  {
    id: 'identity',
    nameAr: 'المحايد',
    nameEn: 'Identity',
    icon: <CircleDot className="w-5 h-5" />,
    description: '∃ e ∈ G : a * e = a',
  },
  {
    id: 'inverse',
    nameAr: 'العاكس',
    nameEn: 'Inverse',
    icon: <ArrowLeftRight className="w-5 h-5" />,
    description: '∀ a, ∃ a⁻¹ : a * a⁻¹ = e',
  },
];

export default function AxiomBuilder() {
  const [activeAxioms, setActiveAxioms] = useState<Set<string>>(new Set());
  const [isGroup, setIsGroup] = useState(false);

  const toggleAxiom = (id: string) => {
    const newSet = new Set(activeAxioms);
    if (newSet.has(id)) {
      newSet.delete(id);
      setIsGroup(false);
    } else {
      newSet.add(id);
      if (newSet.size === 4) {
        setIsGroup(true);
      }
    }
    setActiveAxioms(newSet);
  };

  return (
    <div className="relative z-10 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 md:p-8 max-w-xl mx-auto mt-8">
      <h3 className="text-white text-center text-lg font-semibold mb-6 font-heading">
        {isGroup ? (
          <span className="text-emerald-300 flex items-center justify-center gap-2">
            <Check className="w-5 h-5" />
            تم تكوين الزمرة! (G, *) زمرة
          </span>
        ) : (
          'فعل جميع الشروط لتكوين زمرة'
        )}
      </h3>

      {/* Progress bar */}
      <div className="w-full bg-white/10 rounded-full h-2 mb-6">
        <div
          className={`h-2 rounded-full transition-all duration-500 ${
            isGroup ? 'bg-emerald-400 w-full' : 'bg-indigo-400'
          }`}
          style={{ width: `${(activeAxioms.size / 4) * 100}%` }}
        />
      </div>

      {/* Axiom chips */}
      <div className="grid grid-cols-2 gap-3">
        {axioms.map((axiom) => {
          const isActive = activeAxioms.has(axiom.id);
          return (
            <button
              key={axiom.id}
              onClick={() => toggleAxiom(axiom.id)}
              className={`flex flex-col items-center gap-2 p-4 rounded-xl border-2 transition-all duration-300 ${
                isActive
                  ? isGroup
                    ? 'border-emerald-400 bg-emerald-400/20 text-emerald-300'
                    : 'border-indigo-400 bg-indigo-400/20 text-indigo-300'
                  : 'border-white/20 bg-white/5 text-white/60 hover:border-white/40 hover:bg-white/10'
              }`}
            >
              <div className="flex items-center gap-2">
                {isActive ? (
                  <Check className="w-5 h-5" />
                ) : (
                  <X className="w-5 h-5 opacity-30" />
                )}
                {axiom.icon}
              </div>
              <span className="text-sm font-bold">{axiom.nameAr}</span>
              <span className="text-xs font-math opacity-70">{axiom.description}</span>
            </button>
          );
        })}
      </div>

      {/* Visual feedback */}
      <div className="mt-6 flex justify-center">
        <div
          className={`w-24 h-24 rounded-2xl border-2 transition-all duration-700 flex items-center justify-center ${
            isGroup
              ? 'border-emerald-400 bg-emerald-400/20 rotate-45 scale-110'
              : activeAxioms.size > 0
              ? 'border-indigo-400 bg-indigo-400/10'
              : 'border-white/10 bg-white/5'
          }`}
        >
          <span
            className={`font-bold text-2xl transition-all duration-700 ${
              isGroup ? 'text-emerald-300 -rotate-45' : 'text-white/40'
            }`}
          >
            {isGroup ? 'G' : '?'}
          </span>
        </div>
      </div>
    </div>
  );
}
