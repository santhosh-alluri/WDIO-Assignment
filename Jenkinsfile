pipeline {

    agent any

    tools {
        nodejs "nodejs"
    }

    stages {

        stage("scm") {
            steps {
                echo '$PATH'
                sh 'npm install'
            }
        }
        
        stage("tests") {
            steps {
                sh 'npm run wdio'  
            }
        }
    }
}
