# L|R Estampados

Este repositorio contiene el código fuente de una aplicación de comercio electrónico de indumentaria desarrollada en React. A continuación, se proporciona una descripción general de la estructura y funcionalidades clave del proyecto.

## Estructura del Proyecto

El proyecto está organizado en varios componentes y carpetas. Aquí hay una breve descripción de cada archivo y carpeta:

- **`src`**: Carpeta principal que contiene el código fuente de la aplicación.
  - **`Components`**: Carpeta que almacena los componentes de la aplicación.
    - **`Cart`**: Componentes relacionados con el carrito de compras.
    - **`CheckOut`**: Componentes relacionados con el proceso de pago.
    - **`Context`**: Contexto y proveedor del carrito de compras.
    - **`Error`**: Componente para manejar errores.
    - **`Firebase`**: Configuración de Firebase.
    - **`Item`**: Componentes relacionados con la visualización de productos individuales.
    - **`ItemList`**: Componentes para mostrar listas de productos.
    - **`ItemListContainer`**: Componente principal para mostrar la lista de productos.
    - **`ItemDetail`**: Componentes para mostrar detalles de productos.
    - **`NavBar`**: Barra de navegación de la aplicación.
    - **`CartWidget`**: Widget del carrito de compras que muestra el número de productos en el carrito.
  - **`App.css`**: Estilos globales de la aplicación.
  - **`App.js`**: Componente principal que define las rutas y estructura general de la aplicación.
  - **`index.css`**: Estilos globales para el punto de entrada de la aplicación.
  - **`reportWebVitals.js`**: Configuración para medir el rendimiento de la aplicación.

- **`public`**: Carpeta que contiene archivos estáticos, como imágenes y el punto de entrada HTML.

## Instrucciones de Uso

1. Clona este repositorio en tu máquina local.
2. Instala las dependencias utilizando el comando `npm install`.
3. Configura tu proyecto Firebase en `Firebase/config.js` con tus credenciales.
4. Ejecuta la aplicación con el comando `npm start`.

## Características Principales

- **Navegación**: Utiliza `react-router-dom` para gestionar la navegación entre las distintas secciones de la tienda.

- **Carrito de Compras**: Permite a los usuarios agregar productos al carrito, ver el carrito y proceder al proceso de pago.

- **Proceso de Pago**: Implementa un proceso de pago simple que recopila la información del comprador y finaliza la compra.

- **Integración con Firebase**: Utiliza Firebase para almacenar y recuperar información sobre productos y órdenes.

¡Esperamos que disfrutes explorando nuestra tienda de indumentaria! 🛍️
