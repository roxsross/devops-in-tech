Version sistema operativo
cat /etc/os-release

version kernel
uname -a

/bin
/boot
/etc

cd -> permite moverte entre directorios
ls --> listar
ls -a 
ls -la
touch hello.txt
pwd --> ubicacion ruta
sudo --> superusuario

man [comando] --> ayuda

crear carpeta
mkdir
mkdir -p

borrar
rm 
rm -r

copiar 

cp

mv

mkdir folder1
touch folder1/file1.txt
touch folder1/file2.txt
touch folder1/file3.txt

echo ""

grep 

history 

curl  cliente-servidor o servidor-cliente

curl https://google.com

https://pokeapi.co/

curl https://pokeapi.co/api/v2/item/251/

curl -o google.txt https://google.com

curl -O https://upload.wikimedia.org/wikipedia/commons/3/35/Tux.svg

curl -v https://google.com
curl -I https://google.com

metodos http
GET --> traer
POST -> enviar al servidor Body/payload
PUT = POST + especfico
DELETE -> borrar 
PATCH

{
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  },

https://jsonplaceholder.typicode.com/

curl -X POST -d '{"userId": 1,"title": "Hola", "body": "Post content"}' -H 'Content-Type: application/json' https://jsonplaceholder.typicode.com/posts

curl -X GET https://jsonplaceholder.typicode.com/posts/1
