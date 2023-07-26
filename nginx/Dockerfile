FROM nginx:latest

RUN echo "deb http://archive.debian.org/debian/ stretch main" > /etc/apt/sources.list
RUN echo "deb-src http://archive.debian.org/debian/ stretch main" >> /etc/apt/sources.list
RUN echo 'Acquire::Check-Valid-Until "false";' > /etc/apt/apt.conf

RUN apt-get update && apt-get install -y wget

ENV DOCKERIZE_VERSION v0.6.1
RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && tar -C /usr/local/bin -xzvf dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && rm dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz

COPY nginx.conf /etc/nginx/conf.d/default.conf

CMD dockerize -wait tcp://app:3000 -timeout 20s nginx -g 'daemon off;'
