import{r as x}from"./index.DiEladB3.js";var l={exports:{}},i={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var u;function g(){if(u)return i;u=1;var r=Symbol.for("react.transitional.element"),o=Symbol.for("react.fragment");function s(p,n,a){var t=null;if(a!==void 0&&(t=""+a),n.key!==void 0&&(t=""+n.key),"key"in n){a={};for(var c in n)c!=="key"&&(a[c]=n[c])}else a=n;return n=a.ref,{$$typeof:r,type:p,key:t,ref:n!==void 0?n:null,props:a}}return i.Fragment=o,i.jsx=s,i.jsxs=s,i}var m;function v(){return m||(m=1,l.exports=g()),l.exports}var e=v();const d=[{nombre:"Wiki Monster Hunter",linkApp:"https://tfg-juancarlosfilter.netlify.app",imagen:"./img/mh-web.png",overlay:{titulo:"Wiki Monster Hunter",texto:"Ver página web"},texto:{titulo:"Wiki Colaborativa",parrafos:[`Este proyecto es una <span>wiki</span> especializada en
        <span>Monster Hunter</span>, desarrollada con
        <span>Spring Boot</span> y <span>Angular</span>. Implementa
        autenticación con <span>AWS Cognito</span> (incluyendo login con Google),
        microservicios registrados en <span>Eureka Server</span>, principios
        <span>SOLID</span>, uso de <span>DTOs</span> para separar la lógica de negocio
        y documentación interactiva con <span>Swagger</span>.`,`En el backend se han utilizado <span>Lombok</span> para reducir código repetitivo,
        <span>JPA/Hibernate</span> para el mapeo de entidades y
        <span>Postman</span> para la validación de endpoints. Además, se aplicaron
        <span>patrones de diseño</span> para lograr una arquitectura mantenible y escalable.`,`El frontend consume los endpoints mediante services,
        aplicando un diseño modular con componentes reutilizables y modelos
        tipados en <span>TypeScript</span>. La interfaz está optimizada con <span>Ionic</span>
        para ofrecer una experiencia responsiva en dispositivos móviles y escritorio.`,`El despliegue se realizó en <span>AWS</span> utilizando instancias
        <span>EC2</span> para el backend y <span>RDS</span> como base de datos, con
        el frontend publicado en <span>Netlify</span>. La gestión del dominio y
        certificados SSL se configuró con <span>Cloudflare</span>.`]}},{nombre:"Konki Burger",linkApp:"https://konkiburger.jcfilter.dev/",imagen:"./img/konkiburger.jpg",overlay:{titulo:"Konki Burger",texto:"Ver página web"},texto:{titulo:"Konki Burger",parrafos:["Konki Burger es una <span>App web completa</span> de pedidos y gestión diseñada para un restaurante de hamburguesas real. La idea era crear esta web para agilizar los pedidos ",`<span>Stack Tecnológico (Full Stack - Cloud Native)</span><br>
      - Frontend Core: <span>Next.js</span> y <span>React</span> junto con <span>TypeScript</span>.<br>
      - Estilo y UI: <span>Tailwind CSS</span> y <span>ShadCN UI</span>.<br>
      - Base de Datos: <span>Firestore (NoSQL)</span>.<br>
      - Backend y Cloud: <span>Firebase Authentication, Hosting y Secret Manager</span>.<br>
      - Gestión de Estado: <span>React Context API</span>.`,`<span>Lo Más Destacado del Proyecto</span><br>
      - Experiencia del Cliente: Menú interactivo y Carrito persistente que sigue al usuario en cualquier dispositivo.<br>
      - Comunicación: Envío de emails automáticos para confirmar pedidos y notificar al administrador.<br>
      - Seguridad y Cuentas: Autenticación segura gracias a <span>Firebase Authentication</span>.<br>
      - Panel de Gestión: Espacio del administrador puede ver y gestionar pedidos en tiempo real, y mantener el menú con CRUD completo de productos.<br>
      - Protección de Datos: Reglas estrictas de Firestore y uso de Secret Manager.`]}}];function h(){const[r,o]=x.useState(0),s=d[r],p=()=>o(a=>Math.max(a-1,0)),n=()=>o(a=>Math.min(a+1,d.length-1));return e.jsxs("section",{id:"proyectoDestacado",className:"proyecto",children:[e.jsx("h3",{className:"titulo",children:"Proyecto Destacado"}),e.jsxs("div",{className:"contenido-proyecto",children:[r>0&&e.jsx("button",{className:"nav-arrow left",onClick:p,"aria-label":"Proyecto anterior",children:e.jsx("i",{className:"fa-solid fa-chevron-left"})}),e.jsx("div",{className:"card-proyecto",children:e.jsx("a",{href:s.linkApp,target:"_blank",className:"card-link",children:e.jsxs("div",{className:"card-inner",children:[e.jsx("img",{src:s.imagen,alt:s.nombre,className:"card-img"}),e.jsxs("div",{className:"card-overlay",children:[e.jsx("h3",{children:s.overlay.titulo}),e.jsx("p",{children:s.overlay.texto}),e.jsx("i",{className:"fa-solid fa-up-right-from-square overlay-icon"})]})]})})}),r<d.length-1&&e.jsx("button",{className:"nav-arrow right",onClick:n,"aria-label":"Siguiente proyecto",children:e.jsx("i",{className:"fa-solid fa-chevron-right"})}),e.jsxs("div",{className:"texto-proyecto",children:[e.jsx("h2",{children:s.texto.titulo}),s.texto.parrafos.map((a,t)=>e.jsx("p",{dangerouslySetInnerHTML:{__html:a}},t))]})]})]})}export{h as default};
