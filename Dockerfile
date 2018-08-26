FROM mhart/alpine-node:10 as base

ARG PORT
ARG PRISMA_ENDPOINT
ARG PRISMA_SECRET
ARG PRISMA_MANAGEMENT_API_SECRET
ARG APP_SECRET

WORKDIR /usr/src
COPY package.json yarn.lock /usr/src/
RUN yarn install
COPY . .
RUN yarn build

FROM mhart/alpine-node:base-10
WORKDIR /usr/src
ENV NODE_ENV="production"
COPY --from=base /usr/src/dist .
EXPOSE 3000
CMD ["node"]
