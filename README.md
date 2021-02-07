# ionicNoticiasPWA

una pwa es una aplicacion que puede funcionar tanto offline como online, debe estar en un servidor https para que el service worker funcione
para crear una con ionic debemos tener una aplicacion funcional de ionic con nuestro contenido, y ejecutar los siguientes pasos:

1. paquete agregará automáticamente un service worke y un manifest de aplicación a la aplicación

 > ng add @angular/pwa

2.  Esto es para optimizar la aplicacion y permitir que use el service worker

 > ionic build --prod --service-worker

3. luego de los pasos anteriores, veremos en la carpeta www unos iconos, estos son de angular, lo cuales debemos reemplazarlos por los de nuestra aplicacion, para ello existe una url que hace este trabajo por nosotros, necesita una imagen de 512 x 512 para adjuntarla https://app-manifest.firebaseapp.com/ este enlace actualmente esta presentando problemas

4. en el archivo index.html que esta dentro de la carpeta www, los comandos anteriores le agregan una etiqueta meta con un color, debemos ir a ese archivo y colocarle el color de nuestra aplicacion
el color 222428 es el color dark que tenemos en nuestra app

  <meta name="theme-color" content="#222428">

## firebase hosting
*!!IMPORTANTE!!* al subir el codigo a firebase, el sitio sera https, si tenemos un servicio que llame a una url http, tendremos problemas


1. debemos tener una cuenta alli, y crear un proyecto

2. al estar en firebase, debemos ir a hosting, presionar donde diga iniciar o empezar

3. en la carpeta del proyecto, como administrador o su, ejecutar: *npm install -g firebase-tools*, luego de ello presionamos continuar

4. luego del paso 3, ejecutamos: *firebase login*

5. estando en la carpeta del proyecto, debemos ejecutar: *firebase init* luego de ello aparecera un listado, seleccionamos donde dice hosting *nota* para hacerlo, debemos con las flechas del teclado ubicarnos en la opcion hosting, presionar la tecla espacio, luego enter

6. nos va a preguntar sobre el proyecto, vamos a seleccionar sobre subir un proyecto existente

7. seleccionamos el nombre de nuestro aplicacion

8. nos pregunta que carpeta queremos subir, escribimos www, ya que asi se llama nuestra carpeta a subir

9. nos pregunta si queremos subir nuestra aplicacion como una single-page, en nuestro caso eso es lo que queremos asi que colocamos 'y'

10. nos pregunta 'configurar compilaciones e implementaciones automáticas con GitHub', en mi caso tengo el proyecto en github, asi que selecciono 'y' *nota: * si seleccionamos que si vamos a tener que configurar si queremos que se actualice en el hosting cada vez que hagamos cambios en nuestro repo y demas

11. pregunta si queremos reescribir nuestro archivo index.html, seleccionamos que 'n'


12. despues otros pasos omitidos, debemos desplegarlo a firebase, ejecutar: firebase deploy


## si realizamos un cambio en ionic, debemos:

ejecuta para que se actualice la carpeta www
> ionic build --prod --service-worker

se debe generar nuevamente: firebase deploy
