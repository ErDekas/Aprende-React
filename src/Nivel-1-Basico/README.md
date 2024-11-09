¡Genial, Pablo! 🎉 Vamos a crear un `README.md` bien estructurado para tu carpeta de **Nivel-1-Basico** que describa cada ejercicio de forma clara, sin dar la solución, pero proporcionando la información necesaria para que cualquiera pueda entender de qué va y cómo completarlo.

---

# 📚 **Nivel 1 - Básico: Aprende los fundamentos de React**

¡Bienvenido al Nivel 1 del proyecto **Aprende React**! En este nivel, vamos a cubrir los conceptos básicos de React con ejercicios prácticos que te permitirán familiarizarte con la sintaxis, los componentes, props y el uso de JSX. Cada ejercicio está diseñado para enseñarte un aspecto clave de React, comenzando con lo más simple y aumentando gradualmente en complejidad.

## 🛠️ **Tecnologías y herramientas usadas:**

- **React:** Una biblioteca de JavaScript para construir interfaces de usuario.
- **Create React App:** Herramienta para configurar un proyecto de React rápidamente.
- **JavaScript (ES6):** Utilizamos la sintaxis moderna de JavaScript para construir los componentes.
- **JSX:** Una extensión de JavaScript que permite escribir código similar a HTML dentro de JavaScript. JSX facilita la creación de interfaces de usuario en React.
- **ReactDOM:** Para renderizar los componentes en el navegador.

---

## 📂 **Ejercicio 1: Hello World**

### 📋 **Descripción:**

Este es el ejercicio más simple para comenzar con React. El objetivo es renderizar un mensaje de "Hello World" en la pantalla. Aquí aprenderás a crear un componente funcional en React y a renderizarlo en el navegador.

### 🤔 **Conceptos cubiertos:**

- Creación de un componente funcional con React.
- Uso básico del método `render` para mostrar contenido en el navegador.

### 🛠️ **Instrucciones:**

1. Crear un componente funcional llamado `App`.
2. Renderizar un mensaje simple ("Hello World") dentro de un elemento HTML como `<h1>`.
3. Ejecutar el proyecto con `npm start` para ver el resultado en el navegador.

---

## 📂 **Ejercicio 2: Primer componente - `Saludo`**

### 📋 **Descripción:**

En este ejercicio, crearás tu primer componente personalizado llamado `Saludo`. Este componente recibe **props** (propiedades) para mostrar un saludo dinámico en función del nombre proporcionado.

### 🤔 **Conceptos cubiertos:**

- Creación de un componente funcional en React.
- Uso de **props** para pasar datos a un componente.
- Renderizado dinámico basado en los valores de las props.

### 🛠️ **Instrucciones:**

1. Crear un componente `Saludo` que reciba una prop llamada `nombre`.
2. Utilizar la prop `nombre` para mostrar un saludo personalizado, por ejemplo: "Hola, Pablo".
3. Renderizar el componente `Saludo` dentro del componente principal `App`.

### ℹ️ **¿Qué son las props?**

Las **props** son argumentos que se pasan a los componentes de React, permitiendo personalizar el contenido mostrado. Es similar a los parámetros de una función en JavaScript.

---

## 📂 **Ejercicio 3: Componente con múltiples props - `Usuario`**

### 📋 **Descripción:**

En este ejercicio, aprenderás a trabajar con múltiples props en un componente. Crearás un componente `Usuario` que reciba dos props: `nombre` y `edad`, y mostrarás esta información en el navegador.

### 🤔 **Conceptos cubiertos:**

- Uso de múltiples props en un componente.
- Concatenación de variables dentro de JSX para crear texto dinámico.

### 🛠️ **Instrucciones:**

1. Crear un componente `Usuario` que reciba las props `nombre` y `edad`.
2. Mostrar un mensaje en pantalla usando ambas props, por ejemplo: "Mi nombre es Pablo y tengo 18 años".
3. Renderizar el componente `Usuario` dentro del componente principal `App`.

### ℹ️ **Más sobre JSX:**

JSX permite combinar JavaScript y HTML. Es la forma en que React facilita la creación de interfaces dinámicas. Las variables de JavaScript se pueden usar directamente dentro de JSX utilizando llaves `{}`.

---

## 📂 **Ejercicio 4: JSX básico - Lista de frutas**

### 📋 **Descripción:**

Este ejercicio introduce el uso de JSX para crear listas de elementos. Crearás un componente llamado `ListaFrutas` que renderiza una lista de frutas usando JSX.

### 🤔 **Conceptos cubiertos:**

- Uso de JSX para crear listas de elementos HTML.
- Comprender la sintaxis de JSX y cómo se utiliza en React.

### 🛠️ **Instrucciones:**

1. Crear un componente `ListaFrutas` que contenga una lista (`<ul>`) con varios elementos de lista (`<li>`), cada uno representando una fruta.
2. Renderizar el componente dentro de `App` para mostrar la lista de frutas en pantalla.

### ℹ️ **¿Qué es JSX y por qué lo usamos?**

**JSX** es una extensión de JavaScript que permite escribir código similar a HTML dentro de archivos JavaScript. Aunque JSX parece HTML, en realidad es una representación de código JavaScript. Utilizamos JSX porque:

- Es más legible y permite ver claramente la estructura de la interfaz.
- Facilita el desarrollo de componentes dinámicos e interactivos.
- JSX se transpila a llamadas de JavaScript (`React.createElement`), lo que permite construir la interfaz de usuario de forma eficiente.

---

## 📂 **Ejercicio 5: Renderizado condicional básico - `Mensaje`**

### 📋 **Descripción:**

En este ejercicio, explorarás el renderizado condicional en React. Crearás un componente `Mensaje` que muestre diferentes mensajes dependiendo del valor de una prop llamada `esVisible`.

### 🤔 **Conceptos cubiertos:**

- Renderizado condicional en React.
- Uso de operadores ternarios para decidir qué contenido mostrar.
- Comprender cómo React actualiza la interfaz de usuario en función de las props.

### 🛠️ **Instrucciones:**

1. Crear un componente `Mensaje` que reciba una prop `esVisible`.
2. Mostrar un mensaje diferente en función de si `esVisible` es `true` o `false`.
3. Renderizar el componente dentro de `App` y probar ambos casos (`esVisible={true}` y `esVisible={false}`).

### ℹ️ **Renderizado condicional en React:**

En React, podemos mostrar contenido de forma condicional utilizando expresiones de JavaScript dentro de JSX. Una técnica común es utilizar el **operador ternario** (`condición ? resultado1 : resultado2`), que permite decidir qué mostrar basado en una condición.

---

## 🚀 **Cómo ejecutar los ejercicios:**

1. Clona el repositorio:

   ```bash
   git clone https://github.com/tu-usuario/Aprende-React.git
   cd Aprende-React
   ```

2. Instala las dependencias:

   ```bash
   npm install
   ```

3. Modifica `src/index.js` para importar el ejercicio que deseas probar. Por ejemplo:

   ```jsx
   import App from "./Nivel-1-Basico/ejercicio-1";
   ```

4. Ejecuta el proyecto:
   ```bash
   npm start
   ```

---

Espero que este README te ayude a guiar a otros a través de tus ejercicios y que sea claro para cualquier persona que quiera aprender React con tu proyecto. 🚀💻
