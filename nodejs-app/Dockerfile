FROM node:8

WORKDIR /app

RUN npm install -g contentful-cli

COPY app/package.json .
RUN npm install

VOLUME ["/app"]

USER node
EXPOSE 3000

CMD ["npm", "run", "start:dev"]