#!/usr/bin/env groovy

pipeline {

    agent {
        docker {
            image 'node'
            args '-u root'
        }
    }

    stages {
        stage('Build') {
         steps {
            browserstack(credentialsId: 'cc6ebcaa-1a1c-4fdb-9381-d4041bd4d5ad') {
               // some example test commands ...
			   sh 'sudo npm install --unsafe-perm=true --allow-root cypress'
               sh 'export CYPRESS_CACHE_FOLDER="/home/jenkins/agent/workspace/project/app/.cache/"'
               sh 'npm install'
               sh 'npm install -g browserstack-cypress-cli'
             }
         }
        }
        stage('Test') {
         steps {
            browserstack(credentialsId: 'cc6ebcaa-1a1c-4fdb-9381-d4041bd4d5ad') {
               // some example test commands ...
               sh 'npm run bstack-single-onboarding'
            }
         }
        }
    }
}
