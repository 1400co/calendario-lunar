# Stage 1: Compilar la aplicación Angular
FROM node:18-alpine as build-stage
WORKDIR /app
COPY package*.json /app/
RUN npm install --legacy-peer
COPY ./ /app/
RUN npm run build --outputPath=./dist/demo1

# Stage 2: Servir la aplicación con Nginx
FROM nginx:alpine
COPY --from=build-stage /app/dist/demo1/ /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
