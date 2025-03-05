pipeline {
    agent any

    triggers {
        pollSCM('* * * * *')
    }

    environment {
        TOMCAT_WEBAPPS = '/usr/local/tomcat/webapps'
    }

    stages {
        stage('Checkout Code') {
            steps {
                git branch: 'prod', 
                    url: 'https://github.com/soapmactavish23/venomous-ui',
                    credentialsId: 'GitHub-PAT'
            }
        }

        stage('Build Frontend') {
            steps {
                sh 'yarn install'
                sh 'yarn build'
            }
        }

        stage('Deploy Frontend') {
            steps {
                sh '''
                    rm -rf $TOMCAT_WEBAPPS/publicacoes
                    mkdir -p $TOMCAT_WEBAPPS/publicacoes
                    cp -r dist/* $TOMCAT_WEBAPPS/publicacoes/
                '''
            }
        }
    }
}
