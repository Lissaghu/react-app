import { Configuration as DevServerConfigurations } from "webpack-dev-server";

import { BuildOptions } from "./types/config";

export const buildDevServer = (options: BuildOptions): DevServerConfigurations => {
  const { port } = options;

  return {
    port,
    open: true,
    historyApiFallback: true
  }
}