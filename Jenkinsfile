pipeline {
    agent any
    
    environment {
        DOCKER_IMAGE = 'sanjaymatta36/weather-app:latest'
    }
    
    stages {
        stage('Build') {
            steps {
                script {
                    // Build the Docker image for the React application
                    bat "docker build -t %DOCKER_IMAGE% ."
                }
            }
        }
        
        
        
        stage('Deploy') {
            steps {
                // Push the Docker image to the registry
                bat "docker push %DOCKER_IMAGE%"
                
                // This section is commented out as it's not relevant for a Windows environment
                // You can include appropriate deployment steps for your Windows environment here
                
                // Example:
                // bat 'winpty ssh user@production-server "docker pull %DOCKER_IMAGE% && docker stop container_name && docker rm container_name && docker run -d -p 80:80 --name container_name %DOCKER_IMAGE%"'
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
