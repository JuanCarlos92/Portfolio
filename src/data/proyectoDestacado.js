export const proyectosDestacados = [
  {
    nombre: "Wiki Monster Hunter",
    linkApp: "https://tfg-juancarlosfilter.netlify.app",
    imagen: "img/mh-web.png",

    overlay: {
      titulo: "Wiki Monster Hunter",
      texto: "Ver página web"
    },

    texto: {
      titulo: "Wiki Colaborativa",
      parrafos: [
        `Proyecto <span>wiki</span> de <span>Monster Hunter</span> con un backend en <span>Spring Boot</span>, microservicios y APIs REST seguras.<br>
        El frontend está desarrollado en <span>Angular</span> con <span>Ionic</span>, utilizando <span>TypeScript</span> y componentes reutilizables.<br> 
        La aplicación implementa autenticación y separación de lógica mediante <span>DTOs</span>.`,

        `<span>Stack Tecnológico</span><br>
        - Backend: <span>Spring Boot</span>, <span>Lombok</span>, <span>JPA/Hibernate</span>, <span>MySQL</span>.<br>
        - Frontend: <span>Angular</span>, <span>Ionic</span>, <span>TypeScript</span>.<br>
        - Autenticación y Seguridad: <span>AWS Cognito</span>.<br>`,

        `<span>Despliegue y Cloud</span><br>
        - Backend: <span>AWS EC2</span> con microservicios desplegados.<br>
        - Base de Datos: <span>AWS RDS (MySQL)</span> con backups automáticos y alta disponibilidad.<br>
        - Frontend: Publicado en <span>Netlify</span>, optimizado para desktop y móvil.<br>
        - Gestión de Dominio y SSL: <span>Cloudflare</span> para DNS y certificados SSL.<br>`,

        `<span>Lo Más Destacado del Proyecto</span><br>
        - Modularidad: Proyecto realizado con microservicio Spring Boot.<br>
        - Rendimiento y escalabilidad: Backend y frontend consumiendo APIs de manera eficiente.<br>
        - Mantenibilidad: Patrones de diseño aplicados, DTOs y servicios separados.`
      ]
    }
  }
];
