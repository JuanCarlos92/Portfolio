import { useState } from "react";
import { proyectosDestacados } from "../data/proyectosDestacados";

export default function ProyectosDestacadosSlider() {
  const [index, setIndex] = useState(0);
  const proyecto = proyectosDestacados[index];

  const prev = () => setIndex(i => Math.max(i - 1, 0));
  const next = () => setIndex(i => Math.min(i + 1, proyectosDestacados.length - 1));

  return (
    <section id="proyectoDestacado" className="proyecto">
      <h3 className="titulo">Proyecto Destacado</h3>

      <div className="contenido-proyecto">

        {index > 0 && (
          <button className="nav-arrow left" onClick={prev} aria-label="Proyecto anterior">
            <i className="fa-solid fa-chevron-left"></i>
          </button>
        )}

        <div className="card-proyecto">
          <a href={proyecto.linkApp} target="_blank" className="card-link">
            <div className="card-inner">
              <img src={proyecto.imagen} alt={proyecto.nombre} className="card-img" />
              <div className="card-overlay">
                <h3>{proyecto.overlay.titulo}</h3>
                <p>{proyecto.overlay.texto}</p>
                <i className="fa-solid fa-up-right-from-square overlay-icon"></i>
              </div>
            </div>
          </a>
        </div>

        {index < proyectosDestacados.length - 1 && (
          <button className="nav-arrow right" onClick={next} aria-label="Siguiente proyecto">
            <i className="fa-solid fa-chevron-right"></i>
          </button>
        )}

        <div className="texto-proyecto">
          <h2>{proyecto.texto.titulo}</h2>
          {proyecto.texto.parrafos.map((p, i) => (
            <p key={i} dangerouslySetInnerHTML={{ __html: p }}></p>
          ))}
        </div>

      </div>
    </section>
  );
}
