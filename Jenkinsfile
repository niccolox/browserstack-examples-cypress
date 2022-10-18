#!/usr/bin/env groovy

pipeline {

	agent {
		// this image provides everything needed to run Cypress
		docker {
			image 'cypress/base:16.13.0'
            args '-u root'
		}
	}

    stages {
		stage('Build') {
		steps {
			// there a few default environment variables on Jenkins
			// on local Jenkins machine (assuming port 8080) see
			// http://localhost:8080/pipeline-syntax/globals#env
			echo "Running build ${env.BUILD_ID} on ${env.JENKINS_URL}"
			sh 'npm ci'
			sh 'npm run cy:verify'
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
