# Use a light version of Node
# Stage 1: Build & Test
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
# Run tests during the build process
RUN npm test
# Stage 2: Production Run
FROM node:18-alpine
WORKDIR /app
# Only copy the necessary files and production dependencies
COPY package*.json ./
RUN npm install --production
COPY --from=builder /app/Index.js ./Index.js
EXPOSE 3000
CMD ["node", "Index.js"]