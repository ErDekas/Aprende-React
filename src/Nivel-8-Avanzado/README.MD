# 📚 **Nivel 8 - Rutas y Navegación con React Router**

¡Bienvenido al **Nivel 8** del proyecto **Aprende React**! En este nivel, aprenderás a implementar la navegación en tu aplicación React utilizando **React Router**. Veremos cómo configurar rutas, navegar entre páginas y manejar rutas dinámicas, todo lo necesario para construir aplicaciones más complejas y funcionales con múltiples vistas.

## 🛠️ **Tecnologías y herramientas usadas:**

- **React:** Biblioteca de JavaScript para construir interfaces de usuario.
- **React Router:** Librería para manejar la navegación entre páginas en aplicaciones React.
- **JavaScript (ES6):** Utilizamos la sintaxis moderna de JavaScript.
- **JSX:** Extensión de JavaScript que permite escribir HTML dentro de JavaScript.
- **React Hooks:** Uso de `useState` y otros hooks para manejar el estado y la navegación.

---

## 📂 **Ejercicio 36: Configuración Básica de Rutas**

### 📋 **Descripción:**

En este ejercicio, aprenderás a configurar rutas básicas con **React Router**. Vamos a crear tres rutas para las páginas "Inicio", "Sobre mí" y "Contacto".

### 🤔 **Conceptos cubiertos:**

- Uso básico de **React Router** para crear rutas.
- Uso de `BrowserRouter`, `Routes` y `Route`.

### 🛠️ **Instrucciones:**

1. Instala **React Router** en tu proyecto.
2. Crea tres componentes básicos: `Inicio`, `SobreMi`, y `Contacto`.
3. Configura las rutas para estos componentes usando `BrowserRouter`, `Routes`, y `Route`.

---

## 📂 **Ejercicio 37: Navegación con Links**

### 📋 **Descripción:**

En este ejercicio, aprenderemos a crear enlaces de navegación usando el componente **`Link`** de **React Router**. Esto permitirá que los usuarios naveguen entre las páginas configuradas.

### 🤔 **Conceptos cubiertos:**

- Uso de **`Link`** para navegar entre rutas.
- Entender la diferencia entre enlaces `<a>` tradicionales y el componente **`Link`**.

### 🛠️ **Instrucciones:**

1. Crea enlaces de navegación en el componente principal para las rutas configuradas en el ejercicio anterior.
2. Usa el componente **`Link`** para navegar entre las páginas.

---

## 📂 **Ejercicio 38: Rutas Dinámicas**

### 📋 **Descripción:**

En este ejercicio, aprenderemos a manejar rutas dinámicas. Usaremos parámetros en las rutas para mostrar detalles de un producto o elemento basado en un ID.

### 🤔 **Conceptos cubiertos:**

- Uso de rutas dinámicas con parámetros.
- Uso de **`useParams`** para acceder a los parámetros de la URL.

### 🛠️ **Instrucciones:**

1. Crea una ruta dinámica para mostrar detalles de un producto o ítem usando su **ID**.
2. Utiliza **`useParams`** dentro del componente para obtener el ID de la URL y mostrar la información relacionada.

---

## 📂 **Ejercicio 39: Redirección con React Router**

### 📋 **Descripción:**

En este ejercicio, aprenderemos a redirigir a los usuarios a otras páginas utilizando **React Router**. Utilizaremos el componente **`Navigate`** para realizar redirecciones programáticas.

### 🤔 **Conceptos cubiertos:**

- Redirección programática con **`Navigate`**.
- Uso de estado para realizar la redirección.

### 🛠️ **Instrucciones:**

1. Añade un botón que redirija al usuario a otra página usando el componente **`Navigate`**.
2. Utiliza un estado para gestionar la redirección después de un evento, como un clic en el botón.

---

## 📂 **Ejercicio 40: Protección de Rutas**

### 📋 **Descripción:**

En este ejercicio, aprenderemos a proteger rutas para que solo sean accesibles si el usuario está autenticado. Vamos a simular un sistema de autenticación usando un estado simple.

### 🤔 **Conceptos cubiertos:**

- Uso de **React Router** para proteger rutas.
- Creación de una ruta protegida que verifica el estado de autenticación del usuario.

### 🛠️ **Instrucciones:**

1. Crea una ruta protegida que solo se muestre si el usuario está "autenticado".
2. Usa un estado para simular el proceso de autenticación.
3. Si el usuario no está autenticado, redirígelo a una página de login o inicio.

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
   import App from "./Nivel-8-Rutas-y-Navegación/ejercicio-36";
   ```

4. Ejecuta el proyecto:

   ```bash
   npm start
   ```

---

## 💡 **Consejos para este nivel:**

- **Familiarízate con React Router:** Comprender cómo manejar la navegación es crucial para desarrollar aplicaciones web interactivas con múltiples vistas.
- **Usa las rutas dinámicas:** Las rutas dinámicas son esenciales cuando trabajas con datos que cambian o dependen de un identificador, como productos o usuarios.
- **Protege rutas importantes:** Implementar rutas protegidas es vital para aplicaciones que requieren autenticación o permisos especiales.

---

¡Felicidades por completar el Nivel 8! 🎉 Ahora tienes una comprensión sólida de cómo manejar la navegación y las rutas en aplicaciones React usando **React Router**. Esto te permitirá crear aplicaciones web dinámicas y multifuncionales. Sigue practicando y explorando nuevas funcionalidades para mejorar tus habilidades. 🚀💻