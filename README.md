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
