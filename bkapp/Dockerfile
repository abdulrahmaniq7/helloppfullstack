FROM php:8.1-cli

RUN apt-get update && apt-get install -y unzip && docker-php-ext-install pdo pdo_mysql

WORKDIR /app
COPY . .

RUN curl -sS https://getcomposer.org/installer | php && php composer.phar install

CMD ["php", "-S", "0.0.0.0:8000"]
EXPOSE 8000

