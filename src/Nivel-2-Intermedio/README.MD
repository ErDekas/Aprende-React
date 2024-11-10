# 📚 **Nivel 2 - Componentes y Props: Aprende a trabajar con componentes y props en React**

¡Bienvenido al **Nivel 2** del proyecto **Aprende React**! En este nivel, nos enfocaremos en trabajar con **componentes**, **props**, y **eventos**. Cada ejercicio está diseñado para enseñarte cómo usar componentes reutilizables, cómo pasar datos entre ellos mediante props, y cómo manejar eventos en React. A medida que avanzamos, aprenderás a crear aplicaciones más interactivas y dinámicas.

## 🛠️ **Tecnologías y herramientas usadas:**

- **React:** Biblioteca de JavaScript para construir interfaces de usuario.
- **Create React App:** Herramienta para configurar rápidamente un proyecto de React.
- **JavaScript (ES6):** Utilizamos la sintaxis moderna de JavaScript, como la desestructuración y funciones flecha.
- **JSX:** Extensión de JavaScript que permite escribir HTML dentro de JavaScript, facilitando la creación de interfaces de usuario dinámicas.
- **ReactDOM:** Para renderizar los componentes en el navegador.

---

## 📂 **Ejercicio 6: Lista de componentes**

### 📋 **Descripción:**

En este ejercicio, aprenderás a crear un componente que recibe una lista de tareas como **props** y las muestra en una lista `<ul>`. Este ejercicio te ayudará a entender cómo trabajar con arrays en React y cómo renderizar listas dinámicas.

### 🤔 **Conceptos cubiertos:**

- Creación de un componente funcional.
- Paso de arrays como props.
- Renderización de listas dinámicas en JSX.

### 🛠️ **Instrucciones:**

1. Crea un componente `Tareas` que reciba un array de tareas como prop.
2. Muestra las tareas dentro de una lista `<ul>`, iterando sobre ellas con `map()`.
3. Renderiza el componente `Tareas` dentro de `App` pasando un array de tareas.

### ℹ️ **¿Qué son las props?**

Las **props** (abreviatura de "properties") son valores que pasamos de un componente a otro en React. Son inmutables, lo que significa que no puedes cambiarlas directamente dentro del componente que las recibe. Esto facilita la creación de componentes reutilizables.

---

## 📂 **Ejercicio 7: Componente con estilos**

### 📋 **Descripción:**

En este ejercicio, crearás un componente `Boton` que recibe texto y color como **props** y aplica estos valores como estilos en línea. Este ejercicio te ayudará a comprender cómo utilizar estilos en React y cómo pasarlos como props.

### 🤔 **Conceptos cubiertos:**

- Uso de **props** para pasar valores de estilo a un componente.
- Aplicación de estilos en línea en React.
- Personalización de componentes con estilos dinámicos.

### 🛠️ **Instrucciones:**

1. Crea un componente `Boton` que reciba `texto` y `color` como props.
2. Aplica los valores de `texto` y `color` usando estilos en línea dentro del componente.
3. Renderiza el componente `Boton` dentro de `App`, pasando diferentes valores para `texto` y `color`.

### ℹ️ **Estilos en línea en React:**

Los **estilos en línea** en React se definen utilizando objetos de JavaScript. Los nombres de las propiedades de estilo se escriben en camelCase (por ejemplo, `backgroundColor` en lugar de `background-color`).

---

## 📂 **Ejercicio 8: Componente con `children`**

### 📋 **Descripción:**

Este ejercicio te ayudará a entender cómo funciona el prop `children`. Crearás un componente `Tarjeta` que recibe un título como prop y puede contener cualquier contenido pasado como `children`. Este es un concepto fundamental para crear componentes más flexibles y reutilizables.

### 🤔 **Conceptos cubiertos:**

- Uso del prop especial `children`.
- Renderización de contenido dinámico pasado como `children`.
- Creación de componentes más reutilizables y flexibles.

### 🛠️ **Instrucciones:**

1. Crea un componente `Tarjeta` que reciba un `title` como prop.
2. Renderiza el contenido pasado como `children` dentro de la tarjeta.
3. Renderiza `Tarjeta` dentro de `App`, pasando un título y contenido entre las etiquetas de apertura y cierre.

### ℹ️ **¿Qué es `children`?**

El prop `children` es un valor especial en React que permite pasar contenido dinámico (como texto, JSX, o incluso otros componentes) dentro de un componente. Esto hace que los componentes sean más flexibles y reutilizables.

---

## 📂 **Ejercicio 9: Componente reutilizable**

### 📋 **Descripción:**

En este ejercicio, crearás un componente `Producto` que recibe `nombre`, `precio` y `descripcion` como props y muestra esta información en pantalla. Este ejercicio te ayudará a entender cómo crear componentes reutilizables que pueden recibir diferentes valores de props.

### 🤔 **Conceptos cubiertos:**

- Creación de componentes reutilizables.
- Paso de múltiples props a un componente.
- Renderización de contenido dinámico basado en props.

### 🛠️ **Instrucciones:**

1. Crea un componente `Producto` que reciba las props `nombre`, `precio` y `descripcion`.
2. Muestra esta información dentro de un contenedor `<div>`.
3. Renderiza el componente `Producto` dentro de `App` pasando diferentes valores como props.

---

## 📂 **Ejercicio 10: Manejo de eventos**

### 📋 **Descripción:**

Este ejercicio te enseña cómo manejar eventos en React. Crearás un botón que, al hacer clic, muestre un mensaje en la consola utilizando el evento `onClick`. Este ejercicio te ayudará a comprender cómo interactuar con el usuario mediante eventos en React.

### 🤔 **Conceptos cubiertos:**

- Manejo de eventos en React (por ejemplo, `onClick`).
- Uso de funciones para manejar eventos.
- Interactividad básica en aplicaciones React.

### 🛠️ **Instrucciones:**

1. Crea un botón dentro de `App` que, al hacer clic, ejecute una función que imprima un mensaje en la consola.
2. La función debe llamarse `manejarClick` y se debe pasar como prop a `onClick`.

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
   import App from "./Nivel-2-Componentes-y-Props/ejercicio-6";
   ```

4. Ejecuta el proyecto:

   ```bash
   npm start
   ```

---

¡Espero que este README te ayude a guiarte a través de los ejercicios del Nivel 2! A medida que avanzas, te familiarizarás más con los conceptos clave de React como **componentes**, **props**, y **eventos**, lo cual es fundamental para construir aplicaciones dinámicas. 🚀💻