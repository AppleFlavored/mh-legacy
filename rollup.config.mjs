import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import typescript from "@rollup/plugin-typescript";
import autoPreprocess from 'svelte-preprocess';
import postcss from 'rollup-plugin-postcss';

/** @type {import('rollup').RollupOptions[]} */
export default [
    {
        input: 'lib/background.ts',
        output: {
            file: 'dist/background.js',
            format: 'iife'
        },
        plugins: [
            typescript(),
        ]
    },
    {
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
    },
];