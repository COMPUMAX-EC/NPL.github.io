import React, { useState } from 'react';
import Navbar from '../components/Navbar';

export default function Documentos() {
  const [selectedPdf, setSelectedPdf] = useState(null);

  // Lista de PDFs disponibles (basado en tu carpeta actual)
  const pdfs = [
      { id: 1, title: "Actividad Clase 6", filename: "Actividad_clase_6.pdf" },
      { id: 2, title: "Evaluación Calidad Software", filename: "Evaluacion_calidad_Software.pdf" },
      { id: 3, title: "Grupo", filename: "Grupo.pdf" },
      { id: 4, title: "ISO 9001 y CMMI", filename: "ISO 9001 y CMMI.pdf" },
      { id: 5, title: "Metodología RUP", filename: "Metodología RUP.pdf" },
      { id: 6, title: "Metodologías Scrum, XP, Kanban", filename: "Metodologías Scrum, XP, Kanban.pdf" },
      { id: 7, title: "Metodologías de Desarrollo", filename: "Metodologías_Desarrollo.pdf" },
      { id: 8, title: "Métricas Defectos", filename: "Metricas_defectos.pdf" },
      { id: 9, title: "Métricas Productividad - Desarrollador", filename: "Metricas_Productividad_Desarrollador.pdf" },
      { id: 10, title: "Métricas Productividad", filename: "Metricas_Productividad.pdf" },
      { id: 11, title: "Métricas Rendimiento Software", filename: "Métricas_rendimiento_software.pdf" },
      { id: 12, title: "Métricas Usabilidad", filename: "Metricas_Usabilidad.pdf" },
      { id: 13, title: "Taller 1 en clase", filename: "Taller 1 en clase.pdf" },
      { id: 14, title: "Taller Grupal: Paradigmas de la Programación", filename: "Taller Grupal. Paradigmas de la Programación.pdf" },
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