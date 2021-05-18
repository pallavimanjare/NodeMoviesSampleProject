FROM node:10

# Set the work directory
WORKDIR /app
COPY package.json /app

# Install node modules
RUN npm install

# Add application files
COPY . /app
EXPOSE 8081
CMD ["npm", "start"]