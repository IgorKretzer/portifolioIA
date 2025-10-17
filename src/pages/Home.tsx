import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, Brain, Database, Code, BarChart3, Users, Clock } from 'lucide-react';
import './Home.css';

const Home: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  } as const;

  const stats = [
    { icon: Clock, value: "80%", label: "Redução no tempo" },
    { icon: BarChart3, value: "85%", label: "Precisão da IA" },
    { icon: Users, value: "100+", label: "Tickets/hora" },
    { icon: Zap, value: "70%", label: "Economia de custos" }
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <motion.div
            className="hero-content"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="hero-badge" variants={itemVariants}>
              <Zap className="badge-icon" />
              <span>Sistema de IA em Produção</span>
            </motion.div>

            <motion.h1 className="hero-title" variants={itemVariants}>
              Sistema Inteligente de
              <span className="text-gradient"> Análise de Tickets</span>
            </motion.h1>

            <motion.p className="hero-description" variants={itemVariants}>
              Automatize a identificação de inconsistências e bugs em sistemas de gestão 
              utilizando Inteligência Artificial para gerar sugestões estruturadas de chamados técnicos.
            </motion.p>

            <motion.div className="hero-actions" variants={itemVariants}>
              <a
                href="https://ia-chamados.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Ver Sistema Online
                <ArrowRight size={20} />
              </a>
              <a href="#projeto" className="btn btn-secondary">
                Conhecer Projeto
              </a>
            </motion.div>

            <motion.div className="hero-stats" variants={itemVariants}>
              {stats.map((stat, index) => (
                <div key={index} className="stat-item">
                  <div className="stat-icon">
                    <stat.icon size={24} />
                  </div>
                  <div className="stat-content">
                    <div className="stat-value">{stat.value}</div>
                    <div className="stat-label">{stat.label}</div>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="hero-visual"
            variants={itemVariants}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="visual-card">
              <div className="card-header">
                <div className="card-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <div className="card-title">Sistema IA Chamados</div>
              </div>
              <div className="card-content">
                <div className="ai-process">
                  <div className="process-step">
                    <Brain className="step-icon" />
                    <span>Análise com IA</span>
                  </div>
                  <div className="process-arrow">→</div>
                  <div className="process-step">
                    <Database className="step-icon" />
                    <span>Classificação</span>
                  </div>
                  <div className="process-arrow">→</div>
                  <div className="process-step">
                    <Code className="step-icon" />
                    <span>Chamado Estruturado</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="problem-section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">
              O <span className="text-gradient">Problema</span> que Resolvemos
            </h2>
            <p className="section-description">
              Antes da implementação do sistema, a análise de tickets era um processo 
              manual, demorado e propenso a erros.
            </p>
          </motion.div>

          <div className="problem-grid">
            <motion.div
              className="problem-card"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="problem-icon">
                <Clock size={32} />
              </div>
              <h3>Processo Manual</h3>
              <p>Análise manual de centenas de tickets de suporte, consumindo tempo valioso da equipe.</p>
            </motion.div>

            <motion.div
              className="problem-card"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="problem-icon">
                <Users size={32} />
              </div>
              <h3>Demorado e Inconsistente</h3>
              <p>Processo lento e propenso a erros humanos, com diferentes níveis de qualidade nas análises.</p>
            </motion.div>

            <motion.div
              className="problem-card"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="problem-icon">
                <BarChart3 size={32} />
              </div>
              <h3>Alto Custo</h3>
              <p>Recursos humanos dedicados a tarefas repetitivas, gerando custos operacionais elevados.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="solution-section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">
              Nossa <span className="text-gradient">Solução</span>
            </h2>
            <p className="section-description">
              Sistema inteligente que automatiza completamente o processo de análise de tickets.
            </p>
          </motion.div>

          <div className="solution-grid">
            <motion.div
              className="solution-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="solution-icon">
                <Brain size={40} />
              </div>
              <h3>Automatização Inteligente</h3>
              <p>IA processa tickets automaticamente, analisando contexto e classificando problemas com precisão.</p>
            </motion.div>

            <motion.div
              className="solution-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="solution-icon">
                <Database size={40} />
              </div>
              <h3>Estruturação Padronizada</h3>
              <p>Gera sugestões padronizadas de chamados técnicos, garantindo consistência e qualidade.</p>
            </motion.div>

            <motion.div
              className="solution-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="solution-icon">
                <Zap size={40} />
              </div>
              <h3>Eficiência Máxima</h3>
              <p>Reduz tempo de análise em 80%, processando centenas de tickets por hora.</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
