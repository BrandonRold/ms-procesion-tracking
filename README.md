📍 MS-PROCESION-TRAKING

🏗️ Estado del Proyecto
Este microservicio se encuentra en desarrollo activo.
Actualmente estoy implementando:

-Estructura basada en Clean Architecture
-Separación por capas (Domain, Application, Infrastructure, Presentation)
-DTOs, Repositorios, Mappers y Casos de Uso
-WebSocket Gateway desacoplado
-Integración con Redis (cache + pub/sub)
-Persistencia en base de datos NoSQL
-Conexión con GeoServer para capas geoespaciales

El objetivo es mantener un código escalable, mantenible y alineado a buenas prácticas, demostrando un enfoque profesional para reclutadores y equipos técnicos.

Publicar capas geoespaciales hacia GeoServer para visualización en mapas

🚀 Arquitectura General

Code
```markdown
Frontend (Mapa / Dashboard)
│
▼
WebSocket Gateway (NestJS)
│
├── Redis (ubicación actual + ruta en memoria)
├── NoSQL DB (histórico de posiciones)
└── GeoServer (capas geoespaciales)
```

      Laravel API (Backend principal)
      ├── Autenticación
      ├── Gestión de jornadas
      ├── Roles y permisos
      └── Orquestación del sistema

Este microservicio no gestiona usuarios, jornadas ni reglas de negocio.
Solo se encarga del tracking, lo que permite mantener una arquitectura limpia, desacoplada y escalable.

🛰️ Funcionalidades Principales

✔ WebSocket Gateway

  -Conexión persistente con clientes móviles o web.

  -Recepción de coordenadas en tiempo real.

  -Broadcast inmediato a todos los suscriptores.

  -Validación de token JWT emitido por Laravel

✔ Persistencia NoSQL

-Almacenamiento del histórico de ubicaciones.

-Optimizado para consultas geoespaciales.

-Ideal para reconstruir rutas o auditorías.

✔ Redis (Cache + Pub/Sub)

-Guarda la última ubicación para acceso instantáneo.

-Mantiene la ruta activa sin necesidad de consultar la base.

-Permite escalabilidad horizontal del WebSocket Gateway.

✔ Integración con GeoServer
-Publicación automática de capas geoespaciales.

-Exposición de WMS/WFS para mapas en tiempo real.

-Compatible con QGIS, Leaflet, OpenLayers, etc.

📦 Tecnologías Utilizadas

-Componente Tecnología

-Framework NestJS (TypeScript)

-Tiempo real WebSocket Gateway

-Cache / PubSub Redis

-Base de datos MongoDB / DocumentDB / NoSQL equivalente

-GIS GeoServer

-Autenticación JWT emitido por Laravel

-Contenedores Docker (opcional)

📡 Flujo de Tracking

-El dispositivo envía su ubicación al WebSocket Gateway.

-El servicio valida el token JWT con Laravel.

-La ubicación se guarda en Redis como “última posición”.

-Se agrega la coordenada a la ruta activa.

-Se persiste en la base NoSQL para histórico.

-Se emite la actualización a todos los clientes conectados.

-GeoServer actualiza la capa geoespacial correspondiente.

🛠 Instalación y Ejecución

1. Instalar dependencias

   bash
   npm install

2. Variables de entorno

   Configurar .env basado en .env.example:

Code

```python
REDIS_HOST=
REDIS_PORT=
NOSQL_URI=
JWT_PUBLIC_KEY=
GEOSERVER_URL=
GEOSERVER_USER=
GEOSERVER_PASSWORD=
```

3. Modo desarrollo
   bash
   npm run start:dev

4. Producción

bash
npm run start:prod
🧪 Tests

```console
bash
npm run test
npm run test:e2e
npm run test:cov
```

📁 Estructura del Proyecto

Code

```json
src/
├── websocket/
│ ├── gateway.ts
│ ├── events.ts
│ └── dto/
├── tracking/
│ ├── tracking.service.ts
│ ├── tracking.repository.ts
│ └── schemas/
├── redis/
├── geoserver/
└── common/
```

🔐 Seguridad

-Validación de JWT contra Laravel.

-Sanitización de payloads.

-Rate limiting por conexión.

-Canales WebSocket segmentados por jornada.

🌍 Integración con GeoServer

El microservicio expone endpoints internos para:

-Crear capas dinámicas

-Actualizar features

-Publicar rutas en tiempo real

-Servir datos a clientes GIS (QGIS, Leaflet, OpenLayers)

⭐ Autor
Brandon Roldán Salcedo  

Backend Developer — NestJS, Laravel, GIS, Seguridad
