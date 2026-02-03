export const proyectosDestacados = [
  {
    nombre: "Wiki Monster Hunter",
    linkApp: "https://tfg-juancarlosfilter.netlify.app",
    imagen: "./img/mh-web.png",

    overlay: {
      titulo: "Wiki Monster Hunter",
      texto: "Ver página web"
    },

    texto: {
      titulo: "Wiki Colaborativa",
      parrafos: [
        `Este proyecto es una <span>wiki</span> especializada en
        <span>Monster Hunter</span>, desarrollada con
        <span>Spring Boot</span> y <span>Angular</span>. Implementa
        autenticación con <span>AWS Cognito</span> (incluyendo login con Google),
        microservicios registrados en <span>Eureka Server</span>, principios
        <span>SOLID</span>, uso de <span>DTOs</span> para separar la lógica de negocio
        y documentación interactiva con <span>Swagger</span>.`,

        `En el backend se han utilizado <span>Lombok</span> para reducir código repetitivo,
        <span>JPA/Hibernate</span> para el mapeo de entidades y
        <span>Postman</span> para la validación de endpoints. Además, se aplicaron
        <span>patrones de diseño</span> para lograr una arquitectura mantenible y escalable.`,

        `El frontend consume los endpoints mediante services,
        aplicando un diseño modular con componentes reutilizables y modelos
        tipados en <span>TypeScript</span>. La interfaz está optimizada con <span>Ionic</span>
        para ofrecer una experiencia responsiva en dispositivos móviles y escritorio.`,

        `El despliegue se realizó en <span>AWS</span> utilizando instancias
        <span>EC2</span> para el backend y <span>RDS</span> como base de datos, con
        el frontend publicado en <span>Netlify</span>. La gestión del dominio y
        certificados SSL se configuró con <span>Cloudflare</span>.`
      ]
    }
  },
    {
    nombre: "Konki Burger",
    linkApp: "https://konkiburger.jcfilter.dev/",
    imagen: "./img/konkiburger.jpg",

    overlay: {
      titulo: "Konki Burger",
      texto: "Ver página web"
    },

    texto: {
      titulo: "Konki Burger",
      parrafos: [
        `Konki Burger es una <span>App web completa</span> de pedidos y gestión diseñada para un restaurante de hamburguesas real. La idea era crear esta web para agilizar los pedidos `,

      `<span>Stack Tecnológico (Full Stack - Cloud Native)</span><br>
      - Frontend Core: <span>Next.js</span> y <span>React</span> junto con <span>TypeScript</span>.<br>
      - Estilo y UI: <span>Tailwind CSS</span> y <span>ShadCN UI</span>.<br>
      - Base de Datos: <span>Firestore (NoSQL)</span>.<br>
      - Backend y Cloud: <span>Firebase Authentication, Hosting y Secret Manager</span>.<br>
      - Gestión de Estado: <span>React Context API</span>.`,

      `<span>Lo Más Destacado del Proyecto</span><br>
      - Experiencia del Cliente: Menú interactivo y Carrito persistente que sigue al usuario en cualquier dispositivo.<br>
      - Comunicación: Envío de emails automáticos para confirmar pedidos y notificar al administrador.<br>
      - Seguridad y Cuentas: Autenticación segura gracias a <span>Firebase Authentication</span>.<br>
      - Panel de Gestión: Espacio del administrador puede ver y gestionar pedidos en tiempo real, y mantener el menú con CRUD completo de productos.<br>
      - Protección de Datos: Reglas estrictas de Firestore y uso de Secret Manager.`
      ]
    }
  }
];

