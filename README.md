# Prueba biblioteca campus
## Instalacion del proyecto
1. Crear el archivo .env e ingresar los datos del servidor:
```js
MY_CONFIG = {"hostname": "127.12.1.2", "port": 5010}
```
2. Abrir la terminal del editor de codigo y ejecutar el comando `npm i`
# Endpoints
1. Obtener los autores y su nacionalidad: `http://127.12.1.2:5010/autor`
2. Listar todas las categorias disponibles: `http://127.12.1.2:5010/categoria`
3. Mostrar todas las editoriales y sus direcciones: `http://127.12.1.2:5010/editorial`
4. Obtener los estados de los libros y sus descripciones: `http://127.12.1.2:5010/estado`
5. Mostrar todos los libros con su titulo, autor y editorial: `http://127.12.1.2:5010/libro`
6. Listar los prestamos realizados con fecha de prestamo, fecha de devolucion y estado: `http://127.12.1.2:5010/prestamo`