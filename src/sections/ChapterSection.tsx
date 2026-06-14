import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BookOpen } from 'lucide-react';
import type { Chapter } from '@/data/bookContent';
import ContentBlockRenderer from '@/components/ContentBlockRenderer';

gsap.registerPlugin(ScrollTrigger);

interface Props {
  chapter: Chapter;
}

export default function ChapterSection({ chapter }: Props) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!contentRef.current) return;

    const blocks = contentRef.current.querySelectorAll('.content-animate');
    blocks.forEach((block, index) => {
      gsap.fromTo(
        block,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          delay: index * 0.05,
          scrollTrigger: {
            trigger: block,
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
      id={chapter.id}
      ref={sectionRef}
      className="py-16 md:py-24 bg-gray-50"
    >
      <div className="max-w-5xl mx-auto px-4 md:px-8">
        {/* Chapter header */}
        <div className="text-center mb-12 content-animate">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium mb-4">
            <BookOpen className="w-4 h-4" />
            {chapter.number === 0 ? 'مقدمة' : `الفصل ${chapter.number}`}
          </div>
          <h2 className="chapter-title">
            {chapter.title.split('：')[1] || chapter.title}
          </h2>
          {chapter.subtitle && (
            <p className="text-gray-500 text-lg font-heading">{chapter.subtitle}</p>
          )}
        </div>

        {/* Sections */}
        <div ref={contentRef}>
          {chapter.sections.map((section) => (
            <div
              id={section.id}
              key={section.id}
              className="content-animate mb-16 scroll-mt-24"
            >
              {/* Section header */}
              <div className="flex items-center gap-3 mb-6 pb-3 border-b-2 border-indigo-100">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-indigo-600 text-white flex items-center justify-center text-sm font-bold font-math">
                  {section.number}
                </div>
                <h3 className="section-title mb-0">{section.title}</h3>
              </div>

              {/* Content blocks */}
              <div className="space-y-2">
                {section.content.map((block, bIdx) => (
                  <div key={bIdx} className="content-animate">
                    <ContentBlockRenderer block={block} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
