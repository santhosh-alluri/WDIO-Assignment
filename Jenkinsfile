pipeline {

    agent any

    tools {
        nodejs "nodejs"
    }
    
    environment {
         wdio = "/home/san/.nvm/versions/node/v15.12.0/bin/wdio/"
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
                sh 'npx wdio'  
            }
        }
        
         stage("report") {
            steps {
                sh 'npm run report'  
            }
        }
    }
}
