import { useState, useEffect } from 'react';

export function useBackendHealth() {
  const [status, setStatus] = useState({
    dotClass: 'connecting',
    title: 'Connecting...'
  });

  useEffect(() => {
    let timerId = null;
    let isCancelled = false;

    async function checkHealth() {
      try {
        const res = await fetch('/api/health');
        if (isCancelled) return;

        if (res.ok) {
          const data = await res.json();
          if (data.status === 'ready') {
            setStatus({ dotClass: 'ready', title: 'Model Ready' });
          } else if (data.status === 'loading') {
            setStatus({ dotClass: 'generating', title: 'Loading Model...' });
            timerId = setTimeout(checkHealth, 2000);
          } else {
            setStatus({ dotClass: 'error', title: 'Model Error' });
            timerId = setTimeout(checkHealth, 3000);
          }
        } else {
          setStatus({ dotClass: 'error', title: 'Server Error' });
          timerId = setTimeout(checkHealth, 3000);
        }
      } catch {
        if (isCancelled) return;
        setStatus({ dotClass: 'error', title: 'Offline' });
        timerId = setTimeout(checkHealth, 4000);
      }
    }

    checkHealth();

    return () => {
      isCancelled = true;
      if (timerId) clearTimeout(timerId);
    };
  }, []);

  return status;
}
