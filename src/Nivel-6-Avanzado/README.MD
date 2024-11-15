# 📚 **Nivel 6 - Manejo de Estado Avanzado: useReducer y Estado Complejo en React**

¡Bienvenido al **Nivel 6** del proyecto **Aprende React**! En este nivel, aprenderemos a manejar estados más complejos en React utilizando `useReducer` y gestionando estructuras de datos como arrays. Trabajar con estados complejos y múltiples hooks es esencial para construir aplicaciones robustas y dinámicas.

## 🛠️ **Tecnologías y herramientas usadas:**

- **React:** Biblioteca de JavaScript para construir interfaces de usuario.
- **Create React App:** Herramienta para configurar rápidamente un proyecto de React.
- **JavaScript (ES6):** Utilizamos la sintaxis moderna de JavaScript.
- **JSX:** Extensión de JavaScript que permite escribir HTML dentro de JavaScript.
- **React Hooks:** Uso de `useState` y `useReducer` para manejar el estado avanzado.

---

## 📂 **Ejercicio 26: Estado Complejo (Arrays) - Lista de Tareas**

### 📋 **Descripción:**

En este ejercicio, aprenderás a manejar arrays en el estado. Crearemos una lista de tareas donde el usuario podrá añadir nuevas tareas utilizando un input y un botón.

### 🤔 **Conceptos cubiertos:**

- Uso de `useState` para manejar un array como estado.
- Manejo de listas en React.

### 🛠️ **Instrucciones:**

1. Crea un componente `ListaDeTareas`.
2. Usa `useState` para manejar el estado de las tareas.
3. Permite al usuario añadir una nueva tarea al array de tareas.

---

## 📂 **Ejercicio 27: Eliminar Elementos - Lista de Tareas Interactiva**

### 📋 **Descripción:**

En este ejercicio, añadiremos funcionalidad para eliminar tareas de la lista. Aprenderás a manipular arrays en el estado de React.

### 🤔 **Conceptos cubiertos:**

- Uso de `useState` para actualizar un array.
- Filtrado de elementos en un array.

### 🛠️ **Instrucciones:**

1. Crea un botón "Eliminar" junto a cada tarea.
2. Implementa la funcionalidad para eliminar la tarea seleccionada del array de tareas.

---

## 📂 **Ejercicio 28: Editar Elementos - Actualizar Tareas**

### 📋 **Descripción:**

En este ejercicio, añadiremos funcionalidad para editar las tareas de la lista. Permitir al usuario modificar el texto de una tarea es clave para mejorar la interactividad.

### 🤔 **Conceptos cubiertos:**

- Uso de `useState` para manejar la edición de tareas.
- Manejo de inputs y eventos en React.

### 🛠️ **Instrucciones:**

1. Añade un botón "Editar" junto a cada tarea.
2. Permite al usuario modificar el texto de la tarea y guardar los cambios.
3. Valida que el texto no esté vacío antes de guardar la edición.

---

## 📂 **Ejercicio 29: Manejo del Estado con useReducer**

### 📋 **Descripción:**

En este ejercicio, aprenderás a usar el hook `useReducer` para manejar el estado de la lista de tareas. `useReducer` es útil para manejar estados complejos y centralizar la lógica de actualización.

### 🤔 **Conceptos cubiertos:**

- Uso del hook `useReducer` en lugar de `useState`.
- Implementación de un reducer para manejar acciones de adición, eliminación y edición de tareas.

### 🛠️ **Instrucciones:**

1. Reemplaza `useState` con `useReducer` para manejar la lista de tareas.
2. Define un reducer que maneje las acciones de "AGREGAR_TAREA", "ELIMINAR_TAREA" y "EDITAR_TAREA".
3. Utiliza el reducer en el componente para manejar el estado de las tareas.

---

## 📂 **Ejercicio 30: Manejo de Múltiples Hooks**

### 📋 **Descripción:**

En este ejercicio, combinaremos el uso de `useState` y `useReducer` en un componente más complejo. Aprenderás a manejar diferentes tipos de estado dentro de un mismo componente.

### 🤔 **Conceptos cubiertos:**

- Uso de múltiples hooks (`useState` y `useReducer`) en un mismo componente.
- Gestión avanzada del estado en React.

### 🛠️ **Instrucciones:**

1. Utiliza `useState` para manejar el input de nueva tarea.
2. Utiliza `useReducer` para manejar la lista de tareas.
3. Integra ambos hooks para permitir al usuario añadir, editar y eliminar tareas.

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
   import App from "./Nivel-6-Manejo-de-Estado-Avanzado/ejercicio-26";
   ```

4. Ejecuta el proyecto:

   ```bash
   npm start
   ```

---

## 💡 **Consejos para este nivel:**

- **Familiarízate con `useReducer`:** Es una herramienta poderosa para manejar estados complejos y múltiples acciones.
- **Practica con arrays:** Manipular arrays es una habilidad clave en React, especialmente para manejar listas de datos.
- **Combina hooks:** No dudes en combinar `useState`, `useReducer` y otros hooks para manejar diferentes tipos de estado.

---

¡Felicidades por completar el Nivel 6! 🎉 Ahora tienes un buen dominio del manejo de estado avanzado en React, lo que te permitirá construir aplicaciones más dinámicas y escalables. Sigue practicando y experimentando para mejorar aún más tus habilidades. 🚀💻