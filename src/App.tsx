import React, { useState } from 'react';

export function App() {
  const [display, setDisplay] = useState('0');
  const [equation, setEquation] = useState('');
  const [isNewInput, setIsNewInput] = useState(true);

  const handleNumber = (num: string) => {
    if (isNewInput) {
      setDisplay(num);
      setIsNewInput(false);
    } else {
      setDisplay(display === '0' ? num : display + num);
    }
  };

  const handleDecimal = () => {
    if (isNewInput) {
      setDisplay('0.');
      setIsNewInput(false);
    } else if (!display.includes('.')) {
      setDisplay(display + '.');
    }
  };

  const handleOperator = (op: string) => {
    setEquation(display + ' ' + op + ' ');
    setIsNewInput(true);
  };

  const handleClear = () => {
    setDisplay('0');
    setEquation('');
    setIsNewInput(true);
  };

  const handleDelete = () => {
    if (display.length > 1 && !isNewInput) {
      setDisplay(display.slice(0, -1));
    } else {
      setDisplay('0');
      setIsNewInput(true);
    }
  };

  const handleCalculate = () => {
    if (!equation) return;
    try {
      const fullExpr = equation + display;
      // Safely evaluate standard math expressions
      // eslint-disable-next-line no-eval
      const result = eval(fullExpr.replace(/×/g, '*').replace(/÷/g, '/'));
      const formattedResult = parseFloat(result.toFixed(10)).toString();
      setDisplay(formattedResult);
      setEquation('');
      setIsNewInput(true);
    } catch (error) {
      setDisplay('Error');
      setEquation('');
      setIsNewInput(true);
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4 font-sans">
      <div className="bg-slate-800 rounded-3xl shadow-2xl w-full max-w-sm p-6 border border-slate-700">
        <div className="mb-6 text-right">
          <div className="text-slate-400 text-sm h-6 overflow-hidden tracking-wider">{equation}</div>
          <div className="text-white text-4xl font-light tracking-tight truncate mt-1">{display}</div>
        </div>

        <div className="grid grid-cols-4 gap-3">
          <button 
            onClick={handleClear} 
            className="col-span-2 bg-rose-500/20 hover:bg-rose-500/30 text-rose-400 font-medium py-4 rounded-2xl transition text-lg"
          >
            AC
          </button>
          <button 
            onClick={handleDelete} 
            className="bg-slate-700 hover:bg-slate-600 text-slate-300 font-medium py-4 rounded-2xl transition text-lg"
          >
            DEL
          </button>
          <button 
            onClick={() => handleOperator('÷')} 
            className="bg-indigo-600 hover:bg-indigo-500 text-white font-medium py-4 rounded-2xl transition text-xl"
          >
            ÷
          </button>

          <button onClick={() => handleNumber('7')} className="bg-slate-700/50 hover:bg-slate-700 text-white font-medium py-4 rounded-2xl transition text-xl">7</button>
          <button onClick={() => handleNumber('8')} className="bg-slate-700/50 hover:bg-slate-700 text-white font-medium py-4 rounded-2xl transition text-xl">8</button>
          <button onClick={() => handleNumber('9')} className="bg-slate-700/50 hover:bg-slate-700 text-white font-medium py-4 rounded-2xl transition text-xl">9</button>
          <button 
            onClick={() => handleOperator('×')} 
            className="bg-indigo-600 hover:bg-indigo-500 text-white font-medium py-4 rounded-2xl transition text-xl"
          >
            ×
          </button>

          <button onClick={() => handleNumber('4')} className="bg-slate-700/50 hover:bg-slate-700 text-white font-medium py-4 rounded-2xl transition text-xl">4</button>
          <button onClick={() => handleNumber('5')} className="bg-slate-700/50 hover:bg-slate-700 text-white font-medium py-4 rounded-2xl transition text-xl">5</button>
          <button onClick={() => handleNumber('6')} className="bg-slate-700/50 hover:bg-slate-700 text-white font-medium py-4 rounded-2xl transition text-xl">6</button>
          <button 
            onClick={() => handleOperator('-')} 
            className="bg-indigo-600 hover:bg-indigo-500 text-white font-medium py-4 rounded-2xl transition text-xl"
          >
            -
          </button>

          <button onClick={() => handleNumber('1')} className="bg-slate-700/50 hover:bg-slate-700 text-white font-medium py-4 rounded-2xl transition text-xl">1</button>
          <button onClick={() => handleNumber('2')} className="bg-slate-700/50 hover:bg-slate-700 text-white font-medium py-4 rounded-2xl transition text-xl">2</button>
          <button onClick={() => handleNumber('3')} className="bg-slate-700/50 hover:bg-slate-700 text-white font-medium py-4 rounded-2xl transition text-xl">3</button>
          <button 
            onClick={() => handleOperator('+')} 
            className="bg-indigo-600 hover:bg-indigo-500 text-white font-medium py-4 rounded-2xl transition text-xl"
          >
            +
          </button>

          <button onClick={() => handleNumber('0')} className="col-span-2 bg-slate-700/50 hover:bg-slate-700 text-white font-medium py-4 rounded-2xl transition text-xl">0</button>
          <button onClick={handleDecimal} className="bg-slate-700/50 hover:bg-slate-700 text-white font-medium py-4 rounded-2xl transition text-xl">.</button>
          <button 
            onClick={handleCalculate} 
            className="bg-emerald-600 hover:bg-emerald-500 text-white font-medium py-4 rounded-2xl transition text-xl"
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
