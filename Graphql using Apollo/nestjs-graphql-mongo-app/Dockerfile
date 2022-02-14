# You can use any Node version you like, see the full list of available versions:
# https://hub.docker.com/_/node
FROM node:14-alpine

ADD package.json /tmp/package.json

RUN rm -rf dist

# Install dependancies with yarn
RUN cd /tmp && yarn

# Copy all files to the /src directory
ADD ./ /src

## Remove the node_modules folder in /src and copy the new node_modules folder to /src
RUN rm -rf /src/node_modules && cp -a /tmp/node_modules /src/

# Define working directory
WORKDIR /src

# Run the build script
RUN npm run-script build

#Optional: Install pm2 globally
# Docs: https://pm2.keymetrics.io/
RUN npm install pm2 -g

#Expose port 300 where the qapplication will run
EXPOSE 3000

# Start the application with pm2
# You can also start it with just node
CMD ["pm2-runtime", "process.json"]
