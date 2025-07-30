FROM nginx:latest

# Add nginx server config file
COPY nginx.conf /etc/nginx/nginx.d/joaopereira.conf

# Add website static files
COPY html/ /var/www/html/