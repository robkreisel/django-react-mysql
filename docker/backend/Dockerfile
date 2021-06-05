FROM python:3.8.3-alpine

WORKDIR /app
ADD ./backend/requirements.txt /app/backend/

# set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

RUN pip install --upgrade pip
RUN pip install gunicorn
RUN pip install -r backend/requirements.txt

ADD ./backend /app/backend
ADD ./docker /app/docker

COPY ./backend/server/entrypoint.sh .

ENTRYPOINT [ "/app/entrypoint.sh" ]