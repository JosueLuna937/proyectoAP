# Todo API Mejorada

Esta es una API REST de tareas construida con Node.js y Express. Ahora incluye:

- Autenticación básica por token
- Integración con la PokéAPI
- Organización modular (controladores, rutas, servicios)
- Uso de variables de entorno

## Endpoints

### Tareas
- `GET /tareas` — Lista todas las tareas
- `POST /tareas` — Crea una nueva tarea (requiere `{ "titulo": "..." }`)
- `PUT /tareas/:id` — Marca una tarea como completada

### Pokémon
- `GET /pokemon/:nombre` — Consulta info básica de un Pokémon desde PokéAPI

## Seguridad
Se requiere autenticación por token en el header:
```
Authorization: Bearer secreto123
```

## Cómo ejecutar

1. Clona el repo y navega al proyecto.
2. Crea un archivo `.env` basado en `.env.example`
3. Instala dependencias:
```
npm install
```
4. Inicia el servidor:
```
npm start
```
