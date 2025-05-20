FROM jenkins/jenkins:lts

# Install Docker and Docker Compose
USER root
#RUN apt-get update && \
#    apt-get install -y docker.io docker-compose && \
#    apt-get clean

#RUN apt-get update && \
#    apt-get install -y \
#        docker.io \
#        docker-compose \
#        curl \
#        unzip \
#        git \
#        php \
#        php-cli \
#        php-mbstring \
#        php-xml \
#        php-curl && \
#    curl -sS https://getcomposer.org/installer | php && \
#    mv composer.phar /usr/local/bin/composer && \
#    apt-get clean && \
#    rm -rf /var/lib/apt/lists/*

# Install PHP, Composer, Node.js, and Cypress dependencies
RUN apt-get update && \
    apt-get install -y \
        docker.io \
        docker-compose \
        curl \
        unzip \
        git \
        php \
        php-cli \
        php-mbstring \
        php-xml \
        php-curl \
        build-essential \
        ca-certificates \
        libgtk2.0-0 \
        libgtk-3-0 \
        libnotify-dev \
        libgconf-2-4 \
        libnss3 \
        libxss1 \
        libasound2 \
        libxtst6 \
        xauth \
        xvfb \
        libgbm-dev \
        libsecret-1-dev \
        fonts-liberation \
        libappindicator3-1 \
        lsb-release \
        wget \
        gnupg && \
    curl -sS https://getcomposer.org/installer | php && \
    mv composer.phar /usr/local/bin/composer && \
    curl -fsSL https://deb.nodesource.com/setup_18.x | bash - && \
    apt-get install -y nodejs && \
    npm install -g yarn && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

# Verify tools (optional)
RUN php -v && composer --version && node -v && npm -v && yarn -v

# Switch back to jenkins user
USER jenkins

