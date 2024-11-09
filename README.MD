Esta es una lista de ejercicios prácticos dividida en 10 niveles de dificultad, subiendo de nivel cada 5 ejercicios. Empezaremos con lo básico y a medida que avancemos tocaremos temas más complejos como manejo de estado, hooks, rutas, API, contexto y más.

### **Nivel 1: Básico - Introducción a React (Conceptos, JSX y Componentes)**

1. **Hello World**: Crea una aplicación básica en React que muestre "Hello World" en la pantalla.
2. **Primer componente**: Crea un componente funcional llamado `Saludo` que reciba una prop llamada `nombre` y muestre "Hola, [nombre]".
3. **Componente con múltiples props**: Crea un componente `Usuario` que reciba `nombre` y `edad` como props y los muestre en un párrafo.
4. **JSX básico**: Crea un componente que renderice una lista de 3 frutas usando JSX.
5. **Renderizado condicional básico**: Crea un componente que reciba una prop `esVisible`. Si es `true`, muestra un mensaje, si es `false`, muestra otro.

### **Nivel 2: Componentes y Props**

6. **Lista de componentes**: Crea un componente que reciba una lista de tareas (como un array) y las muestre en una lista `<ul>`.
7. **Componente con estilos**: Crea un componente `Boton` que reciba un texto y un color como props, y aplícale estilos inline usando las props.
8. **Componente con children**: Crea un componente `Tarjeta` que reciba `title` como prop y muestre cualquier contenido pasado como `children`.
9. **Componente reutilizable**: Crea un componente `Producto` que reciba `nombre`, `precio` y `descripcion` como props y muestre esta información.
10. **Manejo de eventos**: Crea un botón que, al hacer clic, muestre un mensaje en consola usando `onClick`.

### **Nivel 3: Estado y Eventos**

11. **Estado básico**: Crea un contador que aumente en 1 cada vez que se hace clic en un botón, usando `useState`.
12. **Estado con input**: Crea un componente con un input de texto y muestra en tiempo real el texto ingresado debajo del input.
13. **Estado múltiple**: Crea una aplicación con dos contadores, cada uno con su propio botón para incrementar.
14. **Checkbox con estado**: Crea un componente que tenga un checkbox, y muestre "Activado" o "Desactivado" según el estado del checkbox.
15. **Toggle con estado**: Crea un botón que al hacer clic cambie su texto entre "Encender" y "Apagar".

### **Nivel 4: Hooks y Ciclo de Vida**

16. **useEffect básico**: Crea un componente que muestre un mensaje en consola cada vez que se renderiza usando `useEffect`.
17. **useEffect con dependencias**: Crea un contador que muestre un mensaje en consola solo cuando el valor del contador cambia.
18. **useEffect para API call**: Crea un componente que obtenga datos de una API pública usando `fetch` y los muestre en pantalla.
19. **Limpiar efectos**: Crea un componente con un contador y usa `useEffect` para actualizar el título de la página con el valor del contador.
20. **Timer con useEffect**: Crea un temporizador que cuente los segundos desde que se monta el componente usando `useEffect`.

### **Nivel 5: Formularios y Validaciones**

21. **Formulario controlado**: Crea un formulario con inputs de nombre y email, y muestra en tiempo real lo ingresado.
22. **Validación de formulario**: Añade validación al formulario para que el email tenga un formato correcto.
23. **Submit del formulario**: Al enviar el formulario, muestra los datos ingresados en una alerta.
24. **Manejo de checkbox y radio buttons**: Crea un formulario con un checkbox y radio buttons, y muestra los valores seleccionados.
25. **Select dinámico**: Crea un select con opciones dinámicas (p.ej., países) y muestra el país seleccionado.

### **Nivel 6: Manejo de Estado Avanzado**

26. **Estado complejo (arrays)**: Crea una lista de tareas donde puedas añadir tareas usando un input y un botón.
27. **Eliminar elementos**: Añade funcionalidad para eliminar una tarea de la lista.
28. **Editar elementos**: Añade funcionalidad para editar una tarea de la lista.
29. **useReducer**: Reemplaza `useState` con `useReducer` para manejar la lista de tareas.
30. **Manejo de múltiples hooks**: Usa tanto `useState` como `useReducer` en un componente complejo.

### **Nivel 7: Context API y Global State**

31. **Context API básico**: Crea un contexto para manejar el estado global de un tema oscuro/claro.
32. **Provider y Consumer**: Usa `Provider` y `useContext` para que el usuario pueda cambiar el tema desde cualquier parte de la app.
33. **Estado global con Context**: Crea una lista de favoritos usando Context API para manejar el estado global.
34. **Custom Hooks**: Crea un hook personalizado que obtenga datos de una API.
35. **Context con Reducer**: Combina `useReducer` y Context API para manejar una lista de productos en un carrito.

### **Nivel 8: React Router**

36. **Configuración básica de rutas**: Configura React Router con rutas para "Inicio", "Sobre mí" y "Contacto".
37. **Navegación con Links**: Crea enlaces para navegar entre las rutas definidas.
38. **Rutas dinámicas**: Crea una ruta dinámica para mostrar detalles de un producto basado en su ID.
39. **Redirección**: Añade un botón que redirija al usuario a otra página usando React Router.
40. **Protección de rutas**: Crea una ruta protegida que solo se muestre si el usuario está autenticado (puedes simular autenticación con un estado).

### **Nivel 9: Consumo de APIs y Manejo de Datos**

41. **Fetch con async/await**: Usa `async/await` para obtener datos de una API pública y muéstralos.
42. **Error handling**: Añade manejo de errores al consumir una API (p.ej., muestra un mensaje si falla la petición).
43. **Loading state**: Añade un estado de carga mientras se obtienen datos de la API.
44. **Renderizado condicional basado en datos**: Muestra un mensaje de "No hay datos" si la API no devuelve resultados.
45. **Filtrar datos**: Añade un input para filtrar los datos obtenidos de la API.

### **Nivel 10: Proyecto Final y Optimización**

46. **Proyecto CRUD básico**: Crea una pequeña aplicación CRUD para manejar una lista de usuarios.
47. **React.memo**: Usa `React.memo` para optimizar el rendimiento de un componente.
48. **useCallback y useMemo**: Implementa `useCallback` y `useMemo` para evitar renders innecesarios.
49. **Lazy loading**: Implementa lazy loading para cargar componentes solo cuando se necesitan.
50. **Aplicación completa**: Crea una aplicación completa que incluya navegación, consumo de API, contexto global, hooks avanzados y optimización.

¡Ahí lo tienes! Con estos ejercicios, vas a tocar prácticamente todos los conceptos importantes de React. Además, puedes ir combinando los ejercicios más avanzados para crear proyectos pequeños. ¡A darle caña! 🚀💻
