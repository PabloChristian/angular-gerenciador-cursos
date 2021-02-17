FROM node:10-alpine
RUN mkdir –p /src/
WORKDIR /src/
COPY * /src/
RUN npm install
RUN npm install express
COPY . /src/
EXPOSE 3000
CMD ["npm","start"]