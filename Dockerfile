FROM node:12

# where our app will live in the container
# why create a working directory: https://stackoverflow.com/a/49903714/9953550
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
