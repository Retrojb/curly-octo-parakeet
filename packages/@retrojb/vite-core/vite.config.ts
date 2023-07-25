import * as path from "path";
import { getBaseConfig } from '../../../vite.config';

export default getBaseConfig({
  lib: {
    entry: path.resolve(__dirname, "src/main.tsx"),
    name: "ViteCommon",
    fileName: "vite-common"
  }
})
