FROM node:10-alpine
RUN mkdir –p /src/
WORKDIR /src/
COPY * /src/
RUN npm install
COPY . /src/
EXPOSE 3000
CMD [“npm”,”start”]