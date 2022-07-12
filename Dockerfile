FROM node:16-alpine3.16

ARG NEXT_PUBLIC_PRODUCTION_ENDPOINT

RUN apk add --no-cache tini
ENTRYPOINT ["/sbin/tini", "--"]
EXPOSE 7777
RUN apk add --no-cache libc6-compat

RUN mkdir /app && chown -R node:node /app
WORKDIR /app
COPY --chown=node:node package.json package-lock.json ./
RUN npm install && npm cache clean --force
COPY --chown=node:node . ./

USER node
CMD ["npm", "run", "dev"]