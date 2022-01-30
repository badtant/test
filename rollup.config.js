import glob from 'glob';

import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import multiInput from 'rollup-plugin-multi-input';
import postcssCustomProperties from 'postcss-custom-properties';

import packageJson from './package.json';

export default {
    input: ['src/**/*.js'],
    output: {
        dir: 'dist',
        format: 'cjs'
    },
    external: (id) => {
        if (typeof packageJson.peerDependencies[id] !== 'undefined') {
            return true;
        }

        const idSplit = id.split('/');
        const mainPackage = idSplit.length > 0 ? idSplit[0] : null;

        if (mainPackage && typeof packageJson.peerDependencies[mainPackage] !== 'undefined') {
            return true;
        }

        return false;
    },
    plugins: [
        multiInput(),
        babel({
            exclude: 'node_modules/**',
            babelrc: false,
            babelHelpers: 'bundled',
            presets: [
                ['@babel/preset-env', {
                    modules: false
                }],
                '@babel/preset-react'
            ],
            plugins: [
                '@babel/plugin-proposal-object-rest-spread'
            ]
        }),
        resolve(),
        commonjs(),
        postcss({
            modules: true,
            plugins: [
                postcssCustomProperties({
                    importFrom: glob.sync('./src/helpers/css/*.css'),
                    preserve: false
                })
            ]
        })
    ]
};
