import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { AnimatedSection, StaggerContainer, StaggerItem } from './AnimatedSection';

interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'devops';
}

const skills: Skill[] = [
  // Frontend
  { name: 'React / Next.js', level: 90, category: 'frontend' },
  { name: 'TypeScript', level: 85, category: 'frontend' },
  { name: 'Tailwind CSS', level: 75, category: 'frontend' },
  { name: 'HTML / CSS', level: 95, category: 'frontend' },
  { name: 'JavaScript (ES6+)', level: 80, category: 'frontend' },
  { name: 'Vue.js', level: 75, category: 'frontend' },
  // Backend
  { name: 'Node.js / Express', level: 90, category: 'backend' },
  { name: 'PostgreSQL', level: 85, category: 'backend' },
  { name: 'MongoDB', level: 80, category: 'backend' },
  { name: 'REST APIs', level: 92, category: 'backend' },
  { name: 'GraphQL', level: 78, category: 'backend' },
  { name: 'Python / Django', level: 90, category: 'backend' },
  // DevOps
  { name: 'Git / GitHub', level: 95, category: 'devops' },
  { name: 'Docker', level: 80, category: 'devops' },
  { name: 'CI/CD Pipelines', level: 82, category: 'devops' },
  { name: 'Vercel / Netlify', level: 90, category: 'devops' },
  { name: 'AWS', level: 72, category: 'devops' },
  { name: 'Linux', level: 78, category: 'devops' },
];

const categories = [
  { id: 'frontend', label: 'Frontend', color: 'from-primary to-cyan-400' },
  { id: 'backend', label: 'Backend', color: 'from-accent to-purple-400' },
  { id: 'devops', label: 'DevOps', color: 'from-green-500 to-emerald-400' },
] as const;

const getLevelLabel = (level: number): string => {
  if (level >= 90) return 'Expert';
  if (level >= 75) return 'Proficient';
  return 'Familiar';
};

const getLevelColor = (level: number): string => {
  if (level >= 90) return 'text-primary';
  if (level >= 75) return 'text-accent';
  return 'text-muted-foreground';
};

function SkillBar({ skill, delay, categoryColor }: { skill: Skill; delay: number; categoryColor: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay, ease: [0.25, 0.4, 0.25, 1] }}
      className="group"
    >
      <div className="flex items-center justify-between mb-2">
        <span className="font-medium text-foreground group-hover:text-primary transition-colors">
          {skill.name}
        </span>
        <span className={`text-sm font-medium ${getLevelColor(skill.level)}`}>
          {getLevelLabel(skill.level)}
        </span>
      </div>
      <div className="skill-bar">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : {}}
          transition={{ duration: 1, delay: delay + 0.2, ease: [0.25, 0.4, 0.25, 1] }}
          className={`skill-bar-fill bg-gradient-to-r ${categoryColor}`}
        />
      </div>
    </motion.div>
  );
}

export function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="py-20 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4" ref={ref}>
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical skills across the full stack
          </p>
        </AnimatedSection>

        {/* Legend */}
        <AnimatedSection delay={0.2} className="flex flex-wrap justify-center gap-6 mb-12">
          {[
            { label: 'Expert (90%+)', color: 'text-primary' },
            { label: 'Proficient (75-89%)', color: 'text-accent' },
            { label: 'Familiar (<75%)', color: 'text-muted-foreground' },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-2">
              <div className={`w-3 h-3 rounded-full ${item.color} bg-current`} />
              <span className="text-sm text-muted-foreground">{item.label}</span>
            </div>
          ))}
        </AnimatedSection>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12" staggerDelay={0.2}>
          {categories.map((category) => (
            <StaggerItem key={category.id}>
              <div className="glass-card p-6 md:p-8 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-1 h-8 rounded-full bg-gradient-to-b ${category.color}`} />
                  <h3 className="text-xl font-display font-semibold">{category.label}</h3>
                </div>

                <div className="space-y-5">
                  {skills
                    .filter((skill) => skill.category === category.id)
                    .map((skill, index) => (
                      <SkillBar
                        key={skill.name}
                        skill={skill}
                        delay={index * 0.1}
                        categoryColor={category.color}
                      />
                    ))}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Additional Tools */}
        <AnimatedSection delay={0.6} className="mt-12 text-center">
          <h4 className="text-lg font-semibold mb-4 text-muted-foreground">
            Also familiar with
          </h4>
          <StaggerContainer className="flex flex-wrap justify-center gap-3" staggerDelay={0.05}>
            {[
              'Figma',
              'Jest',
              'Cypress',
              'Redis',
              'Socket.io',
              'Three.js',
              'Go',
              'Supabase',
              'Firebase',
              'Stripe API',
            ].map((tool) => (
              <StaggerItem key={tool}>
                <span className="px-4 py-2 rounded-full bg-secondary/50 text-sm hover:bg-secondary transition-colors cursor-default">
                  {tool}
                </span>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </AnimatedSection>
      </div>
    </section>
  );
}
