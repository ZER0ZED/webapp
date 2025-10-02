import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Briefcase, Mail, Download } from 'lucide-react';
import { projectsApi, skillsApi, experiencesApi } from '@/services/api';
import { Project, Skill, Experience } from '@/types';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { formatDate, calculateDuration } from '@/lib/utils';

export default function HomePage() {
  const [featuredProjects, setFeaturedProjects] = useState<Project[]>([]);
  const [skills, setSkills] = useState<Skill[]>([]);
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [projectsRes, skillsRes, experiencesRes] = await Promise.all([
          projectsApi.getFeatured(),
          skillsApi.getAll({ featured: true }),
          experiencesApi.getAll(),
        ]);
        
        setFeaturedProjects(projectsRes.data.slice(0, 3));
        setSkills(skillsRes.data.skills.slice(0, 8));
        setExperiences(experiencesRes.data.slice(0, 2));
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Hi, I'm <span className="text-gradient">Ammar Ahmed</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Software Engineer specializing in full-stack development with Qt/QML and C++
            </p>
            <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
              Computer Engineering graduate with expertise in Python, AI integration, and advanced development tools.
              Currently contributing to innovative projects at ACME - Integrated Engineering Systems.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/projects">
                <Button size="lg" className="group">
                  View My Work
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline">
                  <Mail className="mr-2 w-4 h-4" />
                  Get In Touch
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
            <p className="text-muted-foreground">Technologies and tools I work with</p>
          </motion.div>

          {!loading && skills.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill._id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="text-center hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <Code className="w-8 h-8 mx-auto mb-3 text-primary" />
                      <h3 className="font-semibold mb-1">{skill.name}</h3>
                      <p className="text-sm text-muted-foreground">{skill.proficiency}%</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Work Experience</h2>
            <p className="text-muted-foreground">My professional journey</p>
          </motion.div>

          {!loading && experiences.length > 0 && (
            <div className="max-w-4xl mx-auto space-y-6">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp._id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                >
                  <Card>
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-xl">{exp.position}</CardTitle>
                          <CardDescription className="text-base mt-1">
                            {exp.company} • {exp.location}
                          </CardDescription>
                        </div>
                        <Badge variant="secondary">
                          {exp.current ? 'Present' : formatDate(exp.endDate!)}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mt-2">
                        {formatDate(exp.startDate)} - {exp.current ? 'Present' : formatDate(exp.endDate!)} 
                        {' • '}{calculateDuration(exp.startDate, exp.endDate)}
                      </p>
                    </CardHeader>
                    <CardContent>
                      {exp.responsibilities.length > 0 && (
                        <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                          {exp.responsibilities.slice(0, 3).map((resp, i) => (
                            <li key={i}>{resp}</li>
                          ))}
                        </ul>
                      )}
                      {exp.technologies.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-4">
                          {exp.technologies.map((tech) => (
                            <Badge key={tech} variant="outline">{tech}</Badge>
                          ))}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-muted-foreground">Some of my recent work</p>
          </motion.div>

          {!loading && featuredProjects.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredProjects.map((project, index) => (
                <motion.div
                  key={project._id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link to={`/projects/${project._id}`}>
                    <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
                      {project.thumbnail && (
                        <div className="aspect-video w-full bg-secondary overflow-hidden rounded-t-lg">
                          <img 
                            src={project.thumbnail} 
                            alt={project.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      )}
                      <CardHeader>
                        <CardTitle>{project.title}</CardTitle>
                        <CardDescription className="line-clamp-2">
                          {project.shortDescription || project.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.slice(0, 3).map((tech) => (
                            <Badge key={tech} variant="secondary">{tech}</Badge>
                          ))}
                          {project.technologies.length > 3 && (
                            <Badge variant="outline">+{project.technologies.length - 3}</Badge>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}

          <div className="text-center mt-12">
            <Link to="/projects">
              <Button variant="outline" size="lg">
                View All Projects
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
