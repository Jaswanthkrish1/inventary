ARG BUILD_IMAGE=node:18.12.1-alpine3.17
ARG PROD_IMAGE=node:18.12.1-alpine3.17

# Install Dependencies and build
FROM ${BUILD_IMAGE} as BUILD
WORKDIR /app
COPY ./package.json ./
COPY ./yarn.lock ./
# COPY ./decorate-angular-cli.js ./
RUN yarn install --frozen-lockfile
COPY ./ ./
ENV NODE_ENV=production
RUN yarn build api --prod
# RUN yarn build web

# Install Production Dependencies
FROM ${PROD_IMAGE} as DEPENDENCIES
WORKDIR /app
ENV NODE_ENV=production
COPY ./package.json ./
COPY ./yarn.lock ./
COPY --from=BUILD /usr/local/share/.cache/yarn /usr/local/share/.cache/yarn
RUN yarn install --frozen-lockfile --production=true --ignore-scripts && yarn cache clean --force

# Release
FROM ${PROD_IMAGE} as RELEASE
WORKDIR /app
EXPOSE 3000
ENV NODE_ENV=production
# ENV TZ=Asia/Kolkata
# RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone
COPY --from=DEPENDENCIES /app/node_modules ./node_modules
COPY --from=BUILD /app/dist/apps/api ./
CMD ["node", "./api/main.js"]
