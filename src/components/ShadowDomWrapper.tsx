import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom/client';
// @ts-ignore
import styles from '../../styles/styles.css';

const ShadowDomWrapper: React.FC<{ children: JSX.Element }> = ({
  children,
}) => {
  const shadowRootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (shadowRootRef.current && !shadowRootRef.current.shadowRoot) {
      const shadowRoot = shadowRootRef.current.attachShadow({ mode: 'open' });
      const style = document.createElement('style');
      style.textContent = `@import url('../styles/styles.css')`;
      style.textContent = styles;
      shadowRoot.appendChild(style);

      const mountPoint = document.createElement('div');
      mountPoint.id = 'root';
      shadowRoot.appendChild(mountPoint);
      ReactDOM.createRoot(mountPoint).render(children);
    }
  }, [children]);

  return <div ref={shadowRootRef} />;
};

export default ShadowDomWrapper;
