import { defineConfig, PluginOption } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import tsconfigPaths from 'vite-tsconfig-paths';
import { visualizer } from 'rollup-plugin-visualizer';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import Unfonts from 'unplugin-fonts/vite';

const ReactCompilerConfig = {
    compilationMode: 'annotation',
};

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vanillaExtractPlugin(),
        tsconfigPaths(),
        visualizer() as PluginOption,
        react({
            // babel: {
            //     plugins: [
            //         ["babel-plugin-react-compiler", ReactCompilerConfig],
            //     ]
            // }
        }),
        Unfonts({
            google: {
                preconnect: true,
                families: [
                    {
                        name: 'Poppins',
                        styles: 'wght@100;200;300;400;500;600;700;800;900',
                    },
                ],
            },
        }),
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src/'),
            '@assets': `${path.resolve(__dirname, './src/assets/')}`,
            '@clients': `${path.resolve(__dirname, './src/clients/')}`,
            '@common': `${path.resolve(__dirname, './src/common/')}`,
            '@components': `${path.resolve(__dirname, './src/components/')}`,
            '@configs': `${path.resolve(__dirname, './src/configs/')}`,
            '@graphql': `${path.resolve(__dirname, './src/graphql/')}`,
            '@hooks': `${path.resolve(__dirname, './src/hooks/')}`,
            '@modules': `${path.resolve(__dirname, './src/modules/')}`,
            '@public': `${path.resolve(__dirname, './public/')}`,
            '@routes': `${path.resolve(__dirname, './src/routes/')}`,
            '@stores': `${path.resolve(__dirname, './src/stores/')}`,
            '@themes': `${path.resolve(__dirname, './src/themes/')}`,
        },
    },
    server: {
        port: 3000,
        host: true,
    },
});
