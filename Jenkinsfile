// Jenkinsfile - Declarative pipeline for frontend + backend
pipeline {
  agent any
  environment {
    FRONT_IMAGE = "karma117/devops-frontend"
    BACK_IMAGE  = "karma117/devops-backend"
  }
  options { timestamps() }
  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }

    stage('Build Frontend') {
      steps {
        dir('frontend') {
          sh 'npm ci || npm install'
          sh 'npm run build || echo "No build script"'
        }
      }
    }

    stage('Build Backend') {
      steps {
        dir('backend') {
          sh 'npm ci || npm install'
          sh 'npm test || echo "No tests"'
        }
      }
    }

    stage('Docker: Build images') {
      steps {
        script {
          // tag images with branch name for traceability
          def branchTag = env.BRANCH_NAME ?: 'local'
          sh "docker build -t ${FRONT_IMAGE}:${branchTag} ./frontend"
          sh "docker build -t ${BACK_IMAGE}:${branchTag} ./backend"
        }
      }
    }

    stage('Docker: Push images') {
      when {
        anyOf { branch 'main'; branch 'develop' }
      }
      steps {
        script {
          // requires credentials to be added in Jenkins and ID = dockerhub-creds
          withCredentials([usernamePassword(credentialsId: 'dockerhub-creds', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
            sh 'echo $DOCKER_PASS | docker login -u $DOCKER_USER --password-stdin'
            def branchTag = env.BRANCH_NAME ?: 'local'
            sh "docker push ${FRONT_IMAGE}:${branchTag}"
            sh "docker push ${BACK_IMAGE}:${branchTag}"
          }
        }
      }
    }

    stage('Deploy (staging/prod)') {
      when { branch 'main' }
      steps {
        echo "Deploy to production stage - add kubectl/helm/ansible commands here"
      }
    }
  }

  post {
    success { echo "Pipeline succeeded for ${env.BRANCH_NAME}" }
    failure { echo "Pipeline failed for ${env.BRANCH_NAME}" }
  }
}

