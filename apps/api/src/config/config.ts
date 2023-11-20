import { graphqlConfig } from "./graphql.config";
import { jwtConfig, jwtOptions } from "./jwt.config";
import { typeormConfig } from "./typeorm.config";

export const config = {
    ignoreEnvFile: true,
    isGlobal: true,
    load: [typeormConfig, graphqlConfig, jwtConfig],
  };