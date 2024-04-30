pipeline {
    agent any
    
    environment {
        DOCKER_IMAGE = 'weather-app:latest' // Use the existing image name
    }
    triggers {
        pollSCM('*/1 * * * *') 
    }
    stages {
        stage('Build') {
            steps {
                script {
                    // Pull the latest changes from the repository
                    git 'https://github.com/Sanjaymatta/Weather_App.git'
                    
                    // Build the Docker image
                    bat "docker build -t ${DOCKER_IMAGE} ."
                }
            }
        }
        
        stage('Deploy') {
            steps {
                script {
                    // Push the Docker image to a registry or deploy it to a server
                    // Since you already have the image, you might push it to a registry or deploy it to your server
                    // Example: docker push ${DOCKER_IMAGE} or deploy to a server using SSH, Kubernetes, etc.
                    echo "Deploying Docker image: ${DOCKER_IMAGE}"
                }
            }
        }
    }
    
    post {
        success {
            // Send success notification
            echo 'Deployment successful!'
        }
        failure {
            // Send failure notification
            echo 'Deployment failed!'
        }
    }
}
