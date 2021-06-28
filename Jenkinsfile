@Library('Jenkins-Shared-Lib@master') _

pipeline {

    agent any

    tools {
        nodejs "nodejs"
    }
    
    environment {
         wdio = "/home/san/.nvm/versions/node/v15.12.0/bin/wdio/"
    }

    stages {
        stage("shared lib") {
            
            steps {
                
            build()
            }
        }
         
      }
             
    
}
