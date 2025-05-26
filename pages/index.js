import React from "react";
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="container py-5">
        <h1 className="display-4 mb-4 text-primary fw-bold">
          Proyecto: Explicabilidad en Procesamiento de Lenguaje Natural (NLP)
        </h1>

        {/* Sección: Introducción */}
        <section className="card mb-4 border-info">
          <div className="card-header bg-info text-white">
            Introducción
          </div>
          <div className="card-body">
            <p className="card-text">
              Este proyecto está dedicado a la investigación y difusión de técnicas de{" "}
              <strong>explicabilidad</strong> en modelos de Procesamiento de Lenguaje
              Natural (NLP). La explicabilidad es fundamental para comprender,
              interpretar y confiar en los resultados generados por modelos de
              inteligencia artificial aplicados al lenguaje.
            </p>
          </div>
        </section>

        {/* Sección: Objetivos */}
        <section className="card mb-4 border-warning">
          <div className="card-header bg-warning text-dark">
            Objetivos
          </div>
          <div className="card-body">
            <ul className="list-group list-group-flush">
              <li className="list-group-item">✅ Investigar y comparar métodos de explicabilidad aplicados a modelos de NLP.</li>
              <li className="list-group-item">🧠 Implementar ejemplos prácticos con modelos populares (BERT, GPT, LSTM, etc.).</li>
              <li className="list-group-item">📊 Documentar ventajas, limitaciones y casos de uso reales.</li>
              <li className="list-group-item">🌐 Proveer recursos y herramientas para la comunidad interesada en IA explicable.</li>
            </ul>
          </div>
        </section>

        {/* Sección: Acceso Rápido */}
        <section className="card mb-4 border-secondary">
          <div className="card-header bg-secondary text-white">
            Acceso Rápido
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-md-6 mb-3">
                <div className="card border-primary h-100 shadow">
                  <div className="card-body text-center">
                    <h5 className="card-title">📄 Ver Documentos</h5>
                    <p className="card-text">Accede a nuestros PDFs y documentación técnica</p>
                    <a href="/documentos" className="btn btn-outline-primary">Ver Documentos</a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <div className="card border-success h-100 shadow">
                  <div className="card-body text-center">
                    <h5 className="card-title">📚 Recursos</h5>
                    <p className="card-text">Enlaces y herramientas útiles</p>
                    <a href="/recursos" className="btn btn-outline-success">Ver Recursos</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sección: Contacto */}
        <section className="card mb-4 border-dark">
          <div className="card-header bg-dark text-white">
            Contacto
          </div>
          <div className="card-body">
            <p className="card-text">
              ¿Tienes dudas o quieres colaborar? 
            </p>
            <a href="mailto:antonyaupas14.2002@gmail.com" className="btn btn-dark">
              📧 Enviar email
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
