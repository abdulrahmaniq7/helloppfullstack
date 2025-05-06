pipeline {
  agent any

  stages {
    stage('Checkout') {
      steps {
        // This checks out the code from your configured Git SCM
        checkout scm
      }
    }

    stage('Build & Deploy') {
      steps {
        sh 'docker-compose down'
        sh 'docker-compose up --build -d'
      }
    }
  }
}

