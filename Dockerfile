FROM node:16-alpine

WORKDIR /bunny_code

COPY . .

RUN npm install

ENTRYPOINT ["node"]

CMD ["/bunny_code/tool.js"]