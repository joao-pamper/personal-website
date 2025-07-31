# personal-website

To build image
sudo docker compose build

To run in prod mode (on port 80, 443 with ssl)
sudo docker compose up

To run in test mode (on localhost:8080)
sudo docker compose -f docker-compose.test.yml up

If you have an old mac or windows, like me, then you might not be able to download docker. But if you have ssh acces to a linux machine - or any other machine that has docker, you can run a container that uses localhost on that machine, and use ssh to tunnel localhost from the server to your machine by using the below command
ssh -L 8080:localhost:8080 server_alias
or 
ssh -L LOCAL_PORT:localhost:REMOTEPORT your-username@your-server