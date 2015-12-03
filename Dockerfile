FROM node:5.0

RUN npm install -g babel-cli
RUN npm install -g pm2

RUN mkdir -p /web/app

# Copy dependencies & install them
# This layer will cache dependencies while they don't change
COPY package.json /web/app/package.json

RUN cd /web/app/ && \
    npm install

# Copy app directory
# This layer will cache files while they don't change
COPY . /web/app

WORKDIR /web/app

# Set Node environment
ENV NODE_ENV production

# Expose port
EXPOSE 8080

# Run app
# CMD sleep 5 && pm2 start index.js -x --no-daemon -n node-app
CMD sleep 5 && npm start
