import { useState, useEffect } from 'react';
import { BookOpen, Menu, X } from 'lucide-react';
import { chapters } from '@/data/bookContent';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = document.querySelectorAll('section[id]');
      let current = '';
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 150) {
          current = section.id;
        }
      });
      setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => scrollTo('hero')}
            className="flex items-center gap-2 group"
          >
            <BookOpen className={`w-6 h-6 transition-colors ${scrolled ? 'text-indigo-600' : 'text-white'}`} />
            <span className={`font-bold text-lg font-heading transition-colors ${scrolled ? 'text-gray-900' : 'text-white'}`}>
              نظرية الزمر
            </span>
          </button>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {chapters.map((ch) => (
              <button
                key={ch.id}
                onClick={() => scrollTo(ch.id)}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeSection === ch.id
                    ? scrolled
                      ? 'bg-indigo-50 text-indigo-700'
                      : 'bg-white/20 text-white'
                    : scrolled
                    ? 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                }`}
              >
                {ch.number === 0 ? 'مقدمة' : `الفصل ${ch.number}`}
              </button>
            ))}
            <button
              onClick={() => scrollTo('problems')}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                activeSection === 'problems'
                  ? scrolled
                    ? 'bg-amber-50 text-amber-700'
                    : 'bg-white/20 text-white'
                  : scrolled
                  ? 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  : 'text-white/70 hover:text-white hover:bg-white/10'
              }`}
            >
              حل المسائل
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              scrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
            }`}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-xl max-h-[70vh] overflow-y-auto">
          <div className="px-4 py-3 space-y-1">
            {chapters.map((ch) => (
              <div key={ch.id}>
                <button
                  onClick={() => scrollTo(ch.id)}
                  className={`w-full text-right px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    activeSection === ch.id
                      ? 'bg-indigo-50 text-indigo-700'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {ch.number === 0 ? 'مقدمة' : `الفصل ${ch.number}`}: {ch.title.split('：')[1] || ch.title}
                </button>
                {ch.sections.map((sec) => (
                  <button
                    key={sec.id}
                    onClick={() => scrollTo(sec.id)}
                    className="w-full text-right px-6 py-1.5 text-xs text-gray-500 hover:text-indigo-600 transition-colors"
                  >
                    {sec.number} - {sec.title}
                  </button>
                ))}
              </div>
            ))}
            <button
              onClick={() => scrollTo('problems')}
              className={`w-full text-right px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                activeSection === 'problems'
                  ? 'bg-amber-50 text-amber-700'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              حل المسائل التفاعلي
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
