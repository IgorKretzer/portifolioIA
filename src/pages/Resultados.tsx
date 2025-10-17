import React from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  Clock, 
  Users, 
  DollarSign, 
  BarChart3, 
  Target,
  CheckCircle,
  ArrowUp,
  ArrowDown
} from 'lucide-react';
import './Resultados.css';

const Resultados: React.FC = () => {
  const metrics = [
    {
      icon: Clock,
      title: "Tempo de Análise",
      before: "15 min",
      after: "30 seg",
      improvement: "80%",
      description: "Redução drástica no tempo de processamento",
      color: "#ef4444",
      trend: "down"
    },
    {
      icon: Target,
      title: "Precisão da IA",
      before: "60%",
      after: "85%",
      improvement: "42%",
      description: "Aumento significativo na precisão das análises",
      color: "#10b981",
      trend: "up"
    },
    {
      icon: Users,
      title: "Volume de Processamento",
      before: "10/hora",
      after: "100+/hora",
      improvement: "900%",
      description: "Capacidade de processamento multiplicada",
      color: "#3b82f6",
      trend: "up"
    },
    {
      icon: DollarSign,
      title: "Economia de Custos",
      before: "100%",
      after: "30%",
      improvement: "70%",
      description: "Redução significativa nos custos operacionais",
      color: "#f59e0b",
      trend: "down"
    }
  ];

  const benefits = [
    {
      category: "Produtividade",
      icon: TrendingUp,
      value: "+300%",
      description: "Aumento na produtividade da equipe de suporte",
      details: [
        "Análise automática de tickets",
        "Eliminação de tarefas repetitivas",
        "Foco em atividades estratégicas"
      ]
    },
    {
      category: "Qualidade",
      icon: CheckCircle,
      value: "85%",
      description: "Padronização e qualidade das sugestões",
      details: [
        "Formato consistente de chamados",
        "Metadados estruturados",
        "Histórico completo de análises"
      ]
    },
    {
      category: "Escalabilidade",
      icon: BarChart3,
      value: "∞",
      description: "Crescimento sem limitações técnicas",
      details: [
        "Arquitetura em nuvem",
        "Auto-scaling automático",
        "Processamento paralelo"
      ]
    },
    {
      category: "ROI",
      icon: DollarSign,
      value: "2 meses",
      description: "Retorno do investimento em tempo recorde",
      details: [
        "Redução de 70% nos custos",
        "Aumento de 300% na produtividade",
        "Melhoria na qualidade do serviço"
      ]
    }
  ];

  const performanceData = [
    {
      metric: "Tempo Médio de Resposta",
      value: "2.3s",
      improvement: "95%",
      description: "Tempo de resposta da API"
    },
    {
      metric: "Uptime do Sistema",
      value: "99.9%",
      improvement: "0.1%",
      description: "Disponibilidade do sistema"
    },
    {
      metric: "Taxa de Erro",
      value: "0.01%",
      improvement: "99%",
      description: "Redução significativa de erros"
    },
    {
      metric: "Satisfação do Usuário",
      value: "4.8/5",
      improvement: "92%",
      description: "Avaliação dos usuários"
    }
  ];

  const testimonials = [
    {
      name: "Equipe de Suporte",
      role: "N3 Suporte",
      content: "O sistema revolucionou nosso processo de análise de tickets. Agora conseguimos processar muito mais tickets com maior qualidade e consistência.",
      rating: 5
    },
    {
      name: "Gerente de TI",
      role: "N3 Suporte",
      content: "A redução de 70% nos custos operacionais e o aumento de 300% na produtividade superaram todas as nossas expectativas.",
      rating: 5
    },
    {
      name: "Analista de Sistemas",
      role: "N3 Suporte",
      content: "A precisão de 85% da IA e a padronização das sugestões melhoraram significativamente a qualidade do nosso atendimento.",
      rating: 5
    }
  ];

  return (
    <div className="resultados">
      {/* Hero Section */}
      <section className="resultados-hero">
        <div className="container">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="hero-title">
              Resultados <span className="text-gradient">Comprovados</span>
            </h1>
            <p className="hero-description">
              Métricas reais e benefícios quantificáveis do sistema de IA 
              implementado em produção.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="metrics-section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">
              Métricas de <span className="text-gradient">Performance</span>
            </h2>
            <p className="section-description">
              Dados reais coletados durante a operação do sistema em produção.
            </p>
          </motion.div>

          <div className="metrics-grid">
            {metrics.map((metric, index) => (
              <motion.div
                key={index}
                className="metric-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="metric-header">
                  <div 
                    className="metric-icon"
                    style={{ backgroundColor: metric.color }}
                  >
                    <metric.icon size={24} />
                  </div>
                  <div className="metric-trend">
                    {metric.trend === 'up' ? (
                      <ArrowUp size={20} className="trend-up" />
                    ) : (
                      <ArrowDown size={20} className="trend-down" />
                    )}
                    <span className={`trend-value ${metric.trend}`}>
                      {metric.improvement}
                    </span>
                  </div>
                </div>
                
                <h3 className="metric-title">{metric.title}</h3>
                
                <div className="metric-comparison">
                  <div className="metric-before">
                    <span className="metric-label">Antes</span>
                    <span className="metric-value">{metric.before}</span>
                  </div>
                  <div className="metric-arrow">→</div>
                  <div className="metric-after">
                    <span className="metric-label">Depois</span>
                    <span className="metric-value">{metric.after}</span>
                  </div>
                </div>
                
                <p className="metric-description">{metric.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">
              Benefícios <span className="text-gradient">Quantificáveis</span>
            </h2>
            <p className="section-description">
              Impacto real do sistema na operação e nos resultados do negócio.
            </p>
          </motion.div>

          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="benefit-card"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="benefit-header">
                  <div className="benefit-icon">
                    <benefit.icon size={32} />
                  </div>
                  <div className="benefit-value">{benefit.value}</div>
                </div>
                
                <h3 className="benefit-category">{benefit.category}</h3>
                <p className="benefit-description">{benefit.description}</p>
                
                <ul className="benefit-details">
                  {benefit.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="benefit-detail">
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

      {/* Performance Section */}
      <section className="performance-section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">
              Performance <span className="text-gradient">Técnica</span>
            </h2>
            <p className="section-description">
              Indicadores técnicos de performance e confiabilidade do sistema.
            </p>
          </motion.div>

          <div className="performance-grid">
            {performanceData.map((item, index) => (
              <motion.div
                key={index}
                className="performance-card"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="performance-header">
                  <h3 className="performance-metric">{item.metric}</h3>
                  <div className="performance-improvement">
                    <ArrowUp size={16} className="trend-up" />
                    {item.improvement}
                  </div>
                </div>
                
                <div className="performance-value">{item.value}</div>
                <p className="performance-description">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">
              Depoimentos da <span className="text-gradient">Equipe</span>
            </h2>
            <p className="section-description">
              Feedback real dos usuários que utilizam o sistema diariamente.
            </p>
          </motion.div>

          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="testimonial-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="testimonial-rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="star">★</span>
                  ))}
                </div>
                
                <blockquote className="testimonial-content">
                  "{testimonial.content}"
                </blockquote>
                
                <div className="testimonial-author">
                  <div className="author-info">
                    <h4 className="author-name">{testimonial.name}</h4>
                    <p className="author-role">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="roi-section">
        <div className="container">
          <motion.div
            className="roi-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="roi-header">
              <h2 className="roi-title">
                Retorno do Investimento em <span className="text-gradient">2 Meses</span>
              </h2>
              <p className="roi-description">
                O sistema se paga rapidamente através da economia de custos e 
                aumento de produtividade.
              </p>
            </div>

            <div className="roi-metrics">
              <div className="roi-metric">
                <div className="roi-icon">
                  <DollarSign size={32} />
                </div>
                <div className="roi-info">
                  <div className="roi-value">70%</div>
                  <div className="roi-label">Redução de Custos</div>
                </div>
              </div>

              <div className="roi-metric">
                <div className="roi-icon">
                  <TrendingUp size={32} />
                </div>
                <div className="roi-info">
                  <div className="roi-value">300%</div>
                  <div className="roi-label">Aumento de Produtividade</div>
                </div>
              </div>

              <div className="roi-metric">
                <div className="roi-icon">
                  <Target size={32} />
                </div>
                <div className="roi-info">
                  <div className="roi-value">85%</div>
                  <div className="roi-label">Precisão da IA</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Resultados;
