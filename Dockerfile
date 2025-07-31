FROM nginx:latest

# Add website static files
COPY html/ /var/www/html/