# 📚 **Nivel 3 - Estado y Eventos: Aprende a manejar el estado y eventos en React**

¡Bienvenido al **Nivel 3** del proyecto **Aprende React**! En este nivel, nos enfocaremos en trabajar con **estado** y **eventos** en React utilizando hooks como `useState`. Estos ejercicios te enseñarán cómo gestionar datos internos de los componentes y cómo responder a la interacción del usuario. Aprenderás a crear componentes interactivos y a manejar diferentes tipos de eventos.

## 🛠️ **Tecnologías y herramientas usadas:**

- **React:** Biblioteca de JavaScript para construir interfaces de usuario.
- **Create React App:** Herramienta para configurar rápidamente un proyecto de React.
- **JavaScript (ES6):** Utilizamos la sintaxis moderna de JavaScript, como funciones flecha y desestructuración.
- **JSX:** Extensión de JavaScript que permite escribir HTML dentro de JavaScript.
- **React Hooks:** Uso de `useState` para manejar el estado en componentes funcionales.

---

## 📂 **Ejercicio 11: Estado Básico - Contador**

### 📋 **Descripción:**

En este ejercicio, aprenderás a manejar el estado básico en React con el hook `useState`. Crearás un contador que aumenta en 1 cada vez que se hace clic en un botón.

### 🤔 **Conceptos cubiertos:**

- Uso del hook `useState` para manejar el estado.
- Modificación del estado mediante funciones.
- Renderización dinámica basada en el estado.

### 🛠️ **Instrucciones:**

1. Crea un componente `Contador`.
2. Usa `useState` para definir un estado llamado `contador`.
3. Muestra el valor del contador y un botón para incrementarlo.
4. Actualiza el estado cada vez que se hace clic en el botón.

---

## 📂 **Ejercicio 12: Estado con Input de Texto**

### 📋 **Descripción:**

En este ejercicio, crearás un componente con un input de texto que muestra el texto ingresado en tiempo real debajo del input. Aprenderás a manejar el estado del input y a utilizar el evento `onChange`.

### 🤔 **Conceptos cubiertos:**

- Uso de `useState` para manejar el estado del input.
- Gestión de eventos con `onChange`.
- Renderización en tiempo real del estado.

### 🛠️ **Instrucciones:**

1. Crea un componente `InputTexto`.
2. Define un estado para almacenar el texto ingresado.
3. Usa el evento `onChange` para actualizar el estado en tiempo real.
4. Muestra el texto ingresado debajo del input.

---

## 📂 **Ejercicio 13: Estado Múltiple - Dos Contadores**

### 📋 **Descripción:**

En este ejercicio, aprenderás a manejar múltiples estados dentro de un mismo componente. Crearás una aplicación con dos contadores independientes, cada uno con su propio botón para incrementar.

### 🤔 **Conceptos cubiertos:**

- Uso de múltiples estados con `useState`.
- Gestión de eventos y estados independientes.
- Modificación de estados múltiples en un mismo componente.

### 🛠️ **Instrucciones:**

1. Crea un componente `Contadores`.
2. Define dos estados, uno para cada contador.
3. Crea dos botones, uno para incrementar cada contador.
4. Muestra los contadores y sus botones en la interfaz.

---

## 📂 **Ejercicio 14: Checkbox con Estado**

### 📋 **Descripción:**

En este ejercicio, crearás un componente con un checkbox que cambia el texto entre "Activado" y "Desactivado" según su estado. Aprenderás a manejar el estado booleano y a actualizarlo con eventos.

### 🤔 **Conceptos cubiertos:**

- Uso del estado booleano con `useState`.
- Gestión del evento `onChange` en un checkbox.
- Renderización condicional basada en el estado.

### 🛠️ **Instrucciones:**

1. Crea un componente `Checkbox`.
2. Define un estado booleano para controlar si el checkbox está activado o desactivado.
3. Usa el evento `onChange` para alternar el estado.
4. Muestra el texto "Activado" o "Desactivado" según el estado del checkbox.

---

## 📂 **Ejercicio 15: Toggle con Estado**

### 📋 **Descripción:**

En este ejercicio, crearás un botón que alterna su texto entre "Encender" y "Apagar" al hacer clic. Aprenderás a implementar un toggle utilizando el estado y eventos de React.

### 🤔 **Conceptos cubiertos:**

- Creación de un toggle usando el estado.
- Gestión de eventos `onClick`.
- Renderización dinámica basada en el estado.

### 🛠️ **Instrucciones:**

1. Crea un componente `Toggle`.
2. Define un estado para controlar el texto del botón.
3. Usa el evento `onClick` para alternar el texto entre "Encender" y "Apagar".
4. Renderiza el botón con el texto actualizado.

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
   import App from "./Nivel-3-Estado-y-Eventos/ejercicio-11";
   ```

4. Ejecuta el proyecto:

   ```bash
   npm start
   ```

---

## 💡 **Consejos para este nivel:**

- Familiarízate con el hook `useState`, ya que es fundamental para manejar el estado en componentes funcionales.
- No te preocupes si te confundes con los eventos al principio; la práctica te ayudará a entender cómo funcionan.
- Experimenta cambiando el estado de diferentes maneras para ver cómo afecta a la interfaz.

---

¡Felicidades por completar el Nivel 3! 🎉 Ahora tienes una buena base en el manejo del estado y eventos en React, lo cual es esencial para crear aplicaciones interactivas. Sigue adelante y prepárate para aprender más conceptos avanzados en los siguientes niveles. 🚀💻