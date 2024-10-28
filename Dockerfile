# Build stage
FROM eclipse-temurin:17-jdk-alpine AS builder
WORKDIR /build

# Install necessary build tools
RUN apk add --no-cache bash

# Copy the entire demo directory
COPY demo demo/

# Set working directory to demo
WORKDIR /build/demo

# Make gradlew executable
RUN chmod +x ./gradlew

# Build
RUN ./gradlew build -x test

# Run stage
FROM eclipse-temurin:17-jdk-alpine
WORKDIR /app

# Install wget for health check
RUN apk add --no-cache wget

# Copy JAR from the correct location
COPY --from=builder /build/demo/build/libs/app.jar app.jar

# Add health check with correct path
HEALTHCHECK --interval=30s --timeout=3s \
  CMD wget --no-verbose --tries=1 --spider http://localhost:8080/api/actuator/health || exit 1

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "/app/app.jar"]
