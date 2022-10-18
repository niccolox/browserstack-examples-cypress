#!/usr/bin/env groovy

pipeline {

	agent {
		// this image provides everything needed to run Cypress
		docker {
		image 'cypress/base:10'
		}
	}

    stages {
        stage('Build') {
         steps {
            browserstack(credentialsId: 'cc6ebcaa-1a1c-4fdb-9381-d4041bd4d5ad') {
               // some example test commands ...
               sh 'npm install'
               sh 'npm install -g browserstack-cypress-cli'
               sh 'export CYPRESS_CACHE_FOLDER="/home/jenkins/agent/workspace/me/app/.cache"'
            }
         }
        }
        stage('Test') {
         steps {
            browserstack(credentialsId: 'cc6ebcaa-1a1c-4fdb-9381-d4041bd4d5ad') {
               // some example test commands ...
               // not using browserstack cli
			   // sh 'browserstack-cypress run'
				sh 'npm run bstack-single-onboarding'
            }
         }
        }
    }
}
