import { Dock, DockIcon } from "@/components/magicui/dock";
import { ModeToggle } from "@/components/mode-toggle";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { UserInfo } from "@/lib/types";
import { cn } from "@/lib/utils";
import { sanityFetch } from "@/sanity/client";
import { InstagramLogoIcon } from "@radix-ui/react-icons";
import { CodeIcon, HandshakeIcon, HomeIcon, NotebookIcon } from "lucide-react";
import Link from "next/link";
import { Icons } from "./icons";

const navbarData = [
  { href: "/", icon: HomeIcon, label: "Home" },
  { href: "/blog", icon: NotebookIcon, label: "Blog" },
  { href: "/projects", icon: CodeIcon, label: "Projects" },
  { href: "/freelance", icon: HandshakeIcon, label: "Freelance Works" },
];

export default async function Navbar() {
  let data = await sanityFetch<UserInfo[]>({ query: `*[_type == 'info']` });

  const { email, phoneNo, linkedin, github, instagram, twitter, youtube } =
    data[0];

  const contact = {
    email,
    tel: phoneNo,
    social: {
      GitHub: {
        name: "GitHub",
        url: github || "#",
        icon: Icons.github,
        navbar: !!github,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: linkedin || "#",
        icon: Icons.linkedin,
        navbar: !!linkedin,
      },
      X: {
        name: "X",
        url: twitter || "#",
        icon: Icons.x,
        navbar: !!twitter,
      },
      Instagram: {
        name: "Instagram",
        url: instagram || "#",
        icon: InstagramLogoIcon,
        navbar: !!instagram,
      },
      Youtube: {
        name: "Youtube",
        url: youtube || "#",
        icon: Icons.youtube,
        navbar: !!youtube,
      },
      Email: {
        name: "Send Email",
        url: `mailto:${email}` || "#",
        icon: Icons.email,
        navbar: !!email,
      },
      Whatsapp: {
        name: "Send Email",
        url: `https://api.whatsapp.com/send?phone=${phoneNo}` || "#",
        icon: Icons.whatsapp,
        navbar: !!phoneNo,
      },
    },
  };

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-30 mx-auto mb-4 flex origin-bottom h-full max-h-14">
      <div className="fixed bottom-0 inset-x-0 h-16 w-full bg-background to-transparent backdrop-blur-lg [-webkit-mask-image:linear-gradient(to_top,black,transparent)] dark:bg-background"></div>
      <Dock className="z-50 pointer-events-auto relative mx-auto flex min-h-full h-full items-center px-1 bg-background [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] ">
        {navbarData.map((item) => (
          <DockIcon key={item.href}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href={item.href}
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "icon" }),
                    "size-12"
                  )}
                >
                  <item.icon className="size-4" />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>{item.label}</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>
        ))}
        <Separator orientation="vertical" className="h-full" />
        {Object.entries(contact.social)
          .filter(([_, social]) => social.navbar)
          .map(([name, social]) => (
            <DockIcon key={name}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href={social.url}
                    target="_blank"
                    className={cn(
                      buttonVariants({ variant: "ghost", size: "icon" }),
                      "size-12"
                    )}
                  >
                    <social.icon className="size-4" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{name}</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          ))}
        <Separator orientation="vertical" className="h-full py-2" />
        <DockIcon>
          <Tooltip>
            <TooltipTrigger asChild>
              <ModeToggle />
            </TooltipTrigger>
            <TooltipContent>
              <p>Theme</p>
            </TooltipContent>
          </Tooltip>
        </DockIcon>
      </Dock>
    </div>
  );
}
