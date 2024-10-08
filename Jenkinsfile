pipeline {
    agent any
    
    environment {
        DOCKER_IMAGE = 'weather-app:latest' 
    }
    triggers {
        pollSCM('*/2 * * * *') 
    }
    stages {
        stage('Build') {
            steps {
                script {
                    git 'https://github.com/Sanjaymatta/Weather_App.git'
                    bat "docker build -t ${DOCKER_IMAGE} ."
                }
            }
        }
        
        stage('Deploy') {
            steps {
                script {
                    echo "Deploying Docker image: ${DOCKER_IMAGE}"
                    // Check if the container already exists and stop/remove it
                    bat "docker ps -a | findstr weather-app-1 && docker stop weather-app-1 && docker rm weather-app-1 || exit /b 0"
                    // Create a new container
                    bat "docker run -d --name weather-app-1 -p 3000:3000 ${DOCKER_IMAGE}"
                }
            }
        }
    }
    
    post {
        success {
            echo 'Deployment successful!'
        }
        failure {
            echo 'Deployment failed!'
        }
    }
}
