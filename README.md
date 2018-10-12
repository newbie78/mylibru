# client (http://my-lib.ru)

все операции выполняем в локальной папке проекта, в корне. описание корректно для среды linux debian 9.

## Repo cloning

git clone git@github.com:newbie78/mylibru.git ./

## Start with docker-compose
для установки зависимостей выполняем:
```
docker run --rm --interactive --tty \
 --user $(id -u):$(id -g) \
 --volume $PWD:$PWD \
 --workdir $PWD \
ebiven/vue-cli yarn install
```
для запуска и рестарта контейнера:
```
bash restart.sh
```
при необходимости помненять в docker-compose.single.yml VUE_APP_DOMAIN_TEST -
переменная должна указывать на адрес и порт докер-контейнера
