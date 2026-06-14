import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Calculator, BookOpen } from 'lucide-react';
import ProblemSolver from '@/components/ProblemSolver';

gsap.registerPlugin(ScrollTrigger);

export default function ProblemsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const elements = sectionRef.current.querySelectorAll('.animate-in');
    elements.forEach((el, index) => {
      gsap.fromTo(
        el,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          delay: index * 0.1,
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section
      id="problems"
      ref={sectionRef}
      className="py-16 md:py-24 bg-white"
    >
      <div className="max-w-5xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-12 animate-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 text-amber-700 rounded-full text-sm font-medium mb-4">
            <Calculator className="w-4 h-4" />
            حل المسائل
          </div>
          <h2 className="chapter-title">حل المسائل خطوة بخطوة</h2>
          <p className="text-gray-500 text-lg font-heading max-w-xl mx-auto">
            اختر مسألة وتابع الحل خطوة بخطوة مع تلميحات تفاعلية
          </p>
        </div>

        {/* Problem Solver */}
        <div className="animate-in">
          <ProblemSolver />
        </div>

        {/* Quick Reference */}
        <div className="mt-16 animate-in">
          <div className="flex items-center gap-2 mb-6">
            <BookOpen className="w-5 h-5 text-indigo-600" />
            <h3 className="section-title mb-0">جدول سريع بالمفاهيم الأساسية</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                title: 'تعريف الزمرة',
                content: '(G, *) زمرة إذا: إغلاق، تجميعية، محايد، عاكس',
                color: 'indigo',
              },
              {
                title: 'الزمرة الإبدالية',
                content: 'a * b = b * a لكل a, b ∈ G',
                color: 'emerald',
              },
              {
                title: 'الزمرة الجزئية',
                content: 'H ≤ G إذا H مغلقة وتحتوي على العواكس',
                color: 'blue',
              },
              {
                title: 'نظرية لاغرانج',
                content: 'H ≤ G ⇒ |H| يقسم |G|',
                color: 'purple',
              },
              {
                title: 'الزمرة الطبيعية',
                content: 'H ◅ G إذا gHg⁻¹ = H لكل g ∈ G',
                color: 'amber',
              },
              {
                title: 'الزمرة العاملة',
                content: 'G/H = {aH : a ∈ G} مع (aH)(bH) = (ab)H',
                color: 'rose',
              },
              {
                title: 'التشاكل',
                content: 'φ(a*b) = φ(a)⋆φ(b)',
                color: 'cyan',
              },
              {
                title: 'التماثل',
                content: 'تشاكل متقابل: G ≅ G\'',
                color: 'teal',
              },
              {
                title: 'النظرية الأساسية',
                content: 'G/Ker(φ) ≅ Im(φ)',
                color: 'orange',
              },
            ].map((card, idx) => (
              <div
                key={idx}
                className={`p-4 rounded-xl border-2 bg-${card.color}-50 border-${card.color}-200 hover:shadow-md transition-shadow`}
              >
                <h4 className={`font-bold text-${card.color}-800 text-sm mb-1`}>
                  {card.title}
                </h4>
                <p className={`text-${card.color}-700 text-xs leading-relaxed font-math`}>
                  {card.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
