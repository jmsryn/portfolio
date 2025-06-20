'use client';

import { motion } from 'framer-motion';
import { 
  ArrowLeft, Clock, User, Tag, ExternalLink, ChevronRight, 
  Shield, Bug, Zap, Target, Code, Database, TrendingUp, 
  CheckCircle2, AlertTriangle, BookOpen, Github
} from 'lucide-react';
import Link from 'next/link';

const deepDives = [
  {
    id: 'automated-security-testing',
    title: 'Implementing Automated Security Testing in CI/CD Pipelines',
    excerpt: 'A comprehensive guide to integrating OWASP security testing tools into continuous integration workflows.',
    category: 'Security Testing',
    readTime: '12 min read',
    publishDate: 'March 2024',
    author: 'James Ryan Gaid',
    tags: ['Security', 'CI/CD', 'OWASP', 'Automation'],
    featured: true,
    image: 'https://images.unsplash.com/photo-1563206767-5b18f218e8de?w=800&h=400&fit=crop&crop=center',
    content: {
      introduction: 'Security testing has evolved from a manual, end-of-cycle activity to an automated, continuous process. This deep dive explores how to implement comprehensive security testing in CI/CD pipelines.',
      sections: [
        {
          title: 'The Challenge',
          content: 'Traditional security testing occurs too late in the development cycle, leading to expensive fixes and delayed releases. Our goal was to shift security left while maintaining development velocity.',
          keyPoints: [
            'Security vulnerabilities discovered late cost 10x more to fix',
            'Manual security testing creates bottlenecks in CI/CD pipelines',
            'Inconsistent security testing across different projects',
            'Lack of security visibility for development teams'
          ]
        },
        {
          title: 'Solution Architecture',
          content: 'We implemented a multi-layered security testing approach using OWASP tools integrated into GitHub Actions.',
          keyPoints: [
            'Static Application Security Testing (SAST) with SonarQube',
            'Dynamic Application Security Testing (DAST) with OWASP ZAP',
            'Dependency vulnerability scanning with npm audit and Snyk',
            'Container security scanning with Trivy',
            'Infrastructure as Code security with Checkov'
          ]
        },
        {
          title: 'Implementation Results',
          content: 'The automated security pipeline identified 50+ critical vulnerabilities across 8 applications in the first month.',
          metrics: [
            { label: 'Vulnerabilities Found', value: '50+', improvement: 'in first month' },
            { label: 'Detection Time', value: '< 5min', improvement: 'vs 2-3 days manual' },
            { label: 'False Positives', value: '< 8%', improvement: 'after tuning' },
            { label: 'Developer Adoption', value: '95%', improvement: 'team satisfaction' }
          ]
        }
      ],
      tools: ['OWASP ZAP', 'SonarQube', 'Snyk', 'Trivy', 'Checkov', 'GitHub Actions'],
      challenges: [
        'Balancing security coverage with build performance',
        'Reducing false positives without missing real vulnerabilities',
        'Training development teams on security findings',
        'Establishing security baselines for different application types'
      ],
      solutions: [
        'Implemented parallel security scans to minimize build time impact',
        'Created custom rule sets based on application risk profiles',
        'Developed security training workshops with real vulnerability examples',
        'Established tiered security policies based on application criticality'
      ],
      lessonsLearned: [
        'Early stakeholder buy-in is crucial for security automation success',
        'Gradual rollout prevents overwhelming development teams',
        'Context-aware security rules reduce false positives significantly',
        'Clear remediation guidance accelerates vulnerability fixes'
      ]
    }
  },
  {
    id: 'api-testing-framework',
    title: 'Building a Scalable API Testing Framework with Cypress',
    excerpt: 'Design patterns and best practices for creating maintainable API test suites that scale with your application.',
    category: 'Test Automation',
    readTime: '15 min read',
    publishDate: 'February 2024',
    author: 'James Ryan Gaid',
    tags: ['API Testing', 'Cypress', 'Framework Design', 'CI/CD'],
    featured: true,
    image: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=800&h=400&fit=crop&crop=center',
    content: {
      introduction: 'API testing forms the backbone of modern application testing strategies. This guide details building a robust, scalable API testing framework using Cypress.',
      sections: [
        {
          title: 'Framework Architecture',
          content: 'Our API testing framework follows the Page Object Model adapted for API endpoints, with emphasis on reusability and maintainability.',
          keyPoints: [
            'Service layer abstraction for API endpoints',
            'Shared test data management with fixtures',
            'Environment-specific configuration management',
            'Comprehensive assertion library for API responses',
            'Built-in retry mechanisms for flaky endpoints'
          ]
        },
        {
          title: 'Test Data Strategy',
          content: 'Effective test data management is crucial for API testing reliability and test isolation.',
          keyPoints: [
            'Dynamic test data generation using Faker.js',
            'Database seeding and cleanup strategies',
            'API mocking for external dependencies',
            'Test data versioning and migration support'
          ]
        },
        {
          title: 'Performance Integration',
          content: 'Beyond functional testing, our framework includes performance monitoring and threshold validation.',
          metrics: [
            { label: 'Test Execution', value: '300+', improvement: 'tests in 8 minutes' },
            { label: 'Code Coverage', value: '92%', improvement: 'API endpoint coverage' },
            { label: 'Flaky Tests', value: '< 2%', improvement: 'failure rate' },
            { label: 'Maintenance', value: '60%', improvement: 'reduced effort' }
          ]
        }
      ],
      tools: ['Cypress', 'Faker.js', 'Docker', 'PostgreSQL', 'Newman', 'Allure Reports'],
      challenges: [
        'Managing test data dependencies across test suites',
        'Handling asynchronous operations and eventual consistency',
        'Maintaining test stability across different environments',
        'Balancing test coverage with execution speed'
      ],
      solutions: [
        'Implemented database transaction rollback for test isolation',
        'Created custom Cypress commands for async operation handling',
        'Developed environment-specific test data sets',
        'Introduced test categorization for different execution contexts'
      ],
      lessonsLearned: [
        'Invest early in test data strategy to prevent future technical debt',
        'API contract testing prevents integration issues',
        'Performance baselines should be established early',
        'Test categorization enables flexible execution strategies'
      ]
    }
  },
  {
    id: 'qa-metrics-dashboard',
    title: 'Building a Real-Time QA Metrics Dashboard',
    excerpt: 'Creating actionable insights from testing data to drive quality improvements and team performance.',
    category: 'QA Leadership',
    readTime: '10 min read',
    publishDate: 'January 2024',
    author: 'James Ryan Gaid',
    tags: ['Metrics', 'Dashboard', 'Leadership', 'Analytics'],
    featured: false,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop&crop=center',
    content: {
      introduction: 'Data-driven decision making in QA requires visibility into the right metrics. This case study explores building a comprehensive QA metrics dashboard.',
      sections: [
        {
          title: 'Metric Selection Strategy',
          content: 'Choosing the right metrics to track is crucial for driving meaningful improvements in quality and team performance.',
          keyPoints: [
            'Lead metrics vs lag metrics for proactive quality management',
            'Team performance metrics that encourage collaboration',
            'Quality metrics that correlate with customer satisfaction',
            'Trend analysis for early problem detection'
          ]
        },
        {
          title: 'Dashboard Implementation',
          content: 'Technical architecture for real-time metric collection and visualization using modern web technologies.',
          keyPoints: [
            'API integrations with Jira, GitHub, and test management tools',
            'Real-time data streaming with WebSocket connections',
            'Interactive visualizations with Chart.js and D3.js',
            'Automated alert system for metric threshold breaches'
          ]
        }
      ],
      tools: ['React', 'Node.js', 'PostgreSQL', 'Chart.js', 'Jira API', 'GitHub API'],
      challenges: [
        'Standardizing metrics across different project types',
        'Ensuring data accuracy and consistency',
        'Creating actionable insights from raw data',
        'Balancing detail with usability'
      ],
      solutions: [
        'Developed metric definition standards and documentation',
        'Implemented data validation and anomaly detection',
        'Created context-aware recommendations and insights',
        'Designed progressive disclosure for detailed drill-downs'
      ]
    }
  }
];

