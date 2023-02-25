### Docker images
_Muestra un listado de todas las images

`$docker images`

### Docker ps
_docker ps muestra un listado de los contenedores en ejecución

`$docker ps`

### Docker Pull
_docker pull, el cual permite extraer la imagen de un repositorio

`$docker pull``

### Docker Push 
_docker push permite cargar las images creadas a cualquier repositorio principalmente a docker hub

`$docker push`

### Docker run 
_Iniciar el Contenedor

`$docker run`

### Docker exec
_docker Exec se utiliza para conectarse y obtener una shell (acceso)

`$docker exec -it CONTENEDOR_ID`

### Docker inspect
_docker Inspect es un comando que permite obtener información detallada del contenedor

### Docker rm
_docker rm es un comando que permite la eliminación de contenedores, imágenes, volúmenes

### Ejemplo: 
Descarguemos la imagen de Jenkins

[dockerhub](https://hub.docker.com/r/jenkins/jenkins)

Paso 1: Descargar jenkins
docker pull jenkins/jenkins:latest

Paso 2: Buscar la imagen 
`$docker images |grep jenkins`

Paso 3: Ejecutamos el Contenedor
- El Flag -d ejecuta el contenedor en segundo plano e imprime el ID de contenedor

`$docker run -d jenkins/jenkins:latest` 

Paso 4: Listar si se ejecutó el contenedor
`$docker ps`

Paso 5: Mapear puerto
`$docker run -d -p 8080:8080 jenkins/jenkins:latest`

Paso 6: Si eliminamos
`$docker rm -f contenedor_id"

### Iniciar | Detener |Reiniciar

### Detener
`$docker stop ID_Container`

### Iniciar
`$docker start ID_Container`

### Ejemplo 2
_Conectar con el Contenedor con exec y sacar el secret de jenkins

Paso 1: iniciamos el contenedor Jenkins
`$docker run -d -p 8080:8080 jenkins/jenkins:latest`

Paso 2: ubicar la ruta donde esta ubicado el secret de jenkins y hacer un cat dentro del contenedor 
`cat /var/jenkins_home/secrets/initialAdminPassword`

Paso 3: Docker Exec
`$docker exec -ti "container_ID" bash

_Nota: - Es posible que su contenedor no tenga bash y, de ser así, puede usar sh.

`$docker exec -ti "container_ID" sh

Paso 4: problemos agregar el usuario root
`$docker exec -u root -ti "container_ID" bash

### Variables de Entorno

Paso 1: agregarlo al momento de correr el contenedor

`$docker run -d -e "prueba1=4321" nathanpeck/greeting`

`$docker run -d -p 80:80 docker/getting-started`

Paso 2: entrar en el contenedor y revisar si tiene la variable de entorno

`$docker exec -it contenedorID sh`   

Paso 3: en el Dockerfile


### Crear contenedor mysql

`$docker pull mysql:5.7`
`$docker run -d -p 3306:3306 -e "MYSQL_ROOT_PASSWORD=12345678" -e "MYSQL_DATABASE=docker-db" -e "MYSQL_USER=docker-user" -e "MYSQL_PASSWORD=88321564" mysql:5.7`
`$docker logs -f my-db1`
`mysql -u root -h 127.0.0.1 -p12345678 --port 3306`
`mysql -u root -h 127.0.0.1 -p12345678`
`show databases;`

### Limitar recursos
```
docker run -d --name mongo mongo
docker stats mongo
free -h
docker run --help |grep memo
docker run -d -m "500mb" --name mongo mongo
docker stats mongo
```

### Copiar Archivos al contenedor
```
docker run -d --name apache -p 80:80  httpd
docker ps
echo ":)" > index.html
cat index.html
docker ps
docker cp index.html apache:/tmp
docker exec -ti apache bash
cd /tmp
ls -l
pwd
apache2/htdocs
ls -l
docker cp index.html apache:/usr/local/apache2/htdocs/index.html
localhost
```

### Docker Volumes
_Los volumenes permiten almacenar data persistente del contenedor

`$docker run -v nombre-volumen:/var/lib/mysql mysql:5.7``

- nombre-volumen: nombre del volumen que vamos a usar.
- /var/lib/mysql: path donde el contenedor persiste los datos por defecto.
- mysql:5.7: nombre imagen

Usar un directorio

`$docker run -v home/usuario/data:/var/lib/mysql mysql:5.7`

- home/usuario/data: directorio que queremos usar para que nuestro contenedor persista los datos
- /var/lib/mysql: directorio donde persiste los datos mysql por defecto. 
- mysql:5.7 imagen que vamos usar para instanciar un contenedor

Eliminar Volumen

`$docker volume rm nombre-volumen`

### Ejemplo Volumenes

