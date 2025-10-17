import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  ExternalLink,
  Send,
  CheckCircle,
  Code,
  Database,
  Globe
} from 'lucide-react';
import './Contato.css';

const Contato: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simular envio do formulário
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Resetar formulário após 3 segundos
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "igor@exemplo.com",
      link: "mailto:igor@exemplo.com",
      description: "Entre em contato por email"
    },
    {
      icon: Phone,
      title: "Telefone",
      value: "+55 (11) 99999-9999",
      link: "tel:+5511999999999",
      description: "Ligue para conversar"
    },
    {
      icon: MapPin,
      title: "Localização",
      value: "São Paulo, SP",
      link: "#",
      description: "Brasil"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      name: "GitHub",
      url: "https://github.com/IgorKretzer",
      description: "Repositórios e projetos"
    },
    {
      icon: Linkedin,
      name: "LinkedIn",
      url: "https://linkedin.com/in/igor-kretzer",
      description: "Perfil profissional"
    },
    {
      icon: Mail,
      name: "Email",
      url: "mailto:igor@exemplo.com",
      description: "Contato direto"
    }
  ];

  const projectLinks = [
    {
      icon: Globe,
      title: "Sistema Online",
      description: "Teste o sistema em produção",
      url: "https://ia-chamados.vercel.app/",
      color: "#3b82f6"
    },
    {
      icon: Code,
      title: "Documentação API",
      description: "Documentação completa da API",
      url: "https://ia-chamados-backend.onrender.com/docs",
      color: "#10b981"
    },
    {
      icon: Database,
      title: "Código Fonte",
      description: "Repositório no GitHub",
      url: "https://github.com/IgorKretzer/chamadon3",
      color: "#6b7280"
    }
  ];

  return (
    <div className="contato">
      {/* Hero Section */}
      <section className="contato-hero">
        <div className="container">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="hero-title">
              Vamos <span className="text-gradient">Conversar</span>
            </h1>
            <p className="hero-description">
              Entre em contato para discutir sobre o projeto, 
              implementação ou qualquer dúvida sobre o sistema de IA.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Form */}
            <motion.div
              className="contact-form-container"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="form-header">
                <h2 className="form-title">Envie uma Mensagem</h2>
                <p className="form-description">
                  Preencha o formulário abaixo e eu entrarei em contato em breve.
                </p>
              </div>

              {isSubmitted ? (
                <motion.div
                  className="success-message"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <CheckCircle size={48} className="success-icon" />
                  <h3>Mensagem Enviada!</h3>
                  <p>Obrigado pelo contato. Responderei em breve.</p>
                </motion.div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">Nome</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="form-input"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="form-input"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject" className="form-label">Assunto</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="form-input"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message" className="form-label">Mensagem</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="form-textarea"
                      rows={5}
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className={`btn btn-primary form-submit ${isSubmitting ? 'submitting' : ''}`}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="spinner"></div>
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        Enviar Mensagem
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>

            {/* Contact Info */}
            <motion.div
              className="contact-info-container"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="info-header">
                <h2 className="info-title">Informações de Contato</h2>
                <p className="info-description">
                  Outras formas de entrar em contato comigo.
                </p>
              </div>

              <div className="contact-info-list">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.link}
                    className="contact-info-item"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="info-icon">
                      <info.icon size={24} />
                    </div>
                    <div className="info-content">
                      <h3 className="info-item-title">{info.title}</h3>
                      <p className="info-item-value">{info.value}</p>
                      <p className="info-item-description">{info.description}</p>
                    </div>
                  </motion.a>
                ))}
              </div>

              <div className="social-section">
                <h3 className="social-title">Redes Sociais</h3>
                <div className="social-links">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <social.icon size={24} />
                      <div className="social-info">
                        <span className="social-name">{social.name}</span>
                        <span className="social-description">{social.description}</span>
                      </div>
                      <ExternalLink size={16} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Project Links Section */}
      <section className="project-links-section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">
              Acesse o <span className="text-gradient">Projeto</span>
            </h2>
            <p className="section-description">
              Links diretos para o sistema, documentação e código fonte.
            </p>
          </motion.div>

          <div className="project-links-grid">
            {projectLinks.map((project, index) => (
              <motion.a
                key={index}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <div 
                  className="project-icon"
                  style={{ backgroundColor: project.color }}
                >
                  <project.icon size={32} />
                </div>
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                </div>
                <ExternalLink size={20} className="project-arrow" />
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <motion.div
            className="cta-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="cta-title">
              Pronto para <span className="text-gradient">Implementar</span>?
            </h2>
            <p className="cta-description">
              Vamos discutir como este sistema pode transformar o seu processo de análise de tickets.
            </p>
            <div className="cta-actions">
              <a
                href="https://ia-chamados.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <Globe size={20} />
                Testar Sistema
                <ExternalLink size={16} />
              </a>
              <a
                href="mailto:igor@exemplo.com"
                className="btn btn-secondary"
              >
                <Mail size={20} />
                Entrar em Contato
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contato;
