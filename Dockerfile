FROM nginx
WORKDIR /site
COPY ./dist /usr/share/nginx/html
COPY nginx.conf /usr/share/nginx/nginx.conf
RUN mkdir /usr/share/nginx/cache
RUN touch /usr/share/nginx/nginx-access.log