This is a development version!!! The app communicates with the backlog server started locally at http://localhost:90  
The backlog container can be started at port 90 with the following Docker command (requires Docker as a prerequisite - can be downloaded from https://www.docker.com):

### 'docker run -d -p 90:80 mibobdocker/divinglogapi'

Runs a Docker container with the backlog server listening on port 90 (http://localhost:90)
Once the backlog is started you can run the app with one of the following options:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### 'docker run -it --rm -p 1337:70 lukaszk76/divelog'

Starts a ready Docker container with the frontend.
Open [http://localhost:1337](http://localhost:1337) to view it in the browser.

