import { build } from 'esbuild';

build({
  entryPoints: ['./api.ts'],
  outfile: 'dist/api.js',
  bundle: true,
  format: 'esm',
  minify: true,
  platform: 'neutral',
  target: 'esnext',
})