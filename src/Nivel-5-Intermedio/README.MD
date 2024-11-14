# 📚 **Nivel 5 - Formularios y Validaciones: Manejo de Inputs en React**

¡Bienvenido al **Nivel 5** del proyecto **Aprende React**! En este nivel, aprenderemos a trabajar con formularios e implementar validaciones. Los formularios son una parte fundamental de cualquier aplicación web interactiva, ya que permiten a los usuarios ingresar datos. Veremos cómo manejar inputs controlados, validar datos y manejar diferentes tipos de inputs como checkbox, radio buttons y selects dinámicos.

## 🛠️ **Tecnologías y herramientas usadas:**

- **React:** Biblioteca de JavaScript para construir interfaces de usuario.
- **Create React App:** Herramienta para configurar rápidamente un proyecto de React.
- **JavaScript (ES6):** Utilizamos la sintaxis moderna de JavaScript.
- **JSX:** Extensión de JavaScript que permite escribir HTML dentro de JavaScript.
- **React Hooks:** Uso de los hooks `useState` para manejar el estado de los inputs.

---

## 📂 **Ejercicio 21: Formulario Controlado - Input de Nombre y Email**

### 📋 **Descripción:**

En este ejercicio, aprenderás a crear un formulario controlado en React. Crearemos un formulario con inputs de nombre y email, mostrando en tiempo real lo que el usuario escribe.

### 🤔 **Conceptos cubiertos:**

- Uso de `useState` para manejar el estado de los inputs.
- Formularios controlados en React.

### 🛠️ **Instrucciones:**

1. Crea un componente `FormularioControlado`.
2. Usa `useState` para manejar el estado del nombre y el email.
3. Muestra los valores ingresados en tiempo real debajo del formulario.

---

## 📂 **Ejercicio 22: Validación de Formulario - Email Válido**

### 📋 **Descripción:**

En este ejercicio, añadiremos validación al formulario para que el email tenga un formato correcto. Validaremos el email solo cuando el usuario pierde el foco del campo (onBlur) o al enviar el formulario.

### 🤔 **Conceptos cubiertos:**

- Validación de formularios en React.
- Manejo de eventos como `onBlur` y `onSubmit`.

### 🛠️ **Instrucciones:**

1. Crea un componente `FormularioValidado`.
2. Usa `useState` para manejar el estado del email y los errores.
3. Añade validación al input de email usando una expresión regular.
4. Muestra un mensaje de error si el email no tiene un formato válido.

---

## 📂 **Ejercicio 23: Submit del Formulario - Mostrar Datos Ingresados**

### 📋 **Descripción:**

En este ejercicio, aprenderás a manejar el evento de envío (`onSubmit`) de un formulario. Mostraremos los datos ingresados en una alerta al enviar el formulario.

### 🤔 **Conceptos cubiertos:**

- Manejo del evento `onSubmit` en formularios.
- Validación de datos antes de enviar el formulario.

### 🛠️ **Instrucciones:**

1. Crea un componente `FormularioSubmit`.
2. Usa `useState` para manejar el estado de los inputs.
3. Al enviar el formulario, muestra los datos ingresados en una alerta.
4. Añade una simple validación para asegurar que los campos no estén vacíos.

---

## 📂 **Ejercicio 24: Manejo de Checkbox y Radio Buttons**

### 📋 **Descripción:**

En este ejercicio, aprenderás a manejar inputs de tipo checkbox y radio buttons. Crearemos un formulario que incluya ambos tipos de inputs y mostraremos los valores seleccionados en tiempo real.

### 🤔 **Conceptos cubiertos:**

- Uso de `useState` para manejar el estado de checkbox y radio buttons.
- Manejo de diferentes tipos de inputs en React.

### 🛠️ **Instrucciones:**

1. Crea un componente `FormularioCheckboxRadio`.
2. Usa `useState` para manejar el estado del checkbox y los radio buttons.
3. Muestra en pantalla el valor seleccionado de los radio buttons y si el checkbox está marcado o no.

---

## 📂 **Ejercicio 25: Select Dinámico - Países**

### 📋 **Descripción:**

En este ejercicio, aprenderás a trabajar con un select dinámico. Crearemos un select que muestre una lista de países, y el país seleccionado se mostrará en pantalla.

### 🤔 **Conceptos cubiertos:**

- Uso de `useState` para manejar el estado del select.
- Creación de un select dinámico a partir de un array de opciones.

### 🛠️ **Instrucciones:**

1. Crea un componente `SelectDinamico`.
2. Define un array de países para poblar el select.
3. Usa `useState` para manejar el país seleccionado y muestra el valor en pantalla.

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
   import App from "./Nivel-5-Formularios-y-Validaciones/ejercicio-21";
   ```

4. Ejecuta el proyecto:

   ```bash
   npm start
   ```

---

## 💡 **Consejos para este nivel:**

- **Usa formularios controlados:** Manejar el estado de los inputs permite validar y manejar datos de forma sencilla.
- **Valida datos:** Siempre valida los datos antes de enviarlos, especialmente los emails.
- **Prueba diferentes tipos de inputs:** Experimenta con checkbox, radio buttons y selects para entender cómo funcionan.

---

¡Felicidades por completar el Nivel 5! 🎉 Ahora tienes un buen dominio de los formularios en React, lo que te permitirá crear aplicaciones más interactivas y útiles. Sigue practicando y experimentando con diferentes validaciones y tipos de inputs para mejorar aún más tus habilidades. 🚀💻