import BlurFade from '@/components/magicui/blur-fade'
import { ProjectCard } from '@/components/project-card'
import { Project } from '@/lib/types';
import { sanityFetch, urlFor } from '@/sanity/client';
import React from 'react'

const BLUR_FADE_DELAY = 0.04;

const Projects = async () => {
 const projects = await sanityFetch<Project[]>({query : "*[_type == 'projects']"})

  return (
    <section id="projects">
    <div className="space-y-12 w-full">
      <BlurFade delay={BLUR_FADE_DELAY * 11}>
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
              My Projects
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Check out all my works
            </h2>
            <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              I&apos;ve worked on a variety of projects, from simple
              websites to complex web applications. Here are a few of my
              favorites.
            </p>
          </div>
        </div>
      </BlurFade>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 max-w-[800px] lg:max-w-4xl mx-auto">
        {projects.map((project, id) => (
          <BlurFade
            key={project.title}
            delay={BLUR_FADE_DELAY * 12 + id * 0.05}
          >
            <ProjectCard
              href={project.website}
              key={project.title}
              title={project.title}
              description={project.description}
              startDate={project.startDate}
              endDate={project.endDate}
              tags={project.techUsed}
              image={urlFor(project.image).url()}
              github={project.githubRepo}
              website={project.website}
            />
          </BlurFade>
        ))}
      </div>
    </div>
  </section>
  )
}

export default Projects