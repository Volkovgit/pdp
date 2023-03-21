FROM node:alpine
WORKDIR /app
RUN npm install json-server

COPY . .
EXPOSE 3000
CMD ["node","server.js"]