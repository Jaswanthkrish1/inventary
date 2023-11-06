import { graphqlConfig } from "./graphql.config";
import { jwtOptions } from "./jwt.config";

export const config = {
    ignoreEnvFile: true,
    isGlobal: true,
    load: [graphqlConfig, jwtOptions],
  };