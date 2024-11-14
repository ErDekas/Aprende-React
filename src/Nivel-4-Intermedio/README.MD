# 📚 **Nivel 4 - Hooks y Ciclo de Vida: Aprende a useEffect en React**

¡Bienvenido al **Nivel 4** del proyecto **Aprende React**! En este nivel, profundizaremos en el uso de **Hooks** como `useState` y `useEffect`. Estos hooks permiten manejar el estado y los efectos secundarios dentro de los componentes funcionales, lo cual es fundamental para crear aplicaciones más dinámicas y con interactividad avanzada.

## 🛠️ **Tecnologías y herramientas usadas:**

- **React:** Biblioteca de JavaScript para construir interfaces de usuario.
- **Create React App:** Herramienta para configurar rápidamente un proyecto de React.
- **JavaScript (ES6):** Utilizamos la sintaxis moderna de JavaScript, como funciones flecha, desestructuración y promesas.
- **JSX:** Extensión de JavaScript que permite escribir HTML dentro de JavaScript.
- **React Hooks:** Uso de los hooks `useState` y `useEffect` para manejar el estado y los efectos secundarios.

---

## 📂 **Ejercicio 16: useEffect Básico - Mensaje en consola**

### 📋 **Descripción:**

En este ejercicio, aprenderás a usar el hook `useEffect` para ejecutar código después de cada renderizado. Crearemos un componente que muestre un mensaje en consola cada vez que se renderiza el componente.

### 🤔 **Conceptos cubiertos:**

- Uso básico del hook `useEffect`.
- Comprensión del ciclo de vida de los componentes en React.

### 🛠️ **Instrucciones:**

1. Crea un componente `ComponenteConEfecto`.
2. Usa `useEffect` para mostrar un mensaje en consola cada vez que se renderice el componente.
3. Añade el código para mostrar el mensaje solo cuando el componente se renderiza.

---

## 📂 **Ejercicio 17: useEffect con dependencias - Contador**

### 📋 **Descripción:**

Este ejercicio te enseñará a usar el hook `useEffect` con un arreglo de dependencias. Vamos a crear un contador que muestre un mensaje en consola solo cuando el valor del contador cambie.

### 🤔 **Conceptos cubiertos:**

- Uso de dependencias en `useEffect` para controlar cuándo ejecutar un efecto.
- Comportamiento condicional de los efectos secundarios.

### 🛠️ **Instrucciones:**

1. Crea un componente `ContadorConEfecto`.
2. Usa `useState` para crear el estado `contador`.
3. Usa `useEffect` para mostrar un mensaje en consola cada vez que `contador` cambie.
4. Asegúrate de pasar `contador` como dependencia de `useEffect`.

---

## 📂 **Ejercicio 18: Llamada a API con useEffect - Mostrar datos**

### 📋 **Descripción:**

En este ejercicio aprenderás a hacer una llamada a una API usando `useEffect` y a mostrar los datos en la interfaz. Vamos a crear un componente que obtenga datos de una API pública y los muestre en la pantalla.

### 🤔 **Conceptos cubiertos:**

- Realizar una llamada a API usando `fetch` y `useEffect`.
- Gestionar el estado de los datos obtenidos y renderizarlos en la UI.

### 🛠️ **Instrucciones:**

1. Crea un componente `DatosDeAPI`.
2. Usa `useEffect` para hacer una llamada a la API pública `https://jsonplaceholder.typicode.com/posts`.
3. Almacena la respuesta en el estado utilizando `useState`.
4. Muestra los datos obtenidos en la interfaz.

---

## 📂 **Ejercicio 19: Limpiar efectos con useEffect - Contador y Título de la página**

### 📋 **Descripción:**

Este ejercicio te enseñará cómo limpiar efectos en React. Usaremos `useEffect` para actualizar el título de la página con el valor del contador y limpiar el efecto cuando el componente se desmonte.

### 🤔 **Conceptos cubiertos:**

- Limpiar efectos usando la función de limpieza de `useEffect`.
- Actualizar el título de la página dinámicamente.

### 🛠️ **Instrucciones:**

1. Crea un componente `ContadorConTitulo`.
2. Usa `useState` para manejar el estado del contador.
3. Usa `useEffect` para actualizar el título de la página con el valor de `contador`.
4. Asegúrate de limpiar el efecto cuando el componente se desmonte para evitar actualizaciones innecesarias.

---

## 📂 **Ejercicio 20: Timer con useEffect - Contador de segundos**

### 📋 **Descripción:**

En este ejercicio, aprenderás a crear un temporizador que cuente los segundos desde que el componente se monta. Usaremos `useEffect` para configurar un intervalo que actualice el contador cada segundo.

### 🤔 **Conceptos cubiertos:**

- Uso de `setInterval` con `useEffect` para crear temporizadores.
- Actualización del estado basado en intervalos de tiempo.
- Limpieza de efectos para evitar fugas de memoria.

### 🛠️ **Instrucciones:**

1. Crea un componente `Temporizador`.
2. Usa `useState` para mantener el valor de los segundos.
3. Usa `useEffect` para configurar un temporizador que incremente el valor de los segundos cada 1000 ms.
4. Asegúrate de limpiar el intervalo usando la función de limpieza de `useEffect`.

---

## 🚀 **Cómo ejecutar los ejercicios:**

1. Clona el repositorio:

   ```bash
   git clone https://github.com/ErDekas/Aprende-React.git
   cd Aprende-React
   ```

2. Instala las dependencias:

   ```bash
   npm install
   ```

3. Modifica `src/index.js` para importar el ejercicio que deseas probar. Por ejemplo:

   ```jsx
   import App from "./Nivel-4-Hooks-y-Ciclo-de-Vida/ejercicio-16";
   ```

4. Ejecuta el proyecto:

   ```bash
   npm start
   ```

---

## 💡 **Consejos para este nivel:**

- **Familiarízate con `useState` y `useEffect`:** Estos hooks son fundamentales para gestionar el estado y los efectos secundarios en los componentes funcionales.
- **Experimenta con dependencias:** Al usar `useEffect`, prueba agregar diferentes dependencias para ver cómo cambia el comportamiento de los efectos.
- **Practica la limpieza de efectos:** Asegúrate de limpiar los efectos cuando ya no sean necesarios, especialmente al trabajar con intervalos o suscripciones.

---

¡Felicidades por completar el Nivel 4! 🎉 Ahora tienes un buen dominio de los hooks más utilizados en React: `useState` y `useEffect`. Estos te permitirán construir aplicaciones más dinámicas y con una mejor gestión de los efectos secundarios. ¡Sigue practicando y prepárate para aprender más conceptos avanzados! 🚀💻