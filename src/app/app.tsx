import './styles/index.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { AppRouter } from './router';
import { store } from './store';

async function enableMocking() {
  if (import.meta.env.MODE === 'development') {
    const { worker } = await import('@/mocks/browser');
    return worker.start({
      onUnhandledRequest: 'bypass',
    });
  }

  return Promise.resolve();
  // `worker.start()` returns a Promise that resolves
  // once the Service Worker is up and ready to intercept requests.
}

enableMocking().then(() =>
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </StrictMode>,
  ),
);
