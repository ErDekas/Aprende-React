# 📚 **Nivel 9 - Consumo de APIs y Manejo de Datos**

¡Bienvenido al **Nivel 9** del proyecto **Aprende React**! En este nivel, aprenderás a trabajar con datos externos consumiendo APIs mediante **fetch** y `async/await`. Además, implementaremos prácticas esenciales como manejo de errores, estados de carga, renderizado condicional, y filtrado dinámico de datos. Estos conceptos son fundamentales para construir aplicaciones React que interactúan con servidores y manejan datos en tiempo real.

## 🛠️ **Tecnologías y herramientas usadas:**

- **React:** Biblioteca de JavaScript para construir interfaces de usuario.
- **fetch API:** Método nativo de JavaScript para realizar solicitudes HTTP.
- **JavaScript (ES6+):** Utilizamos sintaxis moderna de JavaScript.
- **React Hooks:** Uso de `useState` y `useEffect` para manejar estados y efectos secundarios.

---

## 📂 **Ejercicio 41: Fetch con async/await**

### 📋 **Descripción:**

Aprenderás a usar `async/await` para consumir una API pública y mostrar los datos en pantalla. Este enfoque simplifica la lectura y el manejo de solicitudes asincrónicas.

### 🤔 **Conceptos cubiertos:**

- Uso de `fetch` para realizar solicitudes HTTP.
- Manejo de promesas con `async/await`.

### 🛠️ **Instrucciones:**

1. Usa `fetch` para obtener datos de una API pública.
2. Usa `useEffect` para realizar la solicitud cuando el componente se monte.
3. Muestra los datos en pantalla.

---

## 📂 **Ejercicio 42: Error handling**

### 📋 **Descripción:**

Implementaremos manejo de errores al consumir una API para mostrar mensajes informativos en caso de fallos en la solicitud.

### 🤔 **Conceptos cubiertos:**

- Manejo de errores con `try/catch`.
- Renderizado condicional para mostrar errores.

### 🛠️ **Instrucciones:**

1. Envuelve la solicitud en un bloque `try/catch`.
2. Muestra un mensaje de error si la solicitud falla.
3. Prueba simulando errores como desconectar la red o usando una URL incorrecta.

---

## 📂 **Ejercicio 43: Loading state**

### 📋 **Descripción:**

Añadiremos un estado de carga para indicar al usuario que los datos están siendo obtenidos mientras la solicitud está en proceso.

### 🤔 **Conceptos cubiertos:**

- Uso de un estado para manejar la visualización de mensajes de carga.
- Renderizado condicional basado en el estado de carga.

### 🛠️ **Instrucciones:**

1. Añade un estado `isLoading` para controlar si la aplicación está cargando datos.
2. Muestra un mensaje "Cargando..." mientras los datos se obtienen.
3. Cambia el estado de carga cuando la solicitud termine.

---

## 📂 **Ejercicio 44: Renderizado condicional basado en datos**

### 📋 **Descripción:**

En este ejercicio, aprenderás a manejar casos donde no se reciben datos de la API, mostrando un mensaje que indique que no hay resultados disponibles.

### 🤔 **Conceptos cubiertos:**

- Renderizado condicional basado en la longitud de los datos obtenidos.
- Mejora de la experiencia de usuario con mensajes informativos.

### 🛠️ **Instrucciones:**

1. Comprueba si los datos obtenidos están vacíos.
2. Muestra un mensaje "No hay datos disponibles" en lugar de la lista.
3. Asegúrate de que el mensaje no se muestre durante la carga.

---

## 📂 **Ejercicio 45: Filtrar datos**

### 📋 **Descripción:**

Añadiremos un campo de entrada para que los usuarios puedan filtrar los datos obtenidos de la API en tiempo real según un criterio específico.

### 🤔 **Conceptos cubiertos:**

- Manejo de inputs controlados.
- Filtrado dinámico de datos basados en el estado.

### 🛠️ **Instrucciones:**

1. Añade un estado `busqueda` para capturar el término de búsqueda.
2. Usa un input controlado para actualizar el estado `busqueda`.
3. Filtra los datos según el texto ingresado y muestra solo los resultados coincidentes.

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
   import App from "./Nivel-9-Consumo-de-APIs/ejercicio-41";
   ```

4. Ejecuta el proyecto:

   ```bash
   npm start
   ```

---

## 💡 **Consejos para este nivel:**

- **Maneja los errores con cuidado:** Es mejor que el usuario reciba un mensaje claro cuando algo falla en lugar de una pantalla en blanco.
- **Usa estados intermedios como `loading` y `error`:** Estos mejoran la experiencia del usuario al indicar qué sucede en segundo plano.
- **Practica el filtrado:** Manejar arrays dinámicamente es una habilidad clave al trabajar con datos en React.

---

¡Felicidades por completar el Nivel 9! 🎉 Ahora tienes las herramientas necesarias para consumir APIs y manejar datos dinámicos en tus aplicaciones React. ¡Sigue explorando nuevas APIs y construyendo proyectos increíbles! 🚀💻