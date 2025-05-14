# Use official PHP with Apache image
FROM php:8.1-apache

# Install dependencies
RUN apt-get update && apt-get install -y openssl unzip && docker-php-ext-install pdo pdo_mysql

# Set working directory
WORKDIR /var/www/html

# Copy project files
COPY . .

# Copy SSL configuration (optional, for HTTPS)
COPY config/ssl.conf /etc/apache2/sites-available/ssl.conf
COPY server.crt /etc/ssl/server.crt
COPY server.key /etc/ssl/server.key

# Enable SSL and your custom SSL site configuration
RUN a2enmod ssl
RUN a2ensite ssl.conf

# Enable Apache Rewrite Module (for .htaccess support)
RUN a2enmod rewrite

# Expose HTTP and HTTPS ports
EXPOSE 80 443

# Start Apache server
CMD ["apache2-foreground"]

