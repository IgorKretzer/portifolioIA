import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Code, Zap, Brain } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import './Header.css';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo" onClick={closeMenu}>
            <div className="logo-icon">
              <Brain className="brain-icon" />
              <Zap className="zap-icon" />
            </div>
            <span className="logo-text">IA Chamados</span>
          </Link>

          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            <Link to="/" className="nav-link" onClick={closeMenu}>
              Início
            </Link>
            <Link to="/projeto" className="nav-link" onClick={closeMenu}>
              Projeto
            </Link>
            <Link to="/tecnologias" className="nav-link" onClick={closeMenu}>
              Tecnologias
            </Link>
            <Link to="/resultados" className="nav-link" onClick={closeMenu}>
              Resultados
            </Link>
            <Link to="/contato" className="nav-link" onClick={closeMenu}>
              Contato
            </Link>
          </nav>

          <div className="header-actions">
            <a
              href="https://ia-chamados.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <Code size={20} />
              Ver Sistema
            </a>
            <ThemeToggle />
            <button
              className="menu-toggle"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
