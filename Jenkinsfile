pipeline {

    agent any

    tools {
        nodejs "nodejs"
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