`docker run -d --name jenkins -p 8080:8080 -v /home/data/jenkins/:/var/jenkins_home jenkins/jenkins`

`docker run -d -it --name test-container -v "testVolume":/tmp ubuntu:xenial`

`docker inspect test-container`

`docker run -v $PWD/index.html:/usr/share/nginx/html/index.html -d nginx`

`docker run -v $PWD/index.html:/usr/share/nginx/html/index.html:ro -d -p 80:80 nginx`


### Docker Network

- Bridge: La red standard que usarán todos los contenedores 
- host: El contenedor usará el mismo IP del servidor real que tengamos.
- none: Se utiliza para indicar que un contenedor no tiene asignada una red.

```
ip -a |grep docker
docker run -d nginx
docker inspect ID_CONTENEDOR
docker network ls
docker network ls |grep bridge
docker inspect ID_COntenedor |grep bridge -C 5
En la red bridge se pueden ver por IP, pero no por nombre
```

### Docker-Compose
_Aplicaciones multicontenedor

- Contenedores
- imagenes
- volumenes
- Redes

`docker-compose.yml`

Es el archivo donde residen las instrucciones y configuraciones de él/los servicios.

### Comandos Docker-Compose

### docker-compose build

Se usa para generar la imagen, basada en las especificaciones del servicio en el docker-compose (y en el Dockerfile)
Se puede especificar qué service del docker-compose buildear, si solo se quiere ejecutar sobre uno.

### Ejemplos:

docker-compose build   // para buildear todos los services

docker-compose build local //para buildear el service local


### docker-compose up

En caso de no existir la imagen (build previo), se arma la misma, y siempre se crea el container y luego se inicia.

Como el build se puede levantar un servicio específico definido en el docker-compose, por ejemplo haciendo:

`$docker-compose up local`

### docker-compose start

Se inicia un container existente (frenado mediante el comando de stop).

Para esto se debe especificar el container a iniciar haciendo:

`docker-compose start nombre_container`

### docker-compose stop

Frena un container, sin eliminarlo, para luego poder iniciarse nuevamente con start.
docker-compose stop nombre_container

### docker-compose down

Se utiliza para frenar el/los container/s, eliminarlos.

`$docker-compose down`


### Docker Registry

### Registrarse en DockerHub
Para crear una cuenta en Docker Hub, regístrese enDocker Hub. Después, para hacer push a su imagen, primero ingrese en Docker Hub. Se le pedirá que se autentique:

`docker login -u docker-registry-username`

`docker login`

el mensaje del okey

`login Succeeded`

Tagear la imagen 
`docker tag docker-image-name docker-registry-username/docker-image-name:1.0`


`docker push docker-registry-username/docker-image-name`





docker volume create web_vol
docker volume ls

docker volume inspect web_vol

ruta estaticos /usr/share/nginx/html

docker run -d --name nginx_web -v web_vol:/usr/share/nginx/html -p 8080:80 nginx:alpine


docker run -d --name nginx_web -v /home/vagrant/web:/usr/share/nginx/html:ro -p 8080:80 nginx:alpine
RW=lectura y escritura
RO
nginx:alpine

network

docker network create red1

docker run -d --name nginx_web --network red1 -p 8080:80 nginx:alpine


docker run -d --name guestbook --network guest_net  -p 8081:5000 roxsross12/guestbook:latest

docker network create guest_net 

docker run -d --name some-redis  redis redis-server -p 6379:6379 #### ERROR

docker run -d --name redis --network guest_net -v /opt/redis:/data -p 6379:6379 redis redis-server

desplegando wordpress + mysql
wordpress
mysql:8.0

docker network create wp_net
docker volume create wp_vol

### bd

MYSQL_ROOT_PASSWORD=secret
MYSQL_DATABASE=bd_wp
MYSQL_USER=user_wp
MYSQL_PASSWORD=pass_wp

docker run -d --name servidor_mysql --network wp_net -v wp_vol:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=secret -e MYSQL_DATABASE=bd_wp -e MYSQL_USER=user_wp -e MYSQL_PASSWORD=pass_wp -p 3306:3306 mysql:8.0

wordpress

-e WORDPRESS_DB_HOST=servidor_mysql
-e WORDPRESS_DB_USER=user_wp
-e WORDPRESS_DB_PASSWORD=pass_wp
-e WORDPRESS_DB_NAME=bd_wp

docker run -d --name servidor_wp --network wp_net -v /opt/wordpress:/var/www/html/wp-content -e WORDPRESS_DB_HOST=servidor_mysql -e WORDPRESS_DB_USER=user_wp -e WORDPRESS_DB_PASSWORD=pass_wp -e WORDPRESS_DB_NAME=bd_wp -p 8080:80 wordpress