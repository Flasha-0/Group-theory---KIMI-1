import { useState, useCallback } from 'react';
import { RotateCcw, Check } from 'lucide-react';

interface CayleyTableProps {
  elements: string[];
  operation: (a: string, b: string) => string;
  operationSymbol?: string;
  title?: string;
}

export default function CayleyTable({
  elements,
  operation,
  operationSymbol = '*',
  title,
}: CayleyTableProps) {
  const [inputs, setInputs] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<Record<string, 'correct' | 'wrong' | 'empty'>>({});

  const getKey = (row: string, col: string) => `${row}|${col}`;

  const handleInputChange = (row: string, col: string, value: string) => {
    const key = getKey(row, col);
    const correct = operation(row, col);

    setInputs((prev) => ({ ...prev, [key]: value }));

    if (value === '') {
      setStatus((prev) => ({ ...prev, [key]: 'empty' }));
    } else if (value === correct) {
      setStatus((prev) => ({ ...prev, [key]: 'correct' }));
    } else if (value.length >= correct.length) {
      setStatus((prev) => ({ ...prev, [key]: 'wrong' }));
    }
  };

  const reset = useCallback(() => {
    setInputs({});
    setStatus({});
  }, []);

  const fillAll = useCallback(() => {
    const newInputs: Record<string, string> = {};
    const newStatus: Record<string, 'correct' | 'wrong' | 'empty'> = {};
    elements.forEach((row) => {
      elements.forEach((col) => {
        const key = getKey(row, col);
        newInputs[key] = operation(row, col);
        newStatus[key] = 'correct';
      });
    });
    setInputs(newInputs);
    setStatus(newStatus);
  }, [elements, operation]);

  const getStatusColor = (row: string, col: string) => {
    const key = getKey(row, col);
    const s = status[key];
    if (s === 'correct') return 'bg-emerald-100 text-emerald-700 border-emerald-400';
    if (s === 'wrong') return 'bg-rose-100 text-rose-700 border-rose-400';
    return 'bg-white text-gray-700 border-gray-300';
  };

  return (
    <div className="my-6">
      {title && (
        <h4 className="text-lg font-semibold text-gray-800 mb-4 font-heading text-center">
          {title}
        </h4>
      )}
      <div className="overflow-x-auto">
        <div className="inline-block">
          {/* Header row */}
          <div
            className="grid gap-1"
            style={{
              gridTemplateColumns: `repeat(${elements.length + 1}, minmax(48px, 1fr))`,
            }}
          >
            <div className="w-12 h-12 flex items-center justify-center font-bold text-indigo-600 text-lg">
              {operationSymbol}
            </div>
            {elements.map((el) => (
              <div
                key={`h-${el}`}
                className="w-12 h-12 flex items-center justify-center font-bold text-indigo-600 bg-indigo-50 rounded-lg text-sm font-math"
              >
                {el}
              </div>
            ))}
          </div>

          {/* Data rows */}
          {elements.map((rowEl) => (
            <div
              key={`row-${rowEl}`}
              className="grid gap-1"
              style={{
                gridTemplateColumns: `repeat(${elements.length + 1}, minmax(48px, 1fr))`,
              }}
            >
              {/* Row header */}
              <div className="w-12 h-12 flex items-center justify-center font-bold text-indigo-600 bg-indigo-50 rounded-lg text-sm font-math">
                {rowEl}
              </div>

              {/* Input cells */}
              {elements.map((colEl) => {
                const key = getKey(rowEl, colEl);
                return (
                  <div key={key} className="relative">
                    <input
                      type="text"
                      maxLength={5}
                      value={inputs[key] || ''}
                      onChange={(e) =>
                        handleInputChange(rowEl, colEl, e.target.value)
                      }
                      className={`w-12 h-12 text-center border-2 rounded-lg text-sm font-math outline-none transition-all duration-200 focus:ring-2 focus:ring-indigo-300 ${getStatusColor(
                        rowEl,
                        colEl
                      )}`}
                      aria-label={`نتيجة ${rowEl} ${operationSymbol} ${colEl}`}
                    />
                    {status[key] === 'correct' && (
                      <Check className="absolute -top-1 -right-1 w-4 h-4 text-emerald-500 bg-white rounded-full" />
                    )}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-2 mt-4 justify-center">
        <button
          onClick={fillAll}
          className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors flex items-center gap-2"
        >
          <Check className="w-4 h-4" />
          إظهار الحل
        </button>
        <button
          onClick={reset}
          className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-300 transition-colors flex items-center gap-2"
        >
          <RotateCcw className="w-4 h-4" />
          إعادة
        </button>
      </div>
    </div>
  );
}
