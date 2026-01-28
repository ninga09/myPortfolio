import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, Github, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';
import { AnimatedSection, StaggerContainer, StaggerItem } from './AnimatedSection';

interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  techStack: string[];
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
}

const projects: Project[] = [
  {
    id: 'votesphere',
    title: 'votesphere',
    description: 'A full-stack website solving with real-time Secure, Hierarchical, and Multi-Tier Voting Architecture.',
    longDescription: 'Built a comprehensive voting platform featuring user authentication, result analysis, balloting functionality, and admin integration. Implemented real-time voting updates using WebSockets and optimized performance with Redis caching.',
    image: '<img src="/images/assets/votesphere.png" alt="VoteSphere Kenya Logo">',
    techStack: ['python', 'django', 'PostgreSQL',  'Redis'],
    liveUrl: 'https://https://votesphere-rjob.onrender.com',
    githubUrl: 'https://github.com/ninga09/votesphere',
    featured: true,
  },
  {
    id: 'ecommerce',
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with real-time inventory and secure payments.',
    longDescription: 'Built a comprehensive e-commerce platform featuring user authentication, product management, shopping cart functionality, and Stripe payment integration. Implemented real-time inventory updates using WebSockets and optimized performance with Redis caching.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop',
    techStack: ['React', 'Node.js', 'PostgreSQL', 'Mpesa payment', 'Redis'],
    liveUrl: 'https://demo.example.com',
    githubUrl: 'https://github.com',
    featured: true,
  },
  
  {
    id: 'taskmanager',
    title: 'Task Management App',
    description: 'Collaborative project management tool with real-time updates and team features.',
    longDescription: 'Developed a Kanban-style task management application with drag-and-drop functionality, team collaboration features, and real-time synchronization. Includes user roles, project templates, and detailed analytics dashboard.',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=500&fit=crop',
    techStack: ['Next.js', 'TypeScript', 'Prisma', 'Socket.io', 'Tailwind'],
    liveUrl: 'https://demo.example.com',
    githubUrl: 'https://github.com',
    featured: true,
  },
  {
    id: 'analytics',
    title: 'Analytics Dashboard',
    description: 'Real-time analytics platform with customizable widgets and data visualization.',
    longDescription: 'Created an analytics dashboard featuring interactive charts, customizable widgets, and real-time data streaming. Implemented complex data aggregation pipelines and optimized query performance for large datasets.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop',
    techStack: ['React', 'D3.js', 'Express', 'MongoDB', 'WebSocket'],
    liveUrl: 'https://demo.example.com',
    githubUrl: 'https://github.com',
    featured: true,
  },
  {
    id: 'social',
    title: 'Social Media App',
    description: 'Modern social platform with posts, stories, and real-time messaging.',
    longDescription: 'Built a social media application featuring user profiles, posts with rich media support, stories functionality, and real-time direct messaging. Implemented feed algorithms and content moderation systems.',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=500&fit=crop',
    techStack: ['React Native', 'Firebase', 'Node.js', 'GraphQL'],
    liveUrl: 'https://demo.example.com',
    githubUrl: 'https://github.com',
    featured: false,
  },
  {
    id: 'ai-tool',
    title: 'AI Content Generator',
    description: 'AI-powered tool for generating marketing copy and blog content.',
    longDescription: 'Developed an AI content generation tool using OpenAI API integration. Features include multiple content templates, tone adjustment, SEO optimization suggestions, and content history management.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop',
    techStack: ['Next.js', 'OpenAI API', 'Vercel AI', 'Supabase'],
    liveUrl: 'https://demo.example.com',
    githubUrl: 'https://github.com',
    featured: false,
  },
  {
    id: 'portfolio',
    title: 'Portfolio Template',
    description: 'Modern, responsive portfolio template for developers and designers.',
    longDescription: 'Created a customizable portfolio template with dark mode, animations, and SEO optimization. Features include contact form integration, project showcase, and blog section with MDX support.',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=500&fit=crop',
    techStack: ['React', 'Tailwind CSS', 'Framer Motion', 'Vite'],
    liveUrl: 'https://ningareagan.onrender.com',
    githubUrl: 'https://github.com/ninga09/myportfolio',
    featured: false,
  },
];

function ProjectCard({ project }: { project: Project }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      layout
      className={`glass-card overflow-hidden glow-effect group ${
        project.featured ? 'md:col-span-2 lg:col-span-1' : ''
      }`}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.6 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
        
        {project.featured && (
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="absolute top-4 left-4"
          >
            <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary text-primary-foreground">
              Featured
            </span>
          </motion.div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-display font-semibold mb-2 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        
        <motion.p 
          layout
          className="text-muted-foreground text-sm mb-4"
        >
          {isExpanded ? project.longDescription : project.description}
        </motion.p>

        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-primary text-sm font-medium flex items-center gap-1 mb-4 hover:gap-2 transition-all"
        >
          {isExpanded ? 'Show less' : 'Read more'}
          <motion.span
            animate={{ rotate: isExpanded ? 90 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <ChevronRight size={14} />
          </motion.span>
        </button>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.techStack.map((tech, i) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 }}
              className="px-2 py-1 text-xs rounded-md bg-secondary text-secondary-foreground"
            >
              {tech}
            </motion.span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1"
          >
            <Button variant="gradient" size="sm" className="w-full">
              <ExternalLink size={16} />
              Live Demo
            </Button>
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1"
          >
            <Button variant="outline" size="sm" className="w-full">
              <Github size={16} />
              Code
            </Button>
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export function ProjectsSection() {
  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section id="projects" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/20 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of projects that showcase my skills and passion for building great software
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.15}>
          {displayedProjects.map((project) => (
            <StaggerItem key={project.id}>
              <ProjectCard project={project} />
            </StaggerItem>
          ))}
        </StaggerContainer>

        {projects.length > 3 && (
          <AnimatedSection delay={0.4} className="text-center mt-12">
            <Button
              variant="heroOutline"
              size="lg"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? 'Show Less' : `View All Projects (${projects.length})`}
            </Button>
          </AnimatedSection>
        )}

        {/* GitHub CTA */}
        <AnimatedSection delay={0.5} className="mt-16 text-center">
          <motion.div 
            className="glass-card inline-flex items-center gap-4 px-6 py-4"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <Github className="text-primary" size={24} />
            <div className="text-left">
              <p className="font-medium">Want to see more?</p>
              <p className="text-sm text-muted-foreground">
                Check out my GitHub for all projects
              </p>
            </div>
            <a
              href="https://github.com/ninga09"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="gradient" size="sm">
                Visit GitHub
              </Button>
            </a>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
}
