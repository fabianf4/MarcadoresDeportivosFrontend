FROM node:18-alpine3.15 AS node
WORKDIR /app
COPY . .
RUN npm install
ENV VITE_URL_API=http://localhost:3000/
RUN npm run build

FROM nginx:1.23.2-alpine
COPY --from=node /app/dist /usr/share/nginx/html/