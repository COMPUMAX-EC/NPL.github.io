import React from "react";

export default function Home() {
  return (
    <div>
      <h1>Proyecto: Explicabilidad en Procesamiento de Lenguaje Natural (NLP)</h1>
      <section className="doc">
        <h2>Introducción</h2>
        <p>
          Este proyecto está dedicado a la investigación y difusión de técnicas de{" "}
          <strong>explicabilidad</strong> en modelos de Procesamiento de Lenguaje
          Natural (NLP). La explicabilidad es fundamental para comprender,
          interpretar y confiar en los resultados generados por modelos de
          inteligencia artificial aplicados al lenguaje.
        </p>
      </section>
      <section className="doc">
        <h2>Objetivos</h2>
        <ul>
          <li>
            Investigar y comparar métodos de explicabilidad aplicados a modelos de
            NLP.
          </li>
          <li>
            Implementar ejemplos prácticos con modelos populares (BERT, GPT, LSTM,
            etc.).
          </li>
          <li>Documentar ventajas, limitaciones y casos de uso reales.</li>
          <li>
            Proveer recursos y herramientas para la comunidad interesada en IA
            explicable.
          </li>
        </ul>
      </section>
      <section className="doc">
        <h2>Documentación y Recursos</h2>
        <ul>
          <li>
            <a
              href="https://christophm.github.io/interpretable-ml-book/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Interpretable Machine Learning Book (Libro online)
            </a>
          </li>
          <li>
            <a
              href="https://arxiv.org/abs/2012.01786"
              target="_blank"
              rel="noopener noreferrer"
            >
              Survey of Explainable NLP (Artículo académico)
            </a>
          </li>
          <li>
            <a
              href="https://github.com/marcotcr/lime"
              target="_blank"
              rel="noopener noreferrer"
            >
              LIME: Herramienta para explicabilidad local
            </a>
          </li>
          <li>
            <a
              href="https://github.com/slundberg/shap"
              target="_blank"
              rel="noopener noreferrer"
            >
              SHAP: Explicaciones basadas en valores Shapley
            </a>
          </li>
          <li>
            <a
              href="https://github.com/allenai/allennlp"
              target="_blank"
              rel="noopener noreferrer"
            >
              AllenNLP: Plataforma para investigación en NLP
            </a>
          </li>
          <li>
            <a
              href="https://huggingface.co/docs/transformers/index"
              target="_blank"
              rel="noopener noreferrer"
            >
              Hugging Face Transformers: Documentación oficial
            </a>
          </li>
          <li>
            <a
              href="https://github.com/explainingai/xai-resources"
              target="_blank"
              rel="noopener noreferrer"
            >
              Awesome XAI: Recursos sobre IA explicable
            </a>
          </li>
          <li>
            <a
              href="https://www.kdnuggets.com/2022/03/explainable-nlp.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Artículo: Explainable NLP – Técnicas y Herramientas
            </a>
          </li>
          <li>
            <a
              href="https://towardsdatascience.com/explainable-ai-xai-in-nlp-6b8e4c2c5b5b"
              target="_blank"
              rel="noopener noreferrer"
            >
              Blog: Explainable AI (XAI) in NLP
            </a>
          </li>
        </ul>
      </section>
      <section className="doc">
        <h2>Publicaciones y Ejemplos</h2>
        <ul>
          <li>
            <a
              href="https://github.com/serengil/deep-explain"
              target="_blank"
              rel="noopener noreferrer"
            >
              Deep Explain: Ejemplos de explicabilidad en modelos profundos
            </a>
          </li>
          <li>
            <a
              href="https://github.com/napsternxg/LIME-text-explainer"
              target="_blank"
              rel="noopener noreferrer"
            >
              LIME Text Explainer: Explicaciones para texto
            </a>
          </li>
          <li>
            <a
              href="https://github.com/chriskhanhtran/Awesome-Explainable-NLP"
              target="_blank"
              rel="noopener noreferrer"
            >
              Awesome Explainable NLP: Colección de recursos y papers
            </a>
          </li>
        </ul>
      </section>
      <section className="doc">
        <h2>Contacto</h2>
        <p>
          ¿Tienes dudas o quieres colaborar? Escríbenos a:{" "}
          <a href="mailto:tuemail@ejemplo.com">tuemail@ejemplo.com</a>
        </p>
      </section>
      <style jsx>{`
        .doc {
          background: #fff;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 2px 8px #ddd;
          margin-bottom: 30px;
        }
        div {
          font-family: Arial, sans-serif;
          background: #f8f9fa;
          margin: 40px;
        }
        h1 {
          color: #2c3e50;
        }
        h2 {
          color: #34495e;
        }
        ul {
          margin-top: 10px;
        }
        a {
          color: #0070f3;
          text-decoration: none;
        }
        a:hover {
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
}