FROM nginx:latest
COPY ./dist/ /usr/share/nginx/html/
RUN ls