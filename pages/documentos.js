import React, { useState } from 'react';
import Navbar from '../components/Navbar';

export default function Documentos() {
  const [selectedPdf, setSelectedPdf] = useState(null);

  // Lista de PDFs disponibles (basado en tu carpeta actual)
  const pdfs = [
    { id: 1, title: "Actividad Clase 6", filename: "Actividad_clase_6.pdf" },
    { id: 2, title: "Evaluación Calidad Software", filename: "Evaluacion_calidad_Software.pdf" },
    { id: 3, title: "Metodologías de Desarrollo", filename: "Metodologías_Desarrollo.pdf" },
    { id: 4, title: "Grupo", filename: "Grupo.pdf" },
    { id: 5, title: "Metodología Kanban", filename: "Metodología_kanban.pdf" },
    { id: 6, title: "Métricas Productividad - Desarrollador", filename: "Metricas_Productividad_Desarrollador.pdf" },
    { id: 7, title: "Métricas Productividad Rendimiento Aplicado", filename: "Metricas_Productividad_rendimiento_aplicado.pdf" },
    { id: 8, title: "Métricas de Productividad", filename: "Métricas_Productividad.pdf" },
    { id: 9, title: "Métricas Usabilidad Defectos", filename: "Metricas_Usabilidad.pdf" },
    { id: 10, title: "Paradigmas de Programación", filename: "Paradigmas_programación.pdf" },
    { id: 11, title: "Preguntas Kanban", filename: "Preguntas_Kanban.pdf" },
    { id: 12, title: "Taller No. 1 - Métricas", filename: "TallerNo1-metricas[1].pdf" },
    { id: 13, title: "Taller No. 2 - MCall", filename: "TallerNo2-MCall[1].pdf" },
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
                      <div className="d-flex justify-content-between align-items-center">
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
                         Haz clic aquí para abrir el PDF
                       </a>
                    </p>
                  </iframe>
                ) : (
                  <div className="d-flex align-items-center justify-content-center h-100 text-muted">
                    <div className="text-center">
                      <div style={{ fontSize: '4rem' }}>📄</div>
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