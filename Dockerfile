FROM node:current-slim

WORKDIR /home/node/api

COPY package.json yarn.* ./

RUN yarn 

COPY . .

EXPOSE 3333

ENTRYPOINT ["./init.sh"]  