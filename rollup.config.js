import pkg from './package.json';

export default [
    {
        input: 'src/scatter.js',
        external: Object.keys(pkg.dependencies),
        output: [
            { file: pkg.main, format: 'es' },
            { file: pkg.module, format: 'cjs' }
        ],
    }
];