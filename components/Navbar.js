import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <Link href="/" className="navbar-brand">
          🧠 NLP Explicabilidad
        </Link>
        
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link href="/" className="nav-link">
                🏠 Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/documentos" className="nav-link">
                📄 Documentos
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/recursos" className="nav-link">
                📚 Recursos
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}