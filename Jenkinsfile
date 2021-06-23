pipeline {

    agent any

    tools {
        npm "nodejs"
    }

    stages {

        stage("scm") {
            steps {
                echo $PATH
                sh 'npm install'
            }
        }
    }
}