# QroMovil 
<h4 align="center">
:construction: Proyecto en construcción :construction:
</h4>

<p align="center">
  <img src="/public/img/logo_no_back.png" alt="Logo" width="200"><br><br>
</p>

## Objetivo:
Nuestro propósito es mejorar el servicio de transporte público en el estado de Querétaro. Con la integración de una aplicación móvil en la cual podrás visualizar el tiempo que tardarán en llegar los diversos servicios de transporte público como autobús, taxi y bicicleta, al sitio donde te encuentras. 


## Funcionalidades del proyecto

1. **Gestión de Usuario**
   - Creación de usuario.
   - Ingreso a través de un usuario y contraseña.
   - Menú de usuario para observar datos, consultar QroPuntos, cerrar o eliminar sesión.
   - Acumulación de puntos (QroPuntos) al realizar reportes, sugerencias o observaciones sobre el servicio del transporte y sobre la app.

2. **Rutas**
   - Consultar el número de rutas y su recorrido.

3. **Localización de Transporte**
   - Ingresar dirección actual y visualizar transportes cercanos.
   - Apartados de "Bus", "Taxi" y "Bici" con servicio y ubicación de cada uno.

4. **Reportes**
   - Realizar reportes a través de la página y ganar puntos.

5. **Escalabilidad**
   - En etapas futuras se considera la implementación de un servicio de "Emergencias" para solicitar asistencia policial cercana en caso de inconvenientes.

## 📁 Acceso al proyecto
Puedes consultar su funcionalidad hasta el momento [▶️](https://qromovil.onrender.com).

## 📋 Requisitos

### Sistema Operativo
- Windows, MacOS o Linux.

### Node.js y npm
- Deberás tener Node.js y npm (gestor de paquetes de Node) instalados. [Descargar desde el sitio oficial de Node.js](https://nodejs.org/).

### 🗄️ Base de Datos
- **ORM**: Utilizamos [Prisma](https://www.prisma.io/) como nuestro ORM para facilitar la gestión y manipulación de la base de datos.
- **Host**: Confiamos en [PlanetScale](https://planetscale.com/) para el alojamiento de nuestra base de datos, aprovechando su alta disponibilidad y escalabilidad.
- **Lenguaje de Base de Datos**: Elegimos [MySQL](https://www.mysql.com/) por su confiabilidad y eficiencia en el manejo de datos.


### Entorno de desarrollo
- Cualquier editor de texto o IDE que soporte desarrollo en JavaScript/Node.js. Ejemplos: Visual Studio Code, Atom, WebStorm, etc.

### Conexión a Internet
- Necesaria para instalar paquetes a través de npm y acceder a ciertos servicios en línea (si aplica).

### Navegador Web
- Se recomienda usar navegadores modernos como Google Chrome, Mozilla Firefox, Safari o Microsoft Edge para probar y usar la aplicación.

### Variables de Entorno
- Si tu aplicación utiliza variables de entorno (por ejemplo, claves API, credenciales de base de datos), deberías mencionar que necesitan ser configuradas. Puedes proporcionar un archivo de ejemplo (por ejemplo, `.env.example`) para que los usuarios sepan qué variables de entorno deben establecer.

### Conocimientos previos (opcional)
- Si bien no es un requisito técnico 😊, es útil mencionar si es recomendable tener algún conocimiento previo para trabajar con el proyecto, como nociones básicas de Node.js, experiencia con bases de datos, etc.

## 🛠️ Configuración para Desarrollo
### Instalar dependencias 
```sh
npm i  
```

Dependencias de Node:
``` terminal
npm i @prisma/client
npm i animate.css
npm i bcrypt
npm i bootstrap
npm i bootstrap-icons
npm i dotenv
npm i ejs
npm i express
npm i express-session
npm i method-override
npm i nodemon
npm i path
npm i prisma
```
Iniciar proyecto de node :
``` terminal
npm start 
npm run dev
```

