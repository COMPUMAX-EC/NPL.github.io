import React, { useState } from 'react';
import Navbar from '../components/Navbar';

export default function Documentos() {
  const [selectedPdf, setSelectedPdf] = useState(null);

  // Lista de PDFs disponibles
  const pdfs = [
    {
      id: 1,
      title: "Introducción a la Explicabilidad en NLP",
      description: "Conceptos básicos y fundamentos teóricos",
      filename: "intro-explicabilidad-nlp.pdf",
      size: "2.5 MB"
    },
    {
      id: 2,
      title: "Técnicas LIME para Modelos de Texto",
      description: "Implementación práctica de LIME en NLP",
      filename: "lime-nlp-tutorial.pdf",
      size: "1.8 MB"
    },
    {
      id: 3,
      title: "SHAP en Transformers",
      description: "Aplicación de SHAP en modelos BERT y GPT",
      filename: "shap-transformers.pdf",
      size: "3.2 MB"
    }
  ];

  return (
    <>
      <Navbar />
      <div className="container py-5">
        <h1 className="display-4 mb-4">📄 Documentos y PDFs</h1>
        
        <div className="row">
          {/* Lista de PDFs */}
          <div className="col-md-4">
            <div className="card">
              <div className="card-header">
                <h5>📂 Documentos Disponibles</h5>
              </div>
              <div className="card-body">
                {pdfs.map((pdf) => (
                  <div key={pdf.id} className="card mb-3">
                    <div className="card-body p-3">
                      <h6 className="card-title">{pdf.title}</h6>
                      <p className="card-text small">{pdf.description}</p>
                      <div className="d-flex justify-content-between align-items-center">
                        <small className="text-muted">{pdf.size}</small>
                        <div>
                          <button 
                            className="btn btn-sm btn-primary me-2"
                            onClick={() => setSelectedPdf(pdf.filename)}
                          >
                            👁️ Ver
                          </button>
                          <a 
                            href={`/pdfs/${pdf.filename}`} 
                            download
                            className="btn btn-sm btn-outline-secondary"
                          >
                            ⬇️ Descargar
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Visor de PDF */}
          <div className="col-md-8">
            <div className="card h-100">
              <div className="card-header d-flex justify-content-between align-items-center">
                <h5>📖 Visor de Documentos</h5>
                {selectedPdf && (
                  <a 
                    href={`/pdfs/${selectedPdf}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-sm btn-outline-primary"
                  >
                    🔗 Abrir en nueva pestaña
                  </a>
                )}
              </div>
              <div className="card-body p-0">
                {selectedPdf ? (
                  <iframe
                    src={`/pdfs/${selectedPdf}`}
                    width="100%"
                    height="600px"
                    style={{ border: 'none' }}
                    title="PDF Viewer"
                  >
                    <p>Tu navegador no soporta la visualización de PDFs. 
                       <a href={`/pdfs/${selectedPdf}`} target="_blank" rel="noopener noreferrer">
                         Haz clic aquí para descargar el PDF
                       </a>
                    </p>
                  </iframe>
                ) : (
                  <div className="d-flex align-items-center justify-content-center h-100 text-muted">
                    <div className="text-center">
                      <i className="bi bi-file-earmark-pdf" style={{ fontSize: '4rem' }}></i>
                      <p className="mt-3">Selecciona un documento para visualizarlo</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}