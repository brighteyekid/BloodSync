# Build stage
FROM eclipse-temurin:17-jdk-alpine AS builder

# Set working directory
WORKDIR /build/demo

# Install necessary build tools
RUN apk add --no-cache bash

# Copy the current directory contents
COPY . .

# List contents for debugging
RUN ls -la

# Make gradlew executable
RUN chmod +x gradlew

# Build
RUN ./gradlew build -x test

# Run stage
FROM eclipse-temurin:17-jdk-alpine
WORKDIR /app

# Install wget for health check
RUN apk add --no-cache wget

# Copy JAR from the correct location
COPY --from=builder /build/demo/build/libs/*.jar app.jar

# Add health check with correct path
HEALTHCHECK --interval=30s --timeout=3s \
  CMD wget --no-verbose --tries=1 --spider http://localhost:8080/api/actuator/health || exit 1

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "/app/app.jar"]
