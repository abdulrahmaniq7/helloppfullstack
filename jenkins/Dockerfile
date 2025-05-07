FROM jenkins/jenkins:lts

# Install Docker and Docker Compose
USER root
RUN apt-get update && \
    apt-get install -y docker.io docker-compose && \
    apt-get clean

# Switch back to jenkins user
USER jenkins

