# Boilerplate for a SaaS App 

## Featuring
- Django w/ Rest Framework for the backend
- React for the frontend
- NGINX web server
- MySQL database
- Bootstrap for styling
- Development and production docker-compose file 
- SSL certificate from Let's Encrypt
- Authentication with DRF authtoken and [Djoser](https://djoser.readthedocs.io/en/latest/)
- python-decuple for secrets

## Credits
Most of the initial build comes from Piotr Ptonski's [Django and React Tutorial](https://saasitive.com/tutorial/django-react-boilerplate-saas/). MySQL was implemented using information from Ken Kono's article [Doceker for Django(Nginx and MySQL)](https://medium.com/@kenkono/docker-for-django-nginx-and-mysql-5960a611829e)

## Setup
1. Clone the repo to your local host <br/>
`git clone https://github.com/robkreisel/django-react-mysql.git app-name`
1. Edit docker/nginx/production/default.conf and change all occurrences of boilerplate.design1010.com to your production URL
1. Make a copy of .env-sample called .env and edit with proper settings for dev or prod
1. Make a copy of .db.env-sample called .db.env and edit with proper settings for dev or prod. Must match settings in .env
1. Edit backend/sql/init.sql and match database and user in script
1. Copy docker-compose-dev.yml or docker-compose-prod.yml to docker-compose.yml to avoid having to use `-f <filename>` with docker compose
1. Spin up the servers `docker compose up -d`
1. Site should be live at http://127.0.0.1 or in production at your specified URL

## Run Migrations
`docker exec -it <backend_container_id> sh` <br/>
`cd backend/server` <br/>
`python manage.py makemigrations`
`python manage.py migrate`

### Optional
- To create a superuser for Django Admin <br/>
`docker exec -it <backend_container_id> sh` <br/>
`cd backend/server` <br/>
`python manage.py createsuperuser`



