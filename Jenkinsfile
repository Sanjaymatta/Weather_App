pipeline {
    agent any
    
    environment {
        DOCKER_IMAGE = 'sanjaymatta36/weather-app:latest'
        DOCKER_CREDENTIALS = credentials('dckr_pat_r_DkHSX2SPVPZ6i3Z5JYSWe2zvY')
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
                    // Push the Docker image to the repository using credentials
                    docker.withRegistry('https://index.docker.io/v2/', DOCKER_CREDENTIALS) {
                        docker.image(DOCKER_IMAGE).push()
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
