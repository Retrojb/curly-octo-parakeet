import * as path from 'path';
import { getBaseConfig } from '../../vite.config';
import { VitePluginNode } from 'vite-plugin-node';

export default getBaseConfig({
    plugins: [...VitePluginNode({
        adapter: 'express',
        appPath: "./index.ts",
        tsCompiler: 'esbuild'
    })],
    lib: {
        entry: path.resolve(__dirname, "src/index.ts"),
        name: "ViteCommon",
        fileName: "vite-common"
    }
})