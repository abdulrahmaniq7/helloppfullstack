//to install packages
docker-compose exec backend php composer.phar require --dev phpunit/phpunit --with-all-dependencies

//to run unit test
docker-compose exec backend php ./vendor/bin/phpunit tests/CalculatorTest.php

//jenkins to read token from docker
docker exec jenkins cat /var/jenkins_home/secrets/initialAdminPassword

//to re-start docker
sudo systemctl restart docker

//list ports
sudo lsof -i :80

//Stop All Running Containers (Clean Setup):
docker-compose down --remove-orphans
