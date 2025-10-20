import React from 'react';
import ReactDOM from 'react-dom/client';
import { SchemaEditor, LayoutTypes } from '@teamdigitale/schema-editor';
import 'bootstrap-italia/dist/css/bootstrap-italia.min.css';
import '@fontsource/titillium-web';
import '@fontsource/roboto-mono';
import '@fontsource/lora';
import '@teamdigitale/schema-editor/dist/style.css';

type RenderOptions = { 
  url: string; 
  viewer?: boolean;
  [k: string]: any  // per contenere più parametri di quelli definiti (url, viewer)
};

/**
 * Monta lo SchemaEditor dentro l'elemento selezionato.
 */
export function renderSchemaEditor(selector: string | Element, options: RenderOptions) {
  const el = typeof selector === 'string' ? document.querySelector(selector) : selector;
  if (!el) {
    console.error('[renderSchemaEditor] root element not found:', selector);
    return;
  }

  const layout = options.viewer ? LayoutTypes.VIEWER : LayoutTypes.EDITOR;

  ReactDOM.createRoot(el as HTMLElement).render(
    <React.StrictMode>
      <SchemaEditor layout={layout} {...options} />
    </React.StrictMode>
  );
}

// Espongo la funzione globalmente
;(window as any).renderSchemaEditor = renderSchemaEditor;
