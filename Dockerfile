FROM node:16.13.1-alpine as builde
RUN mkdir /code
WORKDIR /code
ADD ./package.json ./
ADD ./yarn.lock ./
RUN yarn install
COPY . /code
CMD ["yarn", "dev"]
