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
        script {
            // Push the Docker image to the repository
            docker.withRegistry('https://index.docker.io/v1/', 'docker-hub-token') {
                docker.image('sanjaymatta36/weather-app:latest').push()
            }
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
