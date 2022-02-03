
#Node Version
FROM node:16

#Choose app directory.
WORKDIR /ICS

#Install app dependencies
COPY package*.json ./
RUN npm install

#Bundle app source
COPY . .
EXPOSE 8080
CMD npm start


