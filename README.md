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

Para el siguiente paso vamos a configurar nuestro **Routing** a través del archivo **app-routing.module.ts**, para la jerarquía que hemos establecido al principio del ejemplo lo haremos de la siguiente forma:

![tb-3](https://user-images.githubusercontent.com/36458569/182036873-e5e60bf4-b473-4cbc-9a53-d2f4d717e3f4.png)

Es importante que prestemos atención a estos puntos:

- **children**: es la forma que tenemos de decirle al routing de Angular que estamos estableciendo una jerarquía de componentes padre y componentes hijos, esto es lo que nos permitirá que las rutas de los breadcrumbs salgan de esta forma ***Padre > Hijo A > Hijo B***.

- **data: {breadcrumb: {alias: ''}** nos permite indicar un alias para referenciar a ese componente, lo utilizaremos más adelante así que también es aconsejable establecerlo.

## Configuración de los componentes padre

A continuación, nos vamos a configurar los componentes con rol de **padre**, que son:

- Caja roja - Padre
- Caja azul - Hijo A (*que es hijo y padre a la vez*)

Para esto es **muy importante** añadir el tag **router-outlet** en los archivos **.html** de cada componente, nosotros lo indicamos al final:

![tb-4](https://user-images.githubusercontent.com/36458569/182037226-384d6408-d198-487c-bf5b-f96ccf06fc0d.png)

Todo el contenido del padre lo contendremos en un **div** *(o cualquier otro elemento)* al que le pasaremos una **directiva ngIf** que recogerá el resultado de la siguiente función:

![tb-5](https://user-images.githubusercontent.com/36458569/182037230-109628ac-8d5d-4baa-a439-0339996da436.png)

A través de esta función, que devolverá ***true*** o ***false*** según la comparación que le establecemos, podemos saber si la ruta actual de nuestra web es la del componente en concreto, en ese caso *(que sería cuando devuelve true)* **SÍ** cargaremos el contenido que tenemos dentro del div a través del ngIf, de lo contrario, en caso de que estemos en uno de los hijos y que, por tanto, a través del router-outlet estemos mostrando más de un componente, lo que conseguimos con esta directiva ngIf es que no nos pinte el componente padre y evitemos esos duplicados.

Para este punto es importante **importar Router** desde **@angular/router** y **declararlo en el constructor** para poder utilizarlo y que nos diga en qué componente estamos según la url. En el ejemplo véis que la información del componente padre raíz se mostrará solo si estamos en la url '/', que sería la raíz de nuestra web.


## Cambiar las rutas de los breadcrumbs por nombres de componente

xx
