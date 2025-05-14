//manual
pipeline {
  agent any

  stages {
    stage('Checkout') {
      steps {
        git branch: 'main', url:'https://github.com/abdulrahmaniq7/helloppfullstack'
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


//new
pipeline {
  agent any

  environment {
    DOCKER_BUILDKIT = 1   // Use Docker BuildKit for faster builds
  }

  stages {
    stage('Clean Workspace') {
      steps {
        deleteDir()  // Ensure clean workspace
      }
    }

    stage('Checkout') {
      steps {
        // This checks out the code from your configured Git SCM
        checkout scm
      }
    }

    stage('Build & Deploy') {
      steps {
        script {
          try {
            echo "Stopping existing containers..."
            sh 'docker-compose down || true'  // Ensure it doesn't fail if containers are not running
            echo "Building and starting containers..."
            sh 'docker-compose up --build -d'
          } catch (e) {
            echo "Error during Build & Deploy: ${e}"
            error("Build & Deploy failed")
          }
        }
      }
    }
  }
}


//working
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

"Hello, I’m Abdul Rahman, a Senior Software Developer with extensive experience in full-stack development, specializing in PHP, JavaScript, React, Vue, and backend technologies. I have led the development of CRM, ERP, and customer-facing applications, focusing on building scalable, secure, and efficient systems. My expertise also includes Docker, Kubernetes, and CI/CD tools like Jenkins and GitLab CI, which I leverage for seamless deployment and automation. Currently, I work at FOFI IoT Labs, where I have successfully developed end-to-end solutions, including IoT-enabled platforms."
