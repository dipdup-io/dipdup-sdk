import { Options } from 'tsup'

export const tsup: Options = {
  entryPoints: ['api.ts'],
  // minify: true,
  format: ['esm'],
  bundle: true,
  esbuildOptions(options, context) {
    // options.bundle = true;
    options.platform = 'browser';
    options.target = 'esnext';
    // return options;
  },
}