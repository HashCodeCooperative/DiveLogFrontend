# pull official base image
FROM node:10.19.0-alpine

# set working directory
WORKDIR /

# add `/node_modules/.bin` to $PATH
ENV PATH /node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install
RUN npm install react-scripts@4.0.1 -g --silent

# add app
COPY . ./

# start app
CMD ["npm", "start"]
