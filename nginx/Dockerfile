FROM nginx:1.19.0-alpine

WORKDIR /etc/nginx

RUN mkdir -p /data/nginx/cache && \
    mkdir -p /data/nginx/log

RUN rm conf.d/default.conf
COPY nginx.conf.d conf.d/nginx.conf