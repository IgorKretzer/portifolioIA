import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Code, 
  Database, 
  Zap, 
  Brain, 
  Users, 
  BarChart3, 
  CheckCircle,
  ExternalLink,
  Play
} from 'lucide-react';
import './Projeto.css';

const Projeto: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: "Análise Inteligente",
      description: "IA analisa conversa completa e identifica tipo de problema",
      details: ["Classificação automática", "Detecção de módulo afetado", "Análise de contexto"]
    },
    {
      icon: Database,
      title: "Estruturação de Dados",
      description: "Gera sugestões padronizadas de chamados técnicos",
      details: ["Formato consistente", "Metadados estruturados", "Histórico completo"]
    },
    {
      icon: BarChart3,
      title: "Dashboard de Métricas",
      description: "Estatísticas e análises em tempo real",
      details: ["Análises por período", "Módulos mais frequentes", "Taxa de aprovação"]
    },
    {
      icon: Users,
      title: "Sistema de Feedback",
      description: "Avaliação contínua para melhoria da IA",
      details: ["Avaliação de utilidade", "Sistema de pontuação", "Comentários qualitativos"]
    }
  ];

  const architecture = [
    {
      layer: "Frontend",
      tech: "React + Vite",
      description: "Interface moderna e responsiva",
      features: ["Componentes reutilizáveis", "Roteamento dinâmico", "Estado global"]
    },
    {
      layer: "Backend",
      tech: "FastAPI + Python",
      description: "API robusta e escalável",
      features: ["Documentação automática", "Validação de dados", "Rate limiting"]
    },
    {
      layer: "IA",
      tech: "Google Gemini",
      description: "Modelo de linguagem avançado",
      features: ["Análise contextual", "Classificação inteligente", "Respostas estruturadas"]
    },
    {
      layer: "Database",
      tech: "Firebase Firestore",
      description: "Banco de dados em nuvem",
      features: ["Escalabilidade automática", "Sincronização em tempo real", "Backup automático"]
    }
  ];

  const flowSteps = [
    {
      step: 1,
      title: "Entrada do Ticket",
      description: "Usuário insere número do ticket do Movidesk",
      icon: Code
    },
    {
      step: 2,
      title: "Busca de Dados",
      description: "Sistema busca conversa completa via API",
      icon: Database
    },
    {
      step: 3,
      title: "Análise com IA",
      description: "Google Gemini analisa contexto e classifica",
      icon: Brain
    },
    {
      step: 4,
      title: "Geração de Sugestão",
      description: "Sistema gera chamado estruturado",
      icon: Zap
    },
    {
      step: 5,
      title: "Feedback do Usuário",
      description: "Usuário avalia e fornece feedback",
      icon: Users
    }
  ];

  return (
    <div className="projeto">
      {/* Hero Section */}
      <section className="projeto-hero">
        <div className="container">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="hero-title">
              Sistema <span className="text-gradient">IA Chamados</span>
            </h1>
            <p className="hero-description">
              Solução completa de automação para análise de tickets de suporte, 
              desenvolvida com as mais modernas tecnologias de Inteligência Artificial.
            </p>
            <div className="hero-actions">
              <a
                href="https://ia-chamados.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <Play size={20} />
                Ver Sistema Online
                <ExternalLink size={16} />
              </a>
              <a
                href="https://ia-chamados-backend.onrender.com/docs"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                <Code size={20} />
                Documentação API
                <ExternalLink size={16} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">
              Funcionalidades <span className="text-gradient">Implementadas</span>
            </h2>
            <p className="section-description">
              Sistema completo com todas as funcionalidades necessárias para 
              automatizar o processo de análise de tickets.
            </p>
          </motion.div>

          <div className="features-grid">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="feature-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="feature-icon">
                  <feature.icon size={32} />
                </div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
                <ul className="feature-details">
                  {feature.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="feature-detail">
                      <CheckCircle size={16} />
                      {detail}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture Section */}
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
              Arquitetura <span className="text-gradient">Técnica</span>
            </h2>
            <p className="section-description">
              Stack tecnológica moderna e escalável, projetada para alta performance e confiabilidade.
            </p>
          </motion.div>

          <div className="architecture-grid">
            {architecture.map((layer, index) => (
              <motion.div
                key={index}
                className="architecture-card"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="layer-header">
                  <div className="layer-number">{index + 1}</div>
                  <div className="layer-info">
                    <h3 className="layer-title">{layer.layer}</h3>
                    <span className="layer-tech">{layer.tech}</span>
                  </div>
                </div>
                <p className="layer-description">{layer.description}</p>
                <ul className="layer-features">
                  {layer.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="layer-feature">
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

      {/* Flow Section */}
      <section className="flow-section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">
              Fluxo de <span className="text-gradient">Funcionamento</span>
            </h2>
            <p className="section-description">
              Processo automatizado que transforma tickets em sugestões estruturadas de chamados.
            </p>
          </motion.div>

          <div className="flow-container">
            {flowSteps.map((step, index) => (
              <motion.div
                key={index}
                className="flow-step"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="step-number">{step.step}</div>
                <div className="step-content">
                  <div className="step-icon">
                    <step.icon size={24} />
                  </div>
                  <h3 className="step-title">{step.title}</h3>
                  <p className="step-description">{step.description}</p>
                </div>
                {index < flowSteps.length - 1 && (
                  <div className="step-arrow">
                    <ArrowRight size={20} />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Deploy Section */}
      <section className="deploy-section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">
              Deploy e <span className="text-gradient">Infraestrutura</span>
            </h2>
            <p className="section-description">
              Sistema em produção com infraestrutura robusta e monitoramento contínuo.
            </p>
          </motion.div>

          <div className="deploy-grid">
            <motion.div
              className="deploy-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="deploy-header">
                <div className="deploy-icon">
                  <Zap size={24} />
                </div>
                <h3>Frontend</h3>
                <span className="status online">Online</span>
              </div>
              <p className="deploy-tech">React + Vite + Vercel</p>
              <p className="deploy-description">
                Interface moderna e responsiva com CDN global
              </p>
              <a
                href="https://ia-chamados.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="deploy-link"
              >
                Acessar Sistema
                <ExternalLink size={16} />
              </a>
            </motion.div>

            <motion.div
              className="deploy-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="deploy-header">
                <div className="deploy-icon">
                  <Database size={24} />
                </div>
                <h3>Backend</h3>
                <span className="status online">Online</span>
              </div>
              <p className="deploy-tech">FastAPI + Python + Render</p>
              <p className="deploy-description">
                API robusta com documentação automática
              </p>
              <a
                href="https://ia-chamados-backend.onrender.com/docs"
                target="_blank"
                rel="noopener noreferrer"
                className="deploy-link"
              >
                Ver Documentação
                <ExternalLink size={16} />
              </a>
            </motion.div>

            <motion.div
              className="deploy-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="deploy-header">
                <div className="deploy-icon">
                  <Brain size={24} />
                </div>
                <h3>IA & Database</h3>
                <span className="status online">Online</span>
              </div>
              <p className="deploy-tech">Google Gemini + Firebase</p>
              <p className="deploy-description">
                IA avançada com banco de dados escalável
              </p>
              <div className="deploy-metrics">
                <div className="metric">
                  <span className="metric-value">85%</span>
                  <span className="metric-label">Precisão</span>
                </div>
                <div className="metric">
                  <span className="metric-value">100+</span>
                  <span className="metric-label">Tickets/h</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projeto;
