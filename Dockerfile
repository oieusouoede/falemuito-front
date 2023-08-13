FROM node:latest as node
WORKDIR /app
COPY . .
RUN npm install
EXPOSE 80
RUN npm run build --prod
FROM nginx:alpine
COPY --from=node /app/dist/falemuito-front /usr/share/nginx/html