const categories = ['All', 'Security Testing', 'Test Automation', 'QA Leadership', 'Performance Testing'];

export default function DeepDivesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/10 via-transparent to-accent/10">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <Link 
              href="/"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Portfolio
            </Link>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Technical Deep Dives
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              In-depth exploration of QA methodologies, testing strategies, and technical implementations. 
              Real-world case studies from my experience building quality assurance solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">Featured Articles</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {deepDives.filter(article => article.featured).map((article, index) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-card/50 backdrop-blur-sm rounded-xl overflow-hidden border border-border shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
              >
                {/* Article image */}
                <div className="relative h-48 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transform group-hover:scale-110 transition-transform duration-700"
                    style={{ backgroundImage: `url(${article.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-primary/20 text-primary text-xs font-medium rounded-full backdrop-blur-sm border border-primary/30">
                      {article.category}
                    </span>
                  </div>
                </div>

                {/* Article content */}
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {article.readTime}
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      {article.author}
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {article.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {article.tags.map(tag => (
                      <span key={tag} className="px-2 py-1 bg-muted/50 text-muted-foreground text-xs rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all">
                    Read Full Article
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>

          {/* All Articles */}
          <h2 className="text-2xl font-bold mb-8">All Articles</h2>
          
          <div className="space-y-6">
            {deepDives.map((article, index) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group bg-card/30 backdrop-blur-sm rounded-xl p-6 border border-border hover:bg-primary/5 hover:border-primary/30 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Article preview */}
                  <div className="md:w-32 h-20 rounded-lg overflow-hidden bg-muted flex-shrink-0">
                    <div
                      className="w-full h-full bg-cover bg-center"
                      style={{ backgroundImage: `url(${article.image})` }}
                    />
                  </div>

                  {/* Article info */}
                  <div className="flex-1">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                      <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md">
                        {article.category}
                      </span>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {article.readTime}
                      </div>
                      <span>{article.publishDate}</span>
                    </div>

                    <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                      {article.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-3">
                      {article.excerpt}
                    </p>

                    {/* Key metrics preview */}
                    {article.content.sections[2]?.metrics && (
                      <div className="flex gap-4 mb-3">
                        {article.content.sections[2].metrics.slice(0, 2).map((metric, idx) => (
                          <div key={idx} className="text-center">
                            <div className="text-sm font-bold text-primary">{metric.value}</div>
                            <div className="text-xs text-muted-foreground">{metric.label}</div>
                          </div>
                        ))}
                      </div>
                    )}

                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-2">
                        {article.tags.slice(0, 3).map(tag => (
                          <span key={tag} className="px-2 py-1 bg-muted/50 text-muted-foreground text-xs rounded-md">
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <button className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all">
                        Read More
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Coming Soon */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-16 text-center"
          >
            <div className="bg-card/30 backdrop-blur-sm rounded-xl p-8 border border-border">
              <BookOpen className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">More Content Coming Soon</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                I'm constantly exploring new testing methodologies and sharing insights from real-world QA challenges. 
                Follow my journey as I dive deeper into advanced testing strategies.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
                <span>• Performance Testing Strategies</span>
                <span>• Mobile App QA Frameworks</span>
                <span>• AI-Assisted Testing</span>
                <span>• Security Testing Automation</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}