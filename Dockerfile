FROM node:current-alpine3.10 AS react

WORKDIR  /server

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json ./
COPY package-lock.json ./
RUN npm ci --silent

COPY . /server

RUN npm run build

FROM python:latest

WORKDIR /server

COPY --from=react /server/app app

# COPY app /server/app

RUN pip install --upgrade pip && \
    pip install --no-cache-dir -r /server/app/requirements.txt

ENV FLASK_APP=app
ENV FLASK_ENV=production
ENV FLASK_RUN_HOST=0.0.0.0
ENV FLASK_RUN_PORT=80

CMD [ "flask", "run" ]
