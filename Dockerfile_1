# Stage 1: Build React (Vite)
FROM node:20-alpine AS build

WORKDIR /app

RUN apk add --no-cache \
    python3 \
    make \
    g++ \
    gcc \
    libc6-compat \
    binutils

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build   # outputs to /app/dist

# Stage 2: Nginx
FROM nginx:alpine
COPY nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

