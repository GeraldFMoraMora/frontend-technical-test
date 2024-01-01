# FrontEnd Prueba Tecnica
**Por: Gerald Mora Mora**
Este repositorio contiene el codigo fuente de la parte correspondiente al frontend de la aplicación de tareas. Desde esta aplicación cada usuario puede administrar sus tareas de manera sencilla, las cuales se van a almacenar en una base de datos con toda su informacion y van a poder ser actualizadas, creadas y consumidas en tiempo real. 
## Descripción de la aplicación:

### Pantalla de bienvenida: 
Esta pantalla da un simple mensaje de bienvenida al usuario y le muestra dos opciones que corresponden a botones que permiten iniciar sesión o registrarse. 
> **NOTA importante**: Para volver a esta pantalla se debe refrescar la aplicación ya sea con **f5** o en la opción de refrescar del navegador.

### Pantalla de registro:
Muestra un formulario donde el usuario debe rellenar obligatoriamente para quedar registrado. El mismo va a consultar al API si los datos suministrados son correctos y de ser así, el usuario se registra, sino, le mostrará un error correspondiente al problema.
El formulario aplica una mascara automaticamente para el numero telefonico de esta manera 0000-0000.
Para la contraseña se valida enm tiempo real si cumple con los siguiente requesitos: 
- Contiene letras, números, mayúsculas 
- No contiene caracteres especiales. 
- La longitud mínima es de 8 y máxima de 12 caracteres.
> **NOTA**: De cumplirse con la correctitud de los datos, se procederá automaticamente a volver a la pantalla de bienvenida despues de unos segundos.

### Pantalla de logeo:
Esta pantalla muestra un pequeño formulario donde el usuario deberá introducir su username y su contraseña, de estar incorrectos o incompletos estos datos, se le mostrará un error indicando el problema. 
Si lo datos estan correctos, se procede a mostrar una pantalla, la cual muestra un par de tabs en los que puesdes intercambiar para ver la lista de tareas o la informacion del perfil de usuario.

### Pantalla de perfil y tareas:
Cualquier informacion mostrada en esta pantalla corresponde unicamente al usuario logeado. Solamente se debe intercambiar entre ambas opciones de tab para poder ver ya sea el sistema de gestión de tareas, o solo la información del perfil. 
#### Tab de tareas:
Muestra una serie de elementos que permiten gestionar las tareas de usuario, estos elementos son:
- **Form y botón para agregar tarea**: Para agregar una tarea nueva, solamente se debe escribir su descripción (nombre) y dar click en el botón para agregarla automaticamente a la lista de tareas pendientes.

- **Contenedor To Do**: Contiene la lista de tareas pendientes del usuario, cada tarea es un pequeño contenedor.

- **Contenedor Working**: Contiene la lista de tareas en progreso del usuario, cada tarea es un pequeño contenedor.

- **Contenedor Done**: Contiene la lista de tareas completadas del usuario, cada tarea es un pequeño contenedor.
> **NOTA**: Para cambiar el estado de una tarea, basta con arrastrarla con el mouse a el contenedor deseado, esto hará que la tarea cambie de estado automáticamente.

- **Contenedor de tarea**: Este contenedor muestra la descripción de la tarea (nombre), un pequeño botón para agregar una imagen vinculada a esta tarea, un pequeño botón para eliminar la tarea y de existir una imagen ya vinculada a esa  tarea, esa se mostrará en un pequeño recuadro.
> **NOTA**: Si el usario desea reemplazar la imagen, solo debe de dar click a la opción de agregar imagen, para que la nueva reemplace a la imagen anterior.

#### Tab de perfil: 
Muestra de manera muy sencilla la información del usuario actual. 
> **NOTA importante**: Para ver la información de otro usuario, este se debe logear con el usuario en cuestión, para ello debe refrescar la aplicación ya sea con **f5** o en la opción de refrescar del navegador para volver a la pantalla de bienvenida y ingresar a la opción de login nuevamente.

## Ejecución de la aplicación
Para ello solamente se debe correr desde el terminal el siguiente comando:
```
npm start
```
El dominio por defecto donde corre esta ejecución es http://localhost:3000/
> **NOTA**: Asegurese de tener en ejecución la aplicación backend antes de empezar a utilizar este frontend. 