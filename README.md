# personal-website
To build image
sudo docker compose build

To run in prod mode (on port 80, 443 with ssl)
sudo docker compose up

To run in test mode (on localhost:8080)
sudo docker compose -f docker-compose.test.yml up