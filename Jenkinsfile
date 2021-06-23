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
                sh 'npm install wdio-allure-reporter --save-dev'
                sh 'npm install -g allure-commandline --save-dev'
                sh 'docker pull elgalu/selenium'
                sh 'docker pull dosel/zalenium'
            }
        }
        
        stage ('Start Zalenium'){
                steps{
                    sh 'docker run --rm -ti --name zalenium -d -p 4444:4444 -e PULL_SELENIUM_IMAGE=true -v /var/run/docker.sock:/var/run/docker.sock -v /tmp/videos:/home/seluser/videos --privileged dosel/zalenium start'
                }
            }
        
        stage("tests") {
            steps {
                sh './node_modules/.bin/wdio run wdio.conf.ts'  
            }
        }
        
         stage("report") {
            steps {
                sh 'npm run report'  
            }
         } 
        
    }
            post {
                  cleanup {
                    sh 'docker stop zalenium'
                  }
               }
             
    
}
