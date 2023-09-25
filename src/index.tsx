import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ParallaxProvider } from 'react-scroll-parallax';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <>
  {/* @ts-ignore */}
    <ParallaxProvider children={<div></div>}>
      <App />
    </ParallaxProvider>
  </>
);
reportWebVitals();
