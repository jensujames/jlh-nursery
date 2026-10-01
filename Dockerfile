# Multi-stage production Dockerfile
FROM node:20-alpine AS builder

WORKDIR /app

# Build Client
COPY client/package*.json ./client/
RUN cd client && npm install

COPY client/ ./client/
RUN cd client && npm run build

# Production Server Setup
FROM node:20-alpine AS runner

WORKDIR /app

COPY server/package*.json ./server/
RUN cd server && npm install --production

COPY server/ ./server/
COPY --from=builder /app/client/dist ./client/dist

ENV NODE_ENV=production
ENV PORT=5000

EXPOSE 5000

CMD ["node", "server/server.js"]
