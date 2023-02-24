### Lab-02

### Dockerizamos App y Consumer

Este ejemplo crea una API basica de flask, con un consumidor que accede desde el service a la API. 

Primero que nada tienes que armar los Dockerfile de la app y del consumidor, Luego construir la imagen de ambas aplicaciones y subirlos al registry de dockerhub y por ultimo iniciar los contenedores usando las las imagenes creadas

### Recuerda para contruir una imagen personalizada:

`docker build -t app-python:1.0.0 . `


### Iniciar un contenedor

`docker run -d -p 8000:8000 app-python:1.0.0`


### Probar la aplicación: 

curl localhost:8000
```
> curl localhost:8001
<!DOCTYPE html>
<html lang="en">
<body>

<h2>Hotname: e8a97746772c</h2>
<p>IP Address: 172.17.0.7</p>

</body>
</html>%  
```
### Consumer

# Modificar IP/HOST Linea 11 consumer.py

docker build -t consumer-python:1.0.0 .

docker run -it -e LOCAL=true consumer-python:1.0.0

```
> docker run -e LOCAL=true -it consumer-python:1.0.1
Run container on local
Response OK!!!
Response OK!!!
Response OK!!!
Response OK!!!
Response OK!!!
```

y al final 
Arma un docker-compose con ambos servicios =)

### Resultados

- Documentación y screen de la solución

