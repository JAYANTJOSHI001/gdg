"use client"

import * as React from "react"
import Link from "next/link"
import { ChevronDown } from "lucide-react"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { signIn } from "next-auth/react"

const features = [
  {
    title: "How It Works",
    href: "/how-it-works",
    description: "Get detailed insights into your application's performance",
    icon: "📊",
  },
  {
    title: "Automation",
    href: "/automation",
    description: "Automate your workflow with powerful tools",
    icon: "⚡",
  },
  {
    title: "Integration",
    href: "/integration",
    description: "Connect with your favorite tools seamlessly",
    icon: "🔄",
  },
  {
    title: "Multi-Cloud & Scalability",
    href: "/multi-cloud",
    description: "Tailor the platform to match your needs",
    icon: "🎨",
  },
]

const support = [
  {
    title: "FAQ Section",
    href: "/faq",
    description: "Comprehensive guides and API references",
    icon: "📚",
  },
  {
    title: "Contact & Support",
    href: "/contact",
    description: "Get help from our dedicated support team",
    icon: "💡",
  },
  {
    title: "Documentation & Guides",
    href: "/docs",
    description: "Join our thriving developer community",
    icon: "👥",
  },
  {
    title: "Webinars & Community Events",
    href: "/webinars",
    description: "Check our system status and uptime",
    icon: "🟢",
  },
]

const about = [
  {
    title: "Our Story",
    href: "/about",
    description: "Learn about our journey and mission",
    icon: "📖",
  },
  {
    title: "Team",
    href: "/team",
    description: "Meet the people behind Swifter",
    icon: "👋",
  },
  {
    title: "Careers",
    href: "/careers",
    description: "Join us in building the future",
    icon: "💼",
  },
  {
    title: "Blog",
    href: "/blog",
    description: "Read our latest news and updates",
    icon: "✍️",
  },
]

const security = [
  {
    title: "Security Features",
    href: "/security",
    description: "Enterprise-grade security for your data",
    icon: "🔒",
  },
  {
    title: "Compliance",
    href: "/compliance",
    description: "SOC 2 and GDPR compliant platform",
    icon: "✅",
  },
  {
    title: "Privacy",
    href: "/privacy",
    description: "Learn about our privacy practices",
    icon: "🛡️",
  },
  {
    title: "Trust Center",
    href: "/trust-center",
    description: "Explore our security measures",
    icon: "🏛️",
  },
]

export function Navbar() {
  async function signUp(): Promise<void> {
    try {
      window.location.href = "/signup";
    } catch (error) {
      console.error("Sign-up failed:", error);
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 mx-auto">
        <div className="mr-8">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              className="dark:invert"
              src="/SWIFTER.svg"
              alt="Next.js logo"
              width={180}
              height={38}
              priority
            />
          </Link>
        </div>
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList className="gap-1">
            <NavigationMenuItem>
              <NavigationMenuTrigger className="h-9 px-4 py-2 hover:bg-accent/50 focus:bg-accent/50">
                Features 
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[500px] gap-3 p-6 md:w-[500px] lg:w-[500px] lg:grid-cols-2">
                  {features.map((feature) => (
                    <ListItem key={feature.title} title={feature.title} href={feature.href} icon={feature.icon}>
                      {feature.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="h-9 px-4 py-2 hover:bg-accent/50 focus:bg-accent/50">
                Support
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[500px] gap-3 p-6 md:w-[500px] lg:w-[500px] lg:grid-cols-2">
                  {support.map((item) => (
                    <ListItem key={item.title} title={item.title} href={item.href} icon={item.icon}>
                      {item.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="h-9 px-4 py-2 hover:bg-accent/50 focus:bg-accent/50">
                About
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[500px] gap-3 p-6 md:w-[500px] lg:w-[500px] lg:grid-cols-2">
                  {about.map((item) => (
                    <ListItem key={item.title} title={item.title} href={item.href} icon={item.icon}>
                      {item.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="h-9 px-4 py-2 hover:bg-accent/50 focus:bg-accent/50">
                Security
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[500px] gap-3 p-6 md:w-[500px] lg:w-[500px] lg:grid-cols-2">
                  {security.map((item) => (
                    <ListItem key={item.title} title={item.title} href={item.href} icon={item.icon}>
                      {item.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="ml-auto flex items-center gap-4">
          <Button variant="ghost" className="hidden md:flex" onClick={() => signIn()}>
            Sign In
          </Button>
          <Button className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white hover:opacity-90 transition-opacity" onClick={() => signUp()}>
            Get Started
          </Button>
        </div>
      </div>
    </header>
  )
}

const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a"> & { icon?: string }>(
  ({ className, title, children, icon, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className,
            )}
            {...props}
          >
            <div className="flex items-center gap-2">
              {icon && <span className="text-xl">{icon}</span>}
              <div className="text-sm font-medium leading-none">{title}</div>
            </div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-2">{children}</p>
          </a>
        </NavigationMenuLink>
      </li>
    )
  },
)
ListItem.displayName = "ListItem"

