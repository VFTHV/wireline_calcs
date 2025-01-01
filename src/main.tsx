import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { BrowserRouter } from 'react-router-dom';
import { store } from './store';
import { Provider } from 'react-redux';
import ShadowDomWrapper from './components/ShadowDomWrapper.tsx';

ReactDOM.createRoot(
  document.getElementById('root-original') as HTMLElement
).render(
  <ShadowDomWrapper>
    <Provider store={store}>
      <BrowserRouter>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </BrowserRouter>
    </Provider>
  </ShadowDomWrapper>
);
