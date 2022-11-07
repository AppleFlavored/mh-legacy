import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import typescript from "@rollup/plugin-typescript";
import autoPreprocess from 'svelte-preprocess';
import postcss from 'rollup-plugin-postcss';

export default {
    input: 'src/setup.ts',
    output: {
        file: 'dist/bundle.js',
        format: 'iife'
    },
    plugins: [
        svelte({
            preprocess: autoPreprocess({
                postcss: true,
            }),
        }),
        typescript(),
        postcss({
            extract: 'bundle.css',
        }),
        resolve({ browser: true }),
    ],
};