import React from "react";

export default function Home() {
  return (
    <div>
      <h1>Proyecto: Explicabilidad en Procesamiento de Lenguaje Natural (NLP)</h1>
      <section className="doc">
        <h2>Introducción</h2>
        <p>
          Este proyecto explora técnicas y herramientas para mejorar la{" "}
          <strong>explicabilidad</strong> en modelos de NLP. La explicabilidad
          permite comprender, interpretar y confiar en los resultados generados
          por modelos de inteligencia artificial aplicados al lenguaje.
        </p>
      </section>
      <section className="doc">
        <h2>Objetivos</h2>
        <ul>
          <li>
            Investigar métodos de explicabilidad aplicados a modelos de NLP.
          </li>
          <li>
            Implementar ejemplos prácticos con modelos populares (BERT, GPT,
            etc.).
          </li>
          <li>Documentar ventajas, limitaciones y casos de uso.</li>
        </ul>
      </section>
      <section className="doc">
        <h2>Documentación</h2>
        <ul>
          <li>
            <a href="https://christophm.github.io/interpretable-ml-book/">
              Interpretable Machine Learning Book
            </a>
          </li>
          <li>
            <a href="https://arxiv.org/abs/2012.01786">
              Survey of Explainable NLP
            </a>
          </li>
          <li>
            <a href="https://github.com/marcotcr/lime">
              LIME: Herramienta para explicabilidad
            </a>
          </li>
          <li>
            <a href="https://github.com/slundberg/shap">
              SHAP: Explicaciones basadas en valores Shapley
            </a>
          </li>
        </ul>
      </section>
      <section className="doc">
        <h2>Contacto</h2>
        <p>
          Para más información, escribe a:{" "}
          <a href="mailto:tuemail@ejemplo.com">tuemail@ejemplo.com</a>
        </p>
      </section>
      <style jsx>{`
        body {
          font-family: Arial, sans-serif;
          margin: 40px;
          background: #f8f9fa;
        }
        h1 {
          color: #2c3e50;
        }
        h2 {
          color: #34495e;
        }
        section {
          margin-bottom: 30px;
        }
        .doc {
          background: #fff;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 2px 8px #ddd;
        }
        ul {
          margin-top: 10px;
        }
      `}</style>
    </div>
  );
}