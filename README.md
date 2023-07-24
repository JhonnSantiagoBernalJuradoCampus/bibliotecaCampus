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
7. Obtener todas las reservas realizadas con su fecha de reserva y estado: `http://127.12.1.2:5010/reserva`
8. Mostrar los libros disponibles para prestamo con su titulo y autor: `http://127.12.1.2:5010/libro/disponible`
9. Obtener los libros prestados y su fecha de devolucion: `http://127.12.1.2:5010/libro/prestado`
10. Listar los usuarios y sus correos electronicos: `http://127.12.1.2:5010/usuario`
11. Mostar los libros escritos por un autor especifico: `http://127.12.1.2:5010/libro/autor/?nombre=Gabriel`
12. Obtener los libros de cierta categoria: `http://127.12.1.2:5010/libro/categoria?cate=Novela`
13. Listar los prestamos realizados por un usuario: `http://127.12.1.2:5010/prestamo/usuario/?user=Juan`
14. Mostrar los libros con mas de 500 paginas y su autor: `http://127.12.1.2:5010/libro/paginas`