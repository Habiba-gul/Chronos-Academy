<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Chronos Academy - README</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
  <style>
    body { font-family: 'Inter', sans-serif; }
    .title { font-family: 'Playfair Display', serif; }
    .screenshot { border: 3px solid #d4af37; border-radius: 12px; box-shadow: 0 10px 30px rgba(212, 175, 55, 0.2); }
  </style>
</head>
<body class="bg-[#0a0a0f] text-slate-200 leading-relaxed">

  <div class="max-w-5xl mx-auto py-12 px-6">

    <div class="text-center mb-16">
      <h1 class="text-5xl title text-amber-400 mb-4">CHRONOS ACADEMY</h1>
      <p class="text-2xl text-amber-300">The Scholar's Odyssey</p>
      <p class="text-slate-400 mt-2">Fantasy-Themed AI Study Planner</p>
    </div>

    <div class="prose prose-invert max-w-none">

      <h2 class="text-3xl text-amber-400 border-b border-amber-500 pb-3 mb-8">Project Overview</h2>
      <p class="text-lg">
        Chronos Academy is a cinematic, fantasy-themed study planner for young students who love knights, heroes, and epic adventures. 
        It turns studying into a heroic journey in a magical academy.
      </p>

      <h2 class="text-3xl text-amber-400 border-b border-amber-500 pb-3 mt-16 mb-8">Step-by-Step Working Flow</h2>

      <!-- Step 1 -->
      <div class="mb-16">
        <h3 class="text-2xl text-amber-300 mb-4">1. Welcome Screen</h3>
        <p class="mb-4 text-slate-400">Beautiful landing page with swords logo and "Begin Journey" button.</p>
        <img src="1.jpg" alt="Welcome Screen" class="screenshot w-full">
      </div>

      <!-- Step 2 -->
      <div class="mb-16">
        <h3 class="text-2xl text-amber-300 mb-4">2. Chronos Gate (Login / Register)</h3>
        <p class="mb-4 text-slate-400">Create new account or login with existing credentials.</p>
        <img src="2.jpg" alt="Login Register" class="screenshot w-full">
        <img src="2-1.jpg" alt="Login Register" class="screenshot w-full">
      </div>

      <!-- Step 3 -->
      <div class="mb-16">
        <h3 class="text-2xl text-amber-300 mb-4">3. Course Selection</h3>
        <p class="mb-4 text-slate-400">Add and manage your study subjects.</p>
        <img src="3.jpg" alt="Course Selection" class="screenshot w-full">
      </div>

      <!-- Step 4 -->
      <div class="mb-16">
        <h3 class="text-2xl text-amber-300 mb-4">4. Daily Dashboard & Tasks</h3>
        <p class="mb-4 text-slate-400">Interactive timetable and checklist with progress tracking.</p>
        <img src="4.jpg" alt="Dashboard" class="screenshot w-full">
        <img src="4-1.jpg" alt="Dashboard" class="screenshot w-full">
      </div>
      <!-- Step 4 -->
      <div class="mb-16">
        <h3 class="text-2xl text-amber-300 mb-4">5. Congratulations Screen</h3>
        <p class="mb-4 text-slate-400">Big celebration when you finish all tasks of the day.</p>
        <img src="5.jpg" alt="Congrats" class="rounded-xl shadow-2xl">
        
      </div>

      <h2 class="text-3xl text-amber-400 border-b border-amber-500 pb-3 mt-16 mb-8">Technologies Used</h2>
      <ul class="list-disc list-inside space-y-2 text-slate-300">
        <li>HTML5 + Tailwind CSS</li>
        <li>React.js (via CDN)</li>
        <li>Babel for JSX</li>
        <li>Canvas for animated background</li>
        <li>Web Audio API for sound effects</li>
        <li>LocalStorage for saving data</li>
      </ul>

      <div class="mt-20 text-center text-slate-500 text-sm">
        Made with passion for students who want to study like heroes.<br>
        Chronos Academy © 2026
      </div>
    </div>
  </div>

</body>
</html>