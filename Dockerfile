FROM nginx:1.17.1-alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY /dist/tc-exchange-front /usr/share/nginx/html

quarkus.buildpack.native-builder-image