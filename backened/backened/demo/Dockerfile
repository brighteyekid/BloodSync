FROM eclipse-temurin:17-jdk-alpine

WORKDIR /app

# Copy the entire demo directory
COPY . .

# Install necessary tools
RUN apk add --no-cache bash

# Make gradlew executable and build
RUN chmod +x ./gradlew && \
    ./gradlew build -x test

# Add health check
HEALTHCHECK --interval=30s --timeout=3s \
  CMD wget --no-verbose --tries=1 --spider http://localhost:8080/api/actuator/health || exit 1

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "build/libs/*.jar"]
