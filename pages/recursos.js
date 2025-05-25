import React from 'react';
import Navbar from '../components/Navbar';

export default function Recursos() {
  return (
    <>
      <Navbar />
      <div className="container py-5">
        <h1 className="display-4 mb-4">📚 Recursos y Enlaces</h1>
        
        <section className="card mb-4">
          <div className="card-body">
            <h2 className="card-title h3">📖 Documentación y Libros</h2>
            <div className="list-group">
              <a href="https://christophm.github.io/interpretable-ml-book/" 
                 className="list-group-item list-group-item-action"
                 target="_blank" 
                 rel="noopener noreferrer">
                📚 Interpretable Machine Learning Book
              </a>
              <a href="https://arxiv.org/abs/2012.01786" 
                 className="list-group-item list-group-item-action"
                 target="_blank" 
                 rel="noopener noreferrer">
                📄 Survey of Explainable NLP
              </a>
            </div>
          </div>
        </section>

        <section className="card mb-4">
          <div className="card-body">
            <h2 className="card-title h3">🛠️ Herramientas</h2>
            <div className="list-group">
              <a href="https://github.com/marcotcr/lime" 
                 className="list-group-item list-group-item-action"
                 target="_blank" 
                 rel="noopener noreferrer">
                🔍 LIME: Herramienta para explicabilidad local
              </a>
              <a href="https://github.com/slundberg/shap" 
                 className="list-group-item list-group-item-action"
                 target="_blank" 
                 rel="noopener noreferrer">
                📊 SHAP: Explicaciones basadas en valores Shapley
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}