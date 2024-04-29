
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
                    sh "docker build -t $DOCKER_IMAGE ."
                }
            }
        }
        
        stage('Test') {
            steps {
                // Add your test commands or scripts here
                // For example:
                // sh 'npm test'
            }
        }
        
        stage('Deploy') {
    steps {
        // Push the Docker image to the registry
        sh "docker push $DOCKER_IMAGE"
        
        // SSH into your production server and deploy the Docker container
        // For example:
        // ssh user@production-server 'docker pull $DOCKER_IMAGE && docker stop container_name && docker rm container_name && docker run -d -p 80:80 --name container_name $DOCKER_IMAGE'
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
