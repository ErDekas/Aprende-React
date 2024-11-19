# 📚 **Nivel 7 - Context API y Global State**

¡Bienvenido al **Nivel 7** del proyecto **Aprende React**! En este nivel, aprenderás a manejar el estado global de tu aplicación utilizando **Context API**, una herramienta poderosa para compartir datos entre componentes sin necesidad de pasar props manualmente. Este nivel es fundamental para aplicaciones que necesitan compartir información a lo largo de múltiples componentes.

## 🛠️ **Tecnologías y herramientas usadas:**

- **React Context API:** Proporciona un mecanismo para manejar estados globales.
- **JavaScript (ES6):** Utilizamos la sintaxis moderna de JavaScript.
- **React Hooks:** Uso de `useContext` y `useReducer` para gestionar el estado.
- **Componentización:** Dividir nuestra aplicación en componentes reutilizables.

---

## 📂 **Ejercicio 31: Context API básico - Tema oscuro/claro**

### 📋 **Descripción:**

En este ejercicio, aprenderás a crear un contexto básico para manejar el estado global de un tema oscuro/claro.

### 🤔 **Conceptos cubiertos:**

- Creación de un contexto con `createContext`.
- Uso de `useContext` para acceder al estado global.

### 🛠️ **Instrucciones:**

1. Crea un archivo `TemaContext.jsx`.
2. Define un contexto para manejar el estado del tema (oscuro o claro).
3. Usa el contexto en un componente para cambiar y mostrar el tema actual.

---

## 📂 **Ejercicio 32: Provider y Consumer - Cambiar el tema desde cualquier lugar**

### 📋 **Descripción:**

Extenderemos el ejercicio anterior para que cualquier parte de la aplicación pueda cambiar el tema usando `Provider` y `useContext`.

### 🤔 **Conceptos cubiertos:**

- Uso del `Provider` para compartir datos globales.
- Uso de `useContext` para consumir datos en cualquier componente.

### 🛠️ **Instrucciones:**

1. Asegúrate de que el `Provider` envuelva toda la aplicación en `index.js`.
2. Permite que cualquier área de la aplicación (no solo un botón) pueda cambiar el tema con un clic.
3. Usa el estado global del tema para modificar el estilo general de la página (fondo y texto).

---

## 📂 **Ejercicio 33: Estado global con Context - Lista de favoritos**

### 📋 **Descripción:**

En este ejercicio, utilizaremos Context API para manejar una lista de favoritos como estado global. Aprenderás a compartir y manipular datos entre componentes.

### 🤔 **Conceptos cubiertos:**

- Gestión de listas globales usando Context API.
- Manejo de funciones globales para agregar y eliminar elementos.

### 🛠️ **Instrucciones:**

1. Crea un archivo `FavoritosContext.jsx` para manejar la lógica de favoritos.
2. Permite que los usuarios agreguen o eliminen elementos de la lista de favoritos desde cualquier componente.
3. Usa `useContext` para acceder a la lista y las funciones de manejo.

---

## 📂 **Ejercicio 34: Custom Hooks - Consumo de datos de una API**

### 📋 **Descripción:**

En este ejercicio, aprenderás a crear hooks personalizados para abstraer lógica y facilitar el consumo de datos de una API.

### 🤔 **Conceptos cubiertos:**

- Creación de hooks personalizados (`useFetch`).
- Uso de hooks para obtener datos en un componente.

### 🛠️ **Instrucciones:**

1. Crea un hook personalizado `useFetch` que reciba una URL y devuelva los datos de la API.
2. Utiliza el hook en un componente para mostrar los datos obtenidos.
3. Maneja errores y estados de carga dentro del hook.

---

## 📂 **Ejercicio 35: Context con Reducer - Carrito de compras**

### 📋 **Descripción:**

Este ejercicio combina el poder de `useReducer` con Context API para manejar un carrito de compras. Aprenderás a centralizar la lógica de actualización del estado.

### 🤔 **Conceptos cubiertos:**

- Uso de `useReducer` para manejar múltiples acciones.
- Uso de Context API para compartir el estado y las funciones globalmente.

### 🛠️ **Instrucciones:**

1. Define un archivo `CarritoContext.jsx` con un reducer que maneje las acciones `AGREGAR_PRODUCTO` y `ELIMINAR_PRODUCTO`.
2. Crea un componente `Productos.jsx` para mostrar y agregar productos al carrito.
3. Implementa un componente `Carrito.jsx` que muestre los productos agregados y permita eliminarlos.

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
   import App from "./Nivel-7-Avanzado/Ejercicio-31";
   ```

4. Ejecuta el proyecto:

   ```bash
   npm start
   ```

---

## 💡 **Consejos para este nivel:**

- **Familiarízate con Context API:** Es una alternativa más simple a Redux para manejar estados globales.
- **Practica con Reducers:** `useReducer` te ayuda a organizar la lógica cuando el estado es complejo.
- **Reutiliza lógica:** Los hooks personalizados son una excelente forma de compartir lógica entre componentes.

---

¡Felicidades por completar el Nivel 7! 🎉 Ahora tienes las herramientas necesarias para manejar el estado global de tu aplicación y consumir datos eficientemente. Sigue practicando para dominar estas habilidades esenciales. 🚀💻