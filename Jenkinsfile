pipeline {
  agent any

  stages {
    stage('Clean Workspace') {
      steps {
        deleteDir()  // Deletes all files in the current workspace
      }
    }

    stage('Checkout') {
      steps {
        // This checks out the code from your configured Git SCM
        checkout scm
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

