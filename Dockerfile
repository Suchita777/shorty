FROM node:16

WORKDIR /shorty

COPY package.json ./
COPY yarn.lock ./
COPY . .


RUN yarn install
RUN yarn prisma migrate dev --name init


EXPOSE 5000

CMD ["yarn","start"]