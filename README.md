# Ejemplo de breadcrumbs en Angular con xng-breadcrumb

![breadcrumbs-ejemplo](https://user-images.githubusercontent.com/36458569/182034831-186496e1-6a6f-4d1f-9f6d-b6ee6705c191.gif)

## Nuestros componentes de ejemplo

Para el ejemplo vamos a trabajar con cuatro componentes que se relacionarán entre ellos de la siguiente forma:

- Un **componente rojo** que será el **padre** de todos.
- Por otra parte, un **componente azul** que actuará como **hijo A**, y que es hijo y padre otros dos componentes a la misma vez.
- Finalmente, del componente anterior descenderán otros dos: el **componente amarillo** y el **componente verde**, que serán de tipo **hijo B**, ya que únicamente son hijos.

Para verlo de forma más visual, adjunto esquema:

![componentes-breadcrumbs](https://user-images.githubusercontent.com/36458569/182034506-c563b6a2-c87d-4533-8e2c-8cbfea084aab.png)

## Instalación y configuración de xng-breadcrumb

Lo primero que tenemos que hacer es instalar en nuestro proyecto la librería de **xng-breadcrumb** desde npm o yarn, lo hacemos de la siguiente forma:

````
npm install --save xng-breadcrumb
//------------- OR --------------
yarn add xng-breadcrumb
````

Después de este paso es muy importante que **importemos la librería** en nuestro archivo **app.module.ts** y lo declaremos en la parte de **imports** de la siguiente forma:

![tb-1](https://user-images.githubusercontent.com/36458569/182036684-e73cad2b-c151-42c0-b0f5-480480f3fef2.PNG)

Finalmente, para cerrar esta configuración inicial de la librería, agregamos en nuestro archivo **app.component.html** los tags referentes a xng-breadcrumb de la siguiente forma:

![tb-2](https://user-images.githubusercontent.com/36458569/182036556-d8b1134e-f8ca-446e-ac2d-c60fdb3e17da.PNG)

También es posible crear un nuevo componente para los breadcrumbs y incluir allí el tag y trabajar con él de la forma que lo haríamos con cualquier otro componente, lo hemos incluido justamente aquí para simplificar y que se entendiera mejor.

## Routing en app-routing.module.ts - añadimos jerarquía

xx

## Configuración de las caja padre

xx

## Cambiar las rutas de los breadcrumbs por nombres de componente

xx
