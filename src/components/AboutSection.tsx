import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Coffee, Rocket, Users } from 'lucide-react';
import { AnimatedSection, StaggerContainer, StaggerItem } from './AnimatedSection';

const stats = [
  { icon: Code2, value: '50+', label: 'Projects Completed' },
  { icon: Coffee, value: '5+', label: 'Years Experience' },
  { icon: Users, value: '30+', label: 'Happy Clients' },
  { icon: Rocket, value: '100%', label: 'Job Success' },
];

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/20 to-transparent" />

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A passionate developer who loves building things that live on the internet
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <AnimatedSection direction="left" delay={0.2}>
            <h3 className="text-2xl md:text-3xl font-display font-semibold mb-6">
              Turning ideas into{' '}
              <span className="gradient-text">digital reality</span>
            </h3>

            <div className="space-y-4 text-muted-foreground">
              <p>
                I'm a full-stack developer based in San Francisco, California. I specialize in
                building exceptional digital experiences that are fast, accessible, and
                visually appealing.
              </p>
              <p>
                My journey in web development started 5 years ago when I built my first
                website. Since then, I've had the privilege of working at a start-up,
                a large corporation, and as a freelancer.
              </p>
              <p>
                I enjoy working across the entire stack, from crafting pixel-perfect
                interfaces with React and Tailwind CSS to building robust backend
                services with Node.js and PostgreSQL. I'm always eager to learn new
                technologies and tackle challenging problems.
              </p>
            </div>

            <StaggerContainer className="mt-8 flex flex-wrap gap-3" staggerDelay={0.1}>
              {['Problem Solver', 'Team Player', 'Quick Learner', 'Detail Oriented'].map(
                (trait) => (
                  <StaggerItem key={trait}>
                    <span className="px-4 py-2 rounded-full bg-secondary text-sm font-medium">
                      {trait}
                    </span>
                  </StaggerItem>
                )
              )}
            </StaggerContainer>
          </AnimatedSection>

          {/* Stats */}
          <StaggerContainer className="grid grid-cols-2 gap-4" staggerDelay={0.15}>
            {stats.map((stat) => (
              <StaggerItem key={stat.label}>
                <div className="glass-card p-6 text-center glow-effect h-full">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-3xl md:text-4xl font-display font-bold gradient-text mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
