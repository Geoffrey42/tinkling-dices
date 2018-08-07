FROM node:carbon

COPY ./docker/entrypoint.sh /entrypoint

RUN ["chmod", "+x", "entrypoint/entrypoint.sh"]

WORKDIR /data

EXPOSE 8080

CMD ["npm", "start"]
