import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code, Database, Zap } from 'lucide-react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <div className="logo-icon">
                <Zap className="zap-icon" />
                <Code className="code-icon" />
              </div>
              <span className="logo-text">IA Chamados</span>
            </div>
            <p className="footer-description">
              Sistema inteligente de análise de tickets desenvolvido com as mais 
              modernas tecnologias de IA para automatizar processos de suporte.
            </p>
            <div className="social-links">
              <a
                href="https://github.com/IgorKretzer"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/igor-kretzer"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:igor@exemplo.com"
                className="social-link"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Links Úteis</h3>
            <ul className="footer-links">
              <li>
                <a
                  href="https://ia-chamados.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                >
                  <ExternalLink size={16} />
                  Sistema Online
                </a>
              </li>
              <li>
                <a
                  href="https://ia-chamados-backend.onrender.com/docs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                >
                  <Database size={16} />
                  Documentação API
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/IgorKretzer/chamadon3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                >
                  <Code size={16} />
                  Código Fonte
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Tecnologias</h3>
            <div className="tech-tags">
              <span className="tech-tag">React</span>
              <span className="tech-tag">FastAPI</span>
              <span className="tech-tag">Firebase</span>
              <span className="tech-tag">Google Gemini</span>
              <span className="tech-tag">TypeScript</span>
              <span className="tech-tag">Vercel</span>
            </div>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Contato</h3>
            <div className="contact-info">
              <p className="contact-item">
                <Mail size={16} />
                igor@exemplo.com
              </p>
              <p className="contact-item">
                <Database size={16} />
                Desenvolvedor Full Stack
              </p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="copyright">
              © 2024 Igor Kretzer. Todos os direitos reservados.
            </p>
            <p className="footer-note">
              Desenvolvido com ❤️ e muito ☕
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
