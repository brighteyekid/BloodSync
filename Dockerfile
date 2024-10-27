FROM eclipse-temurin:17-jdk-alpine

# Add curl for health check
RUN apk add --no-cache curl

WORKDIR /app

# Copy the jar file
COPY demo/build/libs/*.jar app.jar

# Add health check
HEALTHCHECK --interval=30s --timeout=3s \
  CMD curl -f http://localhost:8080/actuator/health || exit 1

ENTRYPOINT ["java", "-jar", "/app/app.jar"]
