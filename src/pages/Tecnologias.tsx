import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  Database, 
  Zap, 
  Brain, 
  Globe, 
  Shield, 
  Layers,
  ArrowRight,
  CheckCircle,
  ExternalLink
} from 'lucide-react';
import './Tecnologias.css';

const Tecnologias: React.FC = () => {
  const frontendTech = [
    {
      name: "React 18",
      description: "Biblioteca JavaScript para interfaces de usuário",
      features: ["Hooks modernos", "Componentes funcionais", "Virtual DOM"],
      icon: Code,
      color: "#61dafb"
    },
    {
      name: "Vite",
      description: "Build tool ultra-rápido para desenvolvimento",
      features: ["Hot Module Replacement", "Build otimizado", "TypeScript nativo"],
      icon: Zap,
      color: "#646cff"
    },
    {
      name: "TypeScript",
      description: "JavaScript com tipagem estática",
      features: ["Tipagem forte", "IntelliSense", "Detecção de erros"],
      icon: Code,
      color: "#3178c6"
    }
  ];

  const backendTech = [
    {
      name: "FastAPI",
      description: "Framework Python para APIs modernas",
      features: ["Alta performance", "Documentação automática", "Validação de dados"],
      icon: Database,
      color: "#009688"
    },
    {
      name: "Python 3.10+",
      description: "Linguagem de programação moderna",
      features: ["Tipagem estática", "Async/await", "Ecosistema rico"],
      icon: Code,
      color: "#3776ab"
    },
    {
      name: "Pydantic",
      description: "Validação de dados com Python",
      features: ["Validação automática", "Serialização", "Documentação"],
      icon: Shield,
      color: "#e92063"
    }
  ];

  const aiTech = [
    {
      name: "Google Gemini",
      description: "Modelo de IA generativa mais avançado",
      features: ["Análise contextual", "Classificação inteligente", "Respostas estruturadas"],
      icon: Brain,
      color: "#4285f4"
    },
    {
      name: "OpenAI API",
      description: "Integração com modelos de linguagem",
      features: ["GPT-4", "Embeddings", "Fine-tuning"],
      icon: Brain,
      color: "#00a67e"
    }
  ];

  const infraTech = [
    {
      name: "Firebase Firestore",
      description: "Banco de dados NoSQL em nuvem",
      features: ["Escalabilidade automática", "Sincronização em tempo real", "Backup automático"],
      icon: Database,
      color: "#ffca28"
    },
    {
      name: "Vercel",
      description: "Plataforma de deploy para frontend",
      features: ["CDN global", "SSL automático", "Deploy contínuo"],
      icon: Globe,
      color: "#000000"
    },
    {
      name: "Render",
      description: "Plataforma de deploy para backend",
      features: ["Auto-deploy", "Monitoramento", "Escalabilidade"],
      icon: Layers,
      color: "#46e3b7"
    }
  ];

  const integrations = [
    {
      name: "Movidesk API",
      description: "Integração com sistema de tickets",
      features: ["Busca de tickets", "Histórico de chat", "Dados do usuário"],
      icon: Database,
      color: "#00a67e"
    },
    {
      name: "CORS & Security",
      description: "Configurações de segurança",
      features: ["HTTPS forçado", "CORS configurado", "Rate limiting"],
      icon: Shield,
      color: "#ff6b6b"
    }
  ];

  const architecture = [
    {
      layer: "Frontend",
      description: "Interface do usuário moderna e responsiva",
      technologies: ["React", "TypeScript", "Vite", "CSS3"],
      color: "#61dafb"
    },
    {
      layer: "Backend",
      description: "API robusta e escalável",
      technologies: ["FastAPI", "Python", "Pydantic", "Uvicorn"],
      color: "#009688"
    },
    {
      layer: "IA & ML",
      description: "Inteligência artificial para análise",
      technologies: ["Google Gemini", "OpenAI", "NLP", "Machine Learning"],
      color: "#4285f4"
    },
    {
      layer: "Database",
      description: "Armazenamento e sincronização de dados",
      technologies: ["Firebase Firestore", "NoSQL", "Real-time", "Cloud"],
      color: "#ffca28"
    },
    {
      layer: "Deploy",
      description: "Infraestrutura em nuvem",
      technologies: ["Vercel", "Render", "CDN", "SSL"],
      color: "#46e3b7"
    }
  ];

  return (
    <div className="tecnologias">
      {/* Hero Section */}
      <section className="tecnologias-hero">
        <div className="container">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="hero-title">
              Stack <span className="text-gradient">Tecnológica</span>
            </h1>
            <p className="hero-description">
              Tecnologias modernas e de ponta utilizadas no desenvolvimento 
              do sistema de análise de tickets com IA.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Frontend Section */}
      <section className="tech-section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">
              <Code size={32} />
              Frontend
            </h2>
            <p className="section-description">
              Interface moderna e responsiva desenvolvida com as melhores práticas.
            </p>
          </motion.div>

          <div className="tech-grid">
            {frontendTech.map((tech, index) => (
              <motion.div
                key={index}
                className="tech-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="tech-header">
                  <div 
                    className="tech-icon"
                    style={{ backgroundColor: tech.color }}
                  >
                    <tech.icon size={24} />
                  </div>
                  <div className="tech-info">
                    <h3 className="tech-name">{tech.name}</h3>
                    <p className="tech-description">{tech.description}</p>
                  </div>
                </div>
                <ul className="tech-features">
                  {tech.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="tech-feature">
                      <CheckCircle size={16} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Backend Section */}
      <section className="tech-section backend">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">
              <Database size={32} />
              Backend
            </h2>
            <p className="section-description">
              API robusta e escalável com alta performance e segurança.
            </p>
          </motion.div>

          <div className="tech-grid">
            {backendTech.map((tech, index) => (
              <motion.div
                key={index}
                className="tech-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="tech-header">
                  <div 
                    className="tech-icon"
                    style={{ backgroundColor: tech.color }}
                  >
                    <tech.icon size={24} />
                  </div>
                  <div className="tech-info">
                    <h3 className="tech-name">{tech.name}</h3>
                    <p className="tech-description">{tech.description}</p>
                  </div>
                </div>
                <ul className="tech-features">
                  {tech.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="tech-feature">
                      <CheckCircle size={16} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Section */}
      <section className="tech-section ai">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">
              <Brain size={32} />
              Inteligência Artificial
            </h2>
            <p className="section-description">
              Modelos de IA de última geração para análise inteligente de tickets.
            </p>
          </motion.div>

          <div className="tech-grid">
            {aiTech.map((tech, index) => (
              <motion.div
                key={index}
                className="tech-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="tech-header">
                  <div 
                    className="tech-icon"
                    style={{ backgroundColor: tech.color }}
                  >
                    <tech.icon size={24} />
                  </div>
                  <div className="tech-info">
                    <h3 className="tech-name">{tech.name}</h3>
                    <p className="tech-description">{tech.description}</p>
                  </div>
                </div>
                <ul className="tech-features">
                  {tech.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="tech-feature">
                      <CheckCircle size={16} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure Section */}
      <section className="tech-section infrastructure">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">
              <Globe size={32} />
              Infraestrutura
            </h2>
            <p className="section-description">
              Infraestrutura em nuvem robusta e escalável para produção.
            </p>
          </motion.div>

          <div className="tech-grid">
            {infraTech.map((tech, index) => (
              <motion.div
                key={index}
                className="tech-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="tech-header">
                  <div 
                    className="tech-icon"
                    style={{ backgroundColor: tech.color }}
                  >
                    <tech.icon size={24} />
                  </div>
                  <div className="tech-info">
                    <h3 className="tech-name">{tech.name}</h3>
                    <p className="tech-description">{tech.description}</p>
                  </div>
                </div>
                <ul className="tech-features">
                  {tech.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="tech-feature">
                      <CheckCircle size={16} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="tech-section integrations">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">
              <Shield size={32} />
              Integrações
            </h2>
            <p className="section-description">
              Integrações externas e configurações de segurança.
            </p>
          </motion.div>

          <div className="tech-grid">
            {integrations.map((tech, index) => (
              <motion.div
                key={index}
                className="tech-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="tech-header">
                  <div 
                    className="tech-icon"
                    style={{ backgroundColor: tech.color }}
                  >
                    <tech.icon size={24} />
                  </div>
                  <div className="tech-info">
                    <h3 className="tech-name">{tech.name}</h3>
                    <p className="tech-description">{tech.description}</p>
                  </div>
                </div>
                <ul className="tech-features">
                  {tech.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="tech-feature">
                      <CheckCircle size={16} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture Overview */}
      <section className="architecture-section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">
              <Layers size={32} />
              Visão Geral da Arquitetura
            </h2>
            <p className="section-description">
              Como todas as tecnologias se integram para formar o sistema completo.
            </p>
          </motion.div>

          <div className="architecture-flow">
            {architecture.map((layer, index) => (
              <motion.div
                key={index}
                className="architecture-layer"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div 
                  className="layer-indicator"
                  style={{ backgroundColor: layer.color }}
                >
                  {index + 1}
                </div>
                <div className="layer-content">
                  <h3 className="layer-title">{layer.layer}</h3>
                  <p className="layer-description">{layer.description}</p>
                  <div className="layer-technologies">
                    {layer.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                {index < architecture.length - 1 && (
                  <div className="layer-arrow">
                    <ArrowRight size={20} />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Documentation Links */}
      <section className="docs-section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">
              Documentação e Links
            </h2>
            <p className="section-description">
              Acesse a documentação completa e recursos adicionais.
            </p>
          </motion.div>

          <div className="docs-grid">
            <motion.a
              href="https://ia-chamados-backend.onrender.com/docs"
              target="_blank"
              rel="noopener noreferrer"
              className="doc-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="doc-icon">
                <Code size={32} />
              </div>
              <h3>API Documentation</h3>
              <p>Documentação completa da API com exemplos de uso</p>
              <div className="doc-link">
                Acessar Documentação
                <ExternalLink size={16} />
              </div>
            </motion.a>

            <motion.a
              href="https://github.com/IgorKretzer/chamadon3"
              target="_blank"
              rel="noopener noreferrer"
              className="doc-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="doc-icon">
                <Database size={32} />
              </div>
              <h3>Código Fonte</h3>
              <p>Repositório completo com código fonte e documentação</p>
              <div className="doc-link">
                Ver no GitHub
                <ExternalLink size={16} />
              </div>
            </motion.a>

            <motion.a
              href="https://frontend-mixk1htes-igorkretzers-projects.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="doc-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="doc-icon">
                <Globe size={32} />
              </div>
              <h3>Sistema Online</h3>
              <p>Teste o sistema completo em produção</p>
              <div className="doc-link">
                Acessar Sistema
                <ExternalLink size={16} />
              </div>
            </motion.a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tecnologias;
