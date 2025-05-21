### 1\. **CoreModule**

Contiene servicios globales que se instancian **una sola vez**:

* *   Interceptores HTTP
*     
* *   Guards
*     
* *   Servicios de autenticación
*     
* *   Servicios de configuración
*     

Se importa **solo en `AppModule`**.

### 2\. **SharedModule**

Contiene componentes y utilidades **reutilizables**:

* *   Botones, modales, inputs personalizados
*     
* *   Pipes (formateo de fechas, números)
*     
* *   Directivas (e.g. `appOnlyNumber`)
*     

Se importa donde se necesite, incluso en módulos de `features`.

* * *

### 3\. **Features**

Cada funcionalidad principal (auth, usuarios, dashboard, etc.) tiene su propio módulo:

* *   Contiene sus propias rutas, componentes, servicios, modelos.
*     
* *   Aplica **lazy loading** para rendimiento.
*     
* *   Facilita el trabajo por equipos (cada feature aislada).
*     

* * *

### 4\. **Routing por módulo**

Cada `feature` tiene su propio archivo de rutas, por ejemplo:


Esto se carga de forma perezosa desde `app-routing.module.ts`:

* * *

### 5\. **LayoutModule**

Agrupa layouts como:

* *   Layout de autenticación
*     
* *   Layout principal con sidebar y navbar
*     
* *   `router-outlet` central
*     



* * *

## 🧠 Tips adicionales

* *   Usa **interfaces y DTOs** para tipar peticiones/respuestas.
*     
* *   Usa **Reactive Forms** y validadores personalizados.
*     
* *   Usa **rxjs** con buenas prácticas (unsubscribe automático, `takeUntil`, `async pipe`, etc).
*     
* *   Aplica **lazy loading** y preloading cuando escale la app.
*     
* *   Usa **Environment files** para separar configs (dev, prod).
*     
* *   Usa **eslint + prettier** y formatea código automáticamente.
*
