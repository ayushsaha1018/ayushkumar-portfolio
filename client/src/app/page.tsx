import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

const BLUR_FADE_DELAY = 0.04;

import { UserProfile } from "@/lib/types";
import { sanityFetch, urlFor } from "@/sanity/client";
import { PortableText } from "next-sanity";
import ShinyButton from "@/components/magicui/shiny-button";

const QUERY = `{
  'info':*[_type == 'info'], 
  'workExp':*[_type == 'workExperience'],
  'education':*[_type == 'education'],
  'projects':*[_type == 'projects']|order(orderRank),
}`;

export default async function Page() {
  const { info, education, workExp, projects } = await sanityFetch<UserProfile>(
    { query: QUERY }
  );

  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10 lg:max-w-2xl mx-auto">
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-2 flex justify-between">
            <div className="flex-col flex flex-1 space-y-1.5">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                yOffset={8}
                text={`Hi, I'm ${info[0].name.split(" ")[0]} 👋`}
              />
              <BlurFadeText
                className="max-w-[600px] md:text-xl"
                delay={BLUR_FADE_DELAY}
                text={info[0].description}
              />
            </div>
            <BlurFade delay={BLUR_FADE_DELAY}>
              <Avatar className="size-28 border">
                <AvatarImage
                  alt={info[0].name}
                  src={urlFor(info[0].avatar).url()}
                />
                <AvatarFallback>{info[0].intitials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </section>
      <section id="about">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-xl font-bold">About</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <div className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
            <PortableText value={info[0].summary} />
          </div>
        </BlurFade>
      </section>
      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-xl font-bold">Work Experience</h2>
          </BlurFade>
          {workExp.map((work, id) => (
            <BlurFade
              key={work.companyName}
              delay={BLUR_FADE_DELAY * 6 + id * 0.05}
            >
              <ResumeCard
                key={work.companyName}
                logoUrl={urlFor(work.logo).url()}
                altText={work.companyName}
                title={work.companyName}
                subtitle={work.role}
                href={work.companyWebsite}
                period={`${work.startDate} - ${work.endDate ?? "Present"}`}
                description={work.pointers}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-xl font-bold">Education</h2>
          </BlurFade>
          {education.map((education, id) => (
            <BlurFade
              key={education.instituteName}
              delay={BLUR_FADE_DELAY * 8 + id * 0.05}
            >
              <ResumeCard
                key={education.instituteName}
                href={education?.instituteWebsite}
                logoUrl={urlFor(education.logo).url()}
                altText={education.instituteName}
                title={education.instituteName}
                description={education.pointers}
                subtitle={education.degree}
                period={`${education.startDate} - ${education.endDate}`}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-xl font-bold">Skills</h2>
          </BlurFade>
          <div className="flex flex-wrap gap-1">
            {info[0].skills.map((skill, id) => (
              <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                <Badge key={skill}>{skill}</Badge>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="projects">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  My Projects
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Check out my latest work
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I&apos;ve worked on a variety of projects, from simple
                  websites to complex web applications. Here are a few of my
                  favorites.
                </p>
              </div>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
            {projects.slice(0, 4).map((project, id) => (
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
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <Link href="/projects">
                <ShinyButton text="View All Works" />
              </Link>
            </div>
          </BlurFade>
        </div>
      </section>
      <section id="contact">
        <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full pb-12">
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <div className="space-y-3">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                Contact
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Get in Touch
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Want to chat? Just send me an{" "}
                <Link
                  href={`mailto:${info[0].email || "#"}`}
                  className="text-blue-500 hover:underline"
                >
                  email
                </Link>{" "}
                with a direct question and I&apos;ll respond whenever I can. I
                will ignore all soliciting.
              </p>
            </div>
          </BlurFade>
        </div>
      </section>
    </main>
  );
}
