docker compose using: 
services:
  redis:
    image: redis:7
    container_name: redis
    restart: always
    # FIX: Explicitly disable protected mode to allow container communication
    command: ["redis-server", "--protected-mode", "no"]
    ports:
      - "6379:6379"
    healthcheck:
      test: ["CMD", "redis-cli", "ping"]
      interval: 10s
      timeout: 5s
      retries: 5
    networks:
      - mechyam-net

  mechyam-backend:
    image: mechyam-backend
    container_name: mechyam-backend
    restart: always
    depends_on:
      redis:
        condition: service_healthy
    ports:
      - "8081:8080"
    environment:
      - SPRING_PROFILES_ACTIVE=prod
      # UPDATED: Added DATA prefix for Spring Boot 3.5.6 compatibility
      - SPRING_DATA_REDIS_HOST=redis
      - SPRING_DATA_REDIS_PORT=6379
      - SPRING_REDIS_HOST=redis
      - SPRING_REDIS_PORT=6379
      - SERVER_FORWARD_HEADERS_STRATEGY=native
    volumes:
      - /opt/mechyam/uploads:/uploads
    networks:
      - mechyam-net

  frontend:
    image: mechyam-frontend-new:latest
    container_name: mychyam-frontend-new-cont
    restart: always
    depends_on:
      - mechyam-backend
    ports:
      - "80:80"
    networks:
      - mechyam-net

networks:
  mechyam-net:
