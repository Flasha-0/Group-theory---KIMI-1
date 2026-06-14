import { useState } from 'react';
import { Lightbulb, ChevronRight, ChevronLeft, Check, RotateCcw, Sparkles } from 'lucide-react';
import { problems } from '@/data/bookContent';

export default function ProblemSolver() {
  const [selectedProblem, setSelectedProblem] = useState(0);
  const [currentStep, setCurrentStep] = useState(-1);
  const [showHint, setShowHint] = useState(false);

  const problem = problems[selectedProblem];
  const isComplete = currentStep >= problem.steps.length - 1;

  const reset = () => {
    setCurrentStep(-1);
    setShowHint(false);
  };

  const selectProblem = (idx: number) => {
    setSelectedProblem(idx);
    reset();
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Problem selector */}
      <div className="flex flex-wrap gap-2 mb-6 justify-center">
        {problems.map((p, idx) => (
          <button
            key={p.id}
            onClick={() => selectProblem(idx)}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 ${
              selectedProblem === idx
                ? 'bg-indigo-600 text-white shadow-md'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {idx + 1}. {p.title.length > 25 ? p.title.substring(0, 25) + '...' : p.title}
          </button>
        ))}
      </div>

      {/* Problem card */}
      <div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-l from-indigo-600 to-indigo-700 px-6 py-4">
          <div className="flex items-center gap-2 mb-1">
            <Sparkles className="w-5 h-5 text-indigo-200" />
            <span className="text-indigo-200 text-xs font-medium uppercase tracking-wide">
              حل تفاعلي خطوة بخطوة
            </span>
          </div>
          <h3 className="text-white text-lg font-bold font-heading">
            {problem.title}
          </h3>
        </div>

        {/* Statement */}
        <div className="px-6 py-4 border-b border-gray-100">
          <p className="text-gray-800 font-medium text-base leading-relaxed">
            {problem.statement}
          </p>
          <button
            onClick={() => setShowHint(!showHint)}
            className="flex items-center gap-2 mt-3 text-amber-600 text-sm font-medium hover:text-amber-700 transition-colors"
          >
            <Lightbulb className="w-4 h-4" />
            {showHint ? 'إخفاء التلميح' : 'إظهار التلميح'}
          </button>
          {showHint && (
            <div className="mt-2 bg-amber-50 border-r-4 border-amber-400 p-3 rounded-l-lg text-amber-800 text-sm">
              {problem.hint}
            </div>
          )}
        </div>

        {/* Steps */}
        <div className="px-6 py-4">
          <div className="space-y-3">
            {problem.steps.map((step, idx) => {
              const isVisible = idx <= currentStep;
              const isLastVisible = idx === currentStep;

              if (!isVisible) return null;

              return (
                <div
                  key={idx}
                  className={`flex gap-4 items-start transition-all duration-500 ${
                    isLastVisible ? 'animate-in slide-in-from-right' : ''
                  }`}
                >
                  <div
                    className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${
                      idx === problem.steps.length - 1
                        ? 'bg-emerald-100 text-emerald-700'
                        : 'bg-indigo-100 text-indigo-700'
                    }`}
                  >
                    {idx === problem.steps.length - 1 ? (
                      <Check className="w-5 h-5" />
                    ) : (
                      step.step
                    )}
                  </div>
                  <div className="flex-1 pt-1.5">
                    <p className="text-gray-800 leading-relaxed">{step.text}</p>
                    {step.math && (
                      <div className="font-math text-indigo-700 bg-indigo-50 px-3 py-1.5 rounded-lg mt-2 text-sm inline-block">
                        {step.math}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}

            {currentStep === -1 && (
              <div className="text-center py-6 text-gray-400 text-sm">
                اضغط "ابدأ الحل" لرؤية الخطوات
              </div>
            )}
          </div>
        </div>

        {/* Controls */}
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 flex items-center justify-between">
          <div className="flex gap-2">
            {currentStep < problem.steps.length - 1 && (
              <button
                onClick={() => setCurrentStep(currentStep + 1)}
                className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors flex items-center gap-2"
              >
                {currentStep === -1 ? 'ابدأ الحل' : 'الخطوة التالية'}
                <ChevronRight className="w-4 h-4" />
              </button>
            )}
            {currentStep > -1 && (
              <button
                onClick={() => setCurrentStep(currentStep - 1)}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-300 transition-colors flex items-center gap-2"
              >
                <ChevronLeft className="w-4 h-4" />
                السابق
              </button>
            )}
          </div>

          <div className="flex items-center gap-3">
            {/* Progress */}
            <div className="flex gap-1">
              {problem.steps.map((_, idx) => (
                <div
                  key={idx}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    idx <= currentStep ? 'bg-indigo-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={reset}
              className="px-3 py-2 text-gray-500 hover:text-gray-700 transition-colors flex items-center gap-1 text-sm"
            >
              <RotateCcw className="w-4 h-4" />
              إعادة
            </button>
          </div>
        </div>

        {isComplete && (
          <div className="px-6 py-3 bg-emerald-50 border-t border-emerald-100 text-center">
            <span className="text-emerald-700 font-medium text-sm flex items-center justify-center gap-2">
              <Check className="w-4 h-4" />
              تم إكمال البرهان بنجاح!
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
