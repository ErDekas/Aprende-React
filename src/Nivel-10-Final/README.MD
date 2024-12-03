# 📚 **Nivel 10 - Proyecto Final y Optimización**

¡Bienvenido al **Nivel 10**, el último nivel del proyecto **Aprende React**! 🎉 Aquí consolidarás todos los conocimientos adquiridos durante el curso para crear una **aplicación completa** que integre navegación, consumo de APIs, manejo de estado global, hooks avanzados y optimización. Este nivel te llevará a un nuevo nivel de confianza como desarrollador React.

---

## 🛠️ **Tecnologías y herramientas usadas:**

- **React:** Biblioteca de JavaScript para construir interfaces de usuario.
- **Context API:** Para manejar el estado global de la aplicación.
- **React Router:** Implementación de rutas y navegación entre páginas.
- **fetch API:** Para consumir datos desde un servidor externo.
- **React.memo y useCallback:** Optimización del rendimiento.
- **React.lazy y Suspense:** Carga diferida de componentes para mejorar la experiencia de usuario.
- **OMDb API:** Fuente de datos de películas (API Key: `1a3dcaad`).

---

## 📂 **Ejercicio 46: Proyecto CRUD básico**

### 📋 **Descripción:**

Construye una pequeña aplicación que permita manejar una lista de usuarios con las operaciones básicas de **Crear**, **Leer**, **Actualizar** y **Eliminar** (CRUD). Utilizaremos el **localStorage** para almacenar los datos.

### 🤔 **Conceptos cubiertos:**

- Manejo de estado con React Hooks.
- Uso de `localStorage` para persistencia de datos.
- Renderizado condicional basado en el estado.

### 🛠️ **Instrucciones:**

1. Crea un estado para manejar la lista de usuarios.
2. Implementa funciones para añadir, editar y eliminar usuarios.
3. Persiste los cambios en el `localStorage`.

---

## 📂 **Ejercicio 47: React.memo**

### 📋 **Descripción:**

Usa **`React.memo`** para optimizar el rendimiento de un componente que muestra elementos individuales de una lista. Evita renders innecesarios si las propiedades del componente no han cambiado.

### 🤔 **Conceptos cubiertos:**

- Evitar renders innecesarios con `React.memo`.
- Debugging para identificar componentes que se renderizan innecesariamente.

### 🛠️ **Instrucciones:**

1. Identifica el componente que puede beneficiarse de `React.memo`.
2. Aplica `React.memo` para evitar que se vuelva a renderizar si sus props no han cambiado.
3. Comprueba el rendimiento con herramientas de React DevTools.

---

## 📂 **Ejercicio 48: useCallback y useMemo**

### 📋 **Descripción:**

Utiliza **`useCallback`** y **`useMemo`** para mejorar el rendimiento en funciones y cálculos costosos. Estos hooks ayudan a evitar que se generen nuevas instancias en cada render.

### 🤔 **Conceptos cubiertos:**

- Memorización de funciones con `useCallback`.
- Optimización de cálculos costosos con `useMemo`.

### 🛠️ **Instrucciones:**

1. Identifica las funciones que se pasan como props y podrían beneficiarse de `useCallback`.
2. Implementa `useMemo` para almacenar valores derivados que no necesitan recalcularse en cada render.
3. Comprueba el impacto en el rendimiento.

---

## 📂 **Ejercicio 49: Lazy loading**

### 📋 **Descripción:**

Implementa **carga diferida** con **`React.lazy`** y **`Suspense`** para cargar componentes solo cuando se necesitan. Esto es útil en aplicaciones grandes con múltiples vistas para mejorar el tiempo de carga inicial.

### 🤔 **Conceptos cubiertos:**

- Uso de `React.lazy` para carga diferida de componentes.
- Uso de `Suspense` para mostrar un fallback mientras el componente carga.

### 🛠️ **Instrucciones:**

1. Divide tu aplicación en módulos o vistas independientes.
2. Usa `React.lazy` para importar los componentes o vistas diferidas.
3. Rodea los componentes con `Suspense` para manejar la espera.

---

## 📂 **Ejercicio 50: Aplicación completa - Buscador de Películas**

### 📋 **Descripción:**

Crea una aplicación completa que consuma la API de **OMDb** para buscar películas. Integra navegación, manejo de estado global, optimización de rendimiento y carga diferida de componentes.

### 🤔 **Conceptos cubiertos:**

- Consumo de APIs con `fetch`.
- Context API para manejar el estado global.
- Optimización con `React.memo` y hooks avanzados.
- Carga diferida de componentes con `React.lazy`.

### 🛠️ **Instrucciones:**

1. Crea un formulario para que los usuarios puedan buscar películas por su nombre.
2. Consume la API de OMDb (`https://www.omdbapi.com/`) para obtener resultados.
3. Muestra los resultados en una lista con tarjetas individuales.
4. Implementa navegación para detalles de una película específica.
5. Optimiza el rendimiento utilizando `React.memo`, `useCallback` y `useMemo`.
6. Usa `React.lazy` para cargar componentes de forma diferida.

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
   import App from "./Nivel-10-Proyecto-Final/ejercicio-46";
   ```

4. Ejecuta el proyecto:

   ```bash
   npm start
   ```

---

## 💡 **Consejos para este nivel:**

- **Divide y vencerás:** Trabaja cada parte de la aplicación como un módulo independiente y luego intégralos.
- **Piensa en la optimización:** Usa herramientas como React DevTools para identificar cuellos de botella en el rendimiento.
- **Sigue aprendiendo:** Este proyecto es solo el comienzo. Continúa explorando temas avanzados como testing, SSR o GraphQL.

---

🎉 **¡Felicidades! Has completado el curso Aprende React.** Ahora estás listo para construir aplicaciones robustas y escalables usando React. 🚀