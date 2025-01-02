import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { store } from './store';
import { Provider } from 'react-redux';
import ShadowDomWrapper from './components/ShadowDomWrapper.tsx';

ReactDOM.createRoot(
  document.getElementById('root-original') as HTMLElement
).render(
  <ShadowDomWrapper>
    <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>
  </ShadowDomWrapper>
);
