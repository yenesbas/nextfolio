'use client';

import React from 'react';
import Image from 'next/image';
import { ExternalLink, Github, Gamepad2 } from 'lucide-react';
import {
  Container,
  SectionHeading,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  Badge,
  ButtonLink,
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from '@/components/ui';
import { useLanguage } from '@/hooks/useLanguage';
import { projects } from '@/data';
import { translations } from '@/data/translations';

export function ProjectsSection() {
  const { language, t } = useLanguage();
  const trans = translations[language];

  return (
    <section id="projects" className="py-16 md:py-24">
      <Container>
        <AnimatedSection>
          <SectionHeading title={trans.sections.projects} />
        </AnimatedSection>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects
            .filter((p) => p.featured)
            .map((project) => (
              <StaggerItem key={project.id}>
                <Card hover className="h-full flex flex-col">
                  {/* Project Image */}
                  <div className="relative aspect-video bg-background-tertiary rounded-lg mb-4 overflow-hidden flex items-center justify-center">
                    {project.image ? (
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <Gamepad2 className="h-12 w-12 text-foreground-muted" />
                    )}
                    {/* Status Badge */}
                    {project.status && (
                      <div className="absolute top-2 right-2">
                        <Badge variant="warning">
                          {t(project.status.de, project.status.en)}
                        </Badge>
                      </div>
                    )}
                  </div>

                  <CardHeader className="mb-2">
                    <div className="flex items-center justify-between">
                      <CardTitle>{project.title}</CardTitle>
                      <span className="text-xs text-foreground-muted">
                        {project.period}
                      </span>
                    </div>
                    <CardDescription>
                      {t(project.subtitle.de, project.subtitle.en)}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="flex-1">
                    <p className="text-sm text-foreground-secondary mb-4">
                      {t(project.description.de, project.description.en)}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.techStack.map((tech, index) => (
                        <Badge key={index} variant="accent">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>

                  <CardFooter className="mt-auto pt-4">
                    {project.links.github && (
                      <ButtonLink
                        href={project.links.github}
                        variant="ghost"
                        size="sm"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="h-4 w-4" />
                        {trans.buttons.viewCode}
                      </ButtonLink>
                    )}
                    {project.links.live && (
                      <ButtonLink
                        href={project.links.live}
                        variant="ghost"
                        size="sm"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        {trans.buttons.liveDemo}
                      </ButtonLink>
                    )}
                  </CardFooter>
                </Card>
              </StaggerItem>
            ))}
        </StaggerContainer>
      </Container>
    </section>
  );
}
