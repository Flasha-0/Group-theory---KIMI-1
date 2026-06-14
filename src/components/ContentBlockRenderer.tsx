import { useState } from 'react';
import { Lightbulb, ChevronDown, ChevronUp, BookOpen, Calculator, PenTool, AlertCircle, Star } from 'lucide-react';
import type { ContentBlock, Step } from '@/data/bookContent';
import CayleyTable from './CayleyTable';

interface Props {
  block: ContentBlock;
}

function StepByStep({ steps, hint }: { steps: Step[]; hint?: string }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [showHint, setShowHint] = useState(false);

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-4 my-4">
      {hint && (
        <button
          onClick={() => setShowHint(!showHint)}
          className="flex items-center gap-2 text-amber-600 text-sm font-medium mb-3 hover:text-amber-700 transition-colors"
        >
          <Lightbulb className="w-4 h-4" />
          {showHint ? 'إخفاء التلميح' : 'إظهار التلميح'}
        </button>
      )}
      {showHint && hint && (
        <div className="bg-amber-50 border-r-4 border-amber-400 p-3 rounded-l-lg mb-4 text-amber-800 text-sm">
          {hint}
        </div>
      )}

      <div className="space-y-3">
        {steps.slice(0, currentStep + 1).map((step, idx) => (
          <div
            key={idx}
            className="flex gap-3 items-start animate-in slide-in-from-right duration-300"
          >
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center text-sm font-bold">
              {step.step}
            </div>
            <div className="flex-1">
              <p className="text-gray-800 text-sm leading-relaxed">{step.text}</p>
              {step.math && (
                <div className="font-math text-indigo-700 bg-indigo-50 px-3 py-1.5 rounded-lg mt-1 text-sm inline-block">
                  {step.math}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="flex gap-2 mt-4">
        {currentStep < steps.length - 1 && (
          <button
            onClick={() => setCurrentStep(currentStep + 1)}
            className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors"
          >
            الخطوة التالية
          </button>
        )}
        {currentStep > 0 && (
          <button
            onClick={() => setCurrentStep(currentStep - 1)}
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-300 transition-colors"
          >
            السابق
          </button>
        )}
        {currentStep === steps.length - 1 && (
          <span className="px-4 py-2 bg-emerald-100 text-emerald-700 rounded-lg text-sm font-medium flex items-center gap-2">
            <Star className="w-4 h-4" />
            اكتمل البرهان!
          </span>
        )}
      </div>
    </div>
  );
}

export default function ContentBlockRenderer({ block }: Props) {
  const [isExpanded, setIsExpanded] = useState(true);

  switch (block.type) {
    case 'heading':
      return (
        <h3 className="subsection-title mt-8">
          {block.title}
        </h3>
      );

    case 'paragraph':
      return (
        <p className="text-gray-700 leading-relaxed text-base my-3">
          {block.content}
        </p>
      );

    case 'math':
      return (
        <div className="math-block">
          {block.content}
        </div>
      );

    case 'list':
      return (
        <ul className="space-y-2 my-4">
          {block.items?.map((item, idx) => (
            <li key={idx} className="flex items-start gap-2 text-gray-700">
              <span className="text-indigo-500 mt-1.5 flex-shrink-0">
                <ChevronDown className="w-4 h-4" />
              </span>
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      );

    case 'definition':
      return (
        <div className="definition-card">
          <div className="flex items-center gap-2 mb-2">
            <BookOpen className="w-5 h-5 text-indigo-600" />
            <span className="text-indigo-700 font-bold text-sm uppercase tracking-wide">
              تعريف
            </span>
            {block.title && (
              <span className="text-gray-900 font-semibold">— {block.title}</span>
            )}
          </div>
          <p className="text-gray-700 leading-relaxed">{block.content}</p>
          {block.items && (
            <ul className="mt-3 space-y-1.5">
              {block.items.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-gray-600 text-sm">
                  <span className="text-indigo-400 mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      );

    case 'theorem':
      return (
        <div className="theorem-card">
          <div className="flex items-center gap-2 mb-2">
            <Star className="w-5 h-5 text-indigo-600" />
            <span className="text-indigo-700 font-bold text-sm uppercase tracking-wide">
              نظرية
            </span>
            {block.title && (
              <span className="text-gray-900 font-semibold">— {block.title}</span>
            )}
          </div>
          <p className="text-gray-800 leading-relaxed font-medium">{block.content}</p>
          {block.items && (
            <ul className="mt-3 space-y-1.5">
              {block.items.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-gray-700 text-sm">
                  <span className="text-indigo-400 mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          )}
          {block.steps && (
            <StepByStep steps={block.steps} hint={block.hint} />
          )}
        </div>
      );

    case 'proof':
      return (
        <div className="proof-box">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-2 w-full text-left"
          >
            <PenTool className="w-5 h-5 text-gray-600" />
            <span className="text-gray-700 font-bold text-sm">{block.title || 'البرهان'}</span>
            {isExpanded ? (
              <ChevronUp className="w-4 h-4 text-gray-400 mr-auto" />
            ) : (
              <ChevronDown className="w-4 h-4 text-gray-400 mr-auto" />
            )}
          </button>
          {isExpanded && (
            <div className="mt-3">
              {block.content && (
                <p className="text-gray-700 leading-relaxed text-sm mb-3">{block.content}</p>
              )}
              {block.steps && (
                <StepByStep steps={block.steps} hint={block.hint} />
              )}
            </div>
          )}
        </div>
      );

    case 'example':
      return (
        <div className="example-box">
          <div className="flex items-center gap-2 mb-2">
            <Calculator className="w-5 h-5 text-emerald-600" />
            <span className="text-emerald-700 font-bold text-sm uppercase tracking-wide">
              مثال
            </span>
            {block.title && (
              <span className="text-gray-900 font-semibold">— {block.title}</span>
            )}
          </div>
          <p className="text-gray-700 leading-relaxed">{block.content}</p>
          {block.items && (
            <ul className="mt-3 space-y-1.5">
              {block.items.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-gray-600 text-sm">
                  <span className="text-emerald-400 mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          )}
          {block.table && (
            <div className="overflow-x-auto mt-4">
              <table className="min-w-full border-collapse">
                <tbody>
                  {block.table.map((row, rIdx) => (
                    <tr key={rIdx}>
                      {row.map((cell, cIdx) => (
                        <td
                          key={cIdx}
                          className={`border border-emerald-200 px-3 py-2 text-center text-sm font-math ${
                            rIdx === 0 || cIdx === 0
                              ? 'bg-emerald-100 font-semibold text-emerald-800'
                              : 'bg-white text-gray-700'
                          }`}
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      );

    case 'exercise':
      return (
        <div className="exercise-box">
          <div className="flex items-center gap-2 mb-2">
            <AlertCircle className="w-5 h-5 text-amber-600" />
            <span className="text-amber-700 font-bold text-sm uppercase tracking-wide">
              تمرين
            </span>
            {block.title && (
              <span className="text-gray-900 font-semibold">— {block.title}</span>
            )}
          </div>
          <p className="text-gray-700 leading-relaxed">{block.content}</p>
          {block.items && (
            <ol className="mt-3 space-y-2">
              {block.items.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-gray-700 text-sm">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center text-xs font-bold">
                    {idx + 1}
                  </span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ol>
          )}
          {block.steps && (
            <StepByStep steps={block.steps} hint={block.hint} />
          )}
        </div>
      );

    case 'note':
      return (
        <div className="note-box">
          <div className="flex items-center gap-2 mb-2">
            <AlertCircle className="w-5 h-5 text-blue-600" />
            <span className="text-blue-700 font-bold text-sm uppercase tracking-wide">
              ملاحظة
            </span>
            {block.title && (
              <span className="text-gray-900 font-semibold">— {block.title}</span>
            )}
          </div>
          <p className="text-gray-700 leading-relaxed">{block.content}</p>
          {block.items && (
            <ul className="mt-3 space-y-1.5">
              {block.items.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-gray-600 text-sm">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      );

    case 'cayley_table':
      if (block.elements && block.operation) {
        // Parse operation string into function
        const ops: Record<string, Record<string, string>> = {};
        try {
          const parsed = JSON.parse(block.operation);
          Object.assign(ops, parsed);
        } catch {
          // Use default addition for Z_n
        }
        const opFn = (a: string, b: string) => {
          if (ops[a]?.[b]) return ops[a][b];
          // Default: try to parse as integers and add
          try {
            const na = parseInt(a.replace(/[^0-9-]/g, ''));
            const nb = parseInt(b.replace(/[^0-9-]/g, ''));
            if (!isNaN(na) && !isNaN(nb)) {
              const n = block.elements?.length || 0;
              if (n > 0) {
                return `[${((na + nb) % n + n) % n}]`;
              }
              return `${na + nb}`;
            }
          } catch { /* ignore */ }
          return '?';
        };
        return (
          <CayleyTable
            elements={block.elements}
            operation={opFn}
            title={block.title}
          />
        );
      }
      return null;

    case 'steps':
      if (block.steps) {
        return <StepByStep steps={block.steps} hint={block.hint} />;
      }
      return null;

    default:
      return null;
  }
}
