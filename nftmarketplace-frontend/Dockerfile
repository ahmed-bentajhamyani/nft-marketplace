# First stage
FROM node:latest as build
RUN mkdir -p /app

WORKDIR /app

COPY package.json /app/
RUN npm install

COPY . /app/
RUN npm run build

# Second stage
FROM nginx:latest
COPY --from=build /app/dist/nftmarketplace-frontend /usr/share/nginx/html