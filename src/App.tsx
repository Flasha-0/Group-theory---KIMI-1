import Navigation from '@/components/Navigation';
import Hero from '@/sections/Hero';
import ChapterSection from '@/sections/ChapterSection';
import ProblemsSection from '@/sections/ProblemsSection';
import Footer from '@/sections/Footer';
import { chapters } from '@/data/bookContent';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      <Navigation />
      <Hero />

      {/* Chapter sections */}
      {chapters.map((chapter) => (
        <ChapterSection key={chapter.id} chapter={chapter} />
      ))}

      {/* Problem solver section */}
      <ProblemsSection />

      <Footer />
    </div>
  );
}
