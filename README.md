# Programación III

Tareas y trabajos de la materia **Programación III** con el ingeniero.

**Tecnologías:** Java 21 · Maven · Spring Boot · Angular · Postman

## Organización

```
Programacion-III/
├── tareas/                 # Una carpeta por cada tarea
│   └── tarea-01-nombre/    # Formato: tarea-NN-descripcion-corta
│       ├── README.md       # Qué pidió el inge, fecha y cómo ejecutarla
│       ├── backend/        # Código Java (Maven / Spring Boot)
│       ├── frontend/       # Código Angular (si la tarea lo usa)
│       └── postman/        # Colecciones de Postman (.json) para probar la API
└── apuntes/                # Notas de clase
```

## Lista de tareas

| # | Tarea | Fecha | Estado |
|---|-------|-------|--------|
| - | _(todavía no hay tareas)_ | - | - |

## Cómo ejecutar

- **Backend (Java):** `cd tareas/<tarea>/backend && mvn spring-boot:run` (o `mvn compile exec:java`)
- **Frontend (Angular):** `cd tareas/<tarea>/frontend && npm install && ng serve` → abrir http://localhost:4200
- **Postman:** importar el archivo `.json` de la carpeta `postman/`
