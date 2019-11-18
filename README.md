# Full Stack Engineer Challenge

## Task Completed

- [Devops Exercise](#devops-exercise)
- [Backend Exercise](#backend-exercise)
- [Frontend Exercise](#frontend-exercise)

## Steps to run the project using Docker.

**Note** - Make sure you have docker and docker-compose installed on your local machine.

- On the root directly of the project where the docker-compose file is present just run `docker-compose up` and wait for the script to finish setup. For running the docker-compose in `detached mode` just add `docker-compose -d`.
- After the completion of the script go to address `localhost:3000` on the browser to see the app running.

## Steps to run the project locally without Docker.

- On the root directory of `api` run `npm i` to install all server dependencies.
- Then run `npm run start-dev` to run the development server with watcher.

- On the root directory of `dashboard` run `yarn install` to install all client dependencies.
- Then run `yarn start` to start the client on `localhost:3000`.  