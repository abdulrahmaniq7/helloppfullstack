pipeline {
  agent any

  stages {
    stage('Clean Workspace') {
      steps {
        deleteDir()  // Clean workspace to avoid leftovers
      }
    }

    stage('Checkout') {
      steps {
        git url: 'https://github.com/abdulrahmaniq7/helloppfullstack.git', branch: 'main'
      }
    }

    stage('Debug Path') {
      steps {
        sh 'pwd'
        sh 'ls -la'
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

