// Resolve gemini key: ?key= URL param > localStorage > ./keys.json > overlay.
export const keyReady = (async function () {
  const STORAGE_KEY = 'gemini-api-key';
  const params = new URLSearchParams(window.location.search);
  if (params.has('key')) {
    window.localStorage.setItem(STORAGE_KEY, params.get('key'));
    return;
  }
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored) {
    params.set('key', stored);
    const newUrl =
      window.location.pathname + '?' + params.toString() + window.location.hash;
    window.history.replaceState(null, '', newUrl);
    return;
  }
  try {
    const res = await fetch('./keys.json', {cache: 'no-store'});
    if (res.ok) {
      const k = (await res.json()).key;
      if (k) {
        window.localStorage.setItem(STORAGE_KEY, k);
        params.set('key', k);
        window.location.search = '?' + params.toString();
        return;
      }
    }
  } catch (_) {
    // no keys.json, fall through to overlay
  }
  const overlay = document.getElementById('keyOverlay');
  const input = document.getElementById('keyInput');
  const save = document.getElementById('keySave');
  overlay.style.display = 'flex';
  const submit = () => {
    const k = input.value.trim();
    if (!k) return;
    window.localStorage.setItem(STORAGE_KEY, k);
    params.set('key', k);
    window.location.search = '?' + params.toString();
  };
  save.addEventListener('click', submit);
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') submit();
  });
  input.focus();
})();
