import React, { useState, useEffect } from 'react';

const CSS_STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@400;700&family=Cinzel:wght@400;600;700&family=Lora:ital,wght@0,400;0,600;1,400&display=swap');
  .font-cinzel { font-family: 'Cinzel', serif; }
  .font-cinzel-dec { font-family: 'Cinzel Decorative', serif; }
  .font-lora { font-family: 'Lora', serif; }
`;

export default function App() {
  const [currentPage, setCurrentPage] = useState('auth');
  const [user, setUser] = useState({
    scholarName: '',
    learningStyle: 'Visual',
    hoursPerWeek: 15,
    subjects: []
  });

  const [generatedSchedule, setGeneratedSchedule] = useState(null);
  const [aiReasoning, setAiReasoning] = useState('');
  const [isWeaving, setIsWeaving] = useState(false);
  const [error, setError] = useState('');

  // ==================== GEMINI API KEY ====================
  // Automatically loads the key from your local .env file
  const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
  // =======================================================

  const handleWeaveSchedule = async () => {
    if (!GEMINI_API_KEY || GEMINI_API_KEY === "YOUR_API_KEY_HERE") {
      setError("Please add your Gemini API key to your local .env file");
      return;
    }

    setIsWeaving(true);
    setError('');

    const prompt = `Create a good study schedule for a student named ${user.scholarName || "Scholar"} who has ${user.hoursPerWeek} hours per week and learns best through ${user.learningStyle}.`;

    try {
      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }]
        })
      });

      const data = await response.json();
      const text = data.candidates?.[0]?.content?.parts?.[0]?.text || "Schedule created!";
      
      setAiReasoning(text);
      setGeneratedSchedule("Your personalized schedule is ready!");
      setCurrentPage('dashboard');
    } catch (e) {
      setError("Failed to connect to AI. Check your API key or network connection.");
    } finally {
      setIsWeaving(false);
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white p-8 font-sans">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-amber-400 text-center mb-10">Chronos Academy</h1>

        {currentPage === 'auth' && (
          <div className="text-center">
            <button 
              onClick={() => setCurrentPage('planner')}
              className="bg-amber-500 text-black px-8 py-4 rounded-xl text-xl font-bold"
            >
              Start Your Journey
            </button>
          </div>
        )}

        {currentPage === 'planner' && (
          <div className="text-center">
            <button 
              onClick={handleWeaveSchedule}
              disabled={isWeaving}
              className="bg-gradient-to-r from-amber-500 to-yellow-500 text-black px-12 py-5 rounded-2xl text-2xl font-bold disabled:opacity-50"
            >
              {isWeaving ? "Weaving Schedule..." : "✦ Generate Study Schedule ✦"}
            </button>
          </div>
        )}

        {currentPage === 'dashboard' && (
          <div className="bg-zinc-900 p-8 rounded-2xl">
            <h2 className="text-3xl text-amber-300 mb-6">Your AI Study Plan</h2>
            <p className="text-lg leading-relaxed text-slate-200 whitespace-pre-line">{aiReasoning}</p>
          </div>
        )}

        {error && <p className="text-red-400 text-center mt-6">{error}</p>}
      </div>
    </div>
  );
}