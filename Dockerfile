FROM eclipse-temurin:17-jdk-alpine

WORKDIR /app

# Copy the jar file
COPY build/libs/app.jar app.jar

# Add health check with correct path
HEALTHCHECK --interval=30s --timeout=3s \
  CMD wget --no-verbose --tries=1 --spider http://localhost:8080/api/actuator/health || exit 1

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "/app/app.jar"]
