#!/bin/bash

CARPETA=$1
echo "creado carpeta $CARPETA"
mkdir $CARPETA
touch $CARPETA/prueba.txt
ls $CARPETA
tree $CARPETA


