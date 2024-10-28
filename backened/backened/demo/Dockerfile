FROM eclipse-temurin:17-jdk-alpine

WORKDIR /app

# Copy gradle files first
COPY build.gradle settings.gradle ./
COPY gradle gradle/
COPY gradlew .

# Make gradlew executable
RUN chmod +x gradlew

# Copy source code
COPY src src/

# Install necessary tools and build
RUN apk add --no-cache bash && \
    ./gradlew build -x test

EXPOSE 8080

CMD ["java", "-jar", "build/libs/demo-0.0.1-SNAPSHOT.jar"]
