import { transpile } from './src/engine.js';
import { JANO_PRELUDE } from './src/prelude.js';
import fs from 'fs';
import { URL, pathToFileURL } from 'url';

export async function resolve(specifier, context, defaultResolve) {
  const { parentURL = baseURL } = context;
  if (specifier.endsWith('.jf')) {
    return {
      url: pathToFileURL(specifier).href,
      format: 'module',
    };
  }
  return defaultResolve(specifier, context, defaultResolve);
}

export async function load(url, context, defaultLoad) {
  if (url.endsWith('.jf')) {
    const content = fs.readFileSync(new URL(url), 'utf8');
    const transpiled = transpile(content);
    const source = "use strict";\n${JANO_PRELUDE}\n\n${transpiled}`;
    return {
      source,
      format: 'module',
    };
  }
  return defaultLoad(url, context, defaultLoad);
}