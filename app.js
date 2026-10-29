(() => {
  'use strict';

  const parts = Array.from({ length: 11 }, (_, i) => `app/part${String(i).padStart(2, '0')}.txt`);

  Promise.all(parts.map(async (path) => {
    const response = await fetch(path, { cache: 'no-store' });
    if (!response.ok) throw new Error(`Could not load ${path}: ${response.status}`);
    return response.text();
  }))
    .then((sources) => {
      const source = sources.join('');
      new Function(source)();
    })
    .catch((error) => {
      console.error(error);
      const app = document.getElementById('app');
      if (app) {
        app.innerHTML = '<main class="complete-shell"><section class="complete-card"><h1>Unable to load the practice test</h1><p>Please refresh the page. If the problem continues, verify that all files in the app folder were published.</p></section></main>';
      }
    });
})();
