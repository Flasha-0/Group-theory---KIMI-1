import { BookOpen, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="max-w-5xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-indigo-400" />
            <span className="text-white font-bold text-lg font-heading">
              نظرية الزمر
            </span>
          </div>

          {/* Description */}
          <p className="text-sm text-center max-w-md">
            موقع تفاعلي شامل لتعليم نظرية الزمر من الصفر حتى الاحتراف.
            يتضمن جميع التعريفات، النظريات، البراهين، والتمارين مع حلول تفاعلية.
          </p>

          {/* Links */}
          <div className="flex items-center gap-4 text-sm">
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="hover:text-white transition-colors"
            >
              البداية
            </a>
            <a
              href="#problems"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('problems')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="hover:text-white transition-colors"
            >
              المسائل
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <p className="flex items-center gap-1">
            تم إعداد هذا المحتوى بـ
            <Heart className="w-3 h-3 text-rose-500 fill-rose-500" />
            لتعليم نظرية الزمر
          </p>
          <p>محتوى مبني على كتاب "مقدمة في الجبر المجرد - نظرية الزمر"</p>
        </div>
      </div>
    </footer>
  );
}
