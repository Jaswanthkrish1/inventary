import typeormConfig from "./typeorm.config";

export const config = {
    ignoreEnvFile: true,
    isGlobal: true,
    load: [typeormConfig,],
  };