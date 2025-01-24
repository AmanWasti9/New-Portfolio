"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-200",
        isScrolled
          ? "bg-background/80 backdrop-blur-sm border-b"
          : "bg-transparent"
      )}
    >
      <div className="container flex items-center justify-between h-16 px-5 md:px-16">
        <Link href="/" className="text-2xl font-bold text-primary">
          SW
        </Link>
        <nav className="hidden md:flex items-center space-x-6">
          <Link
            href="#about"
            className="text-sm hover:text-primary transition-colors"
          >
            About
          </Link>
          <Link
            href="#skills"
            className="text-sm hover:text-primary transition-colors"
          >
            Skills
          </Link>
          <Link
            href="/projects"
            className="text-sm hover:text-primary transition-colors"
          >
            Projects
          </Link>
          <Link
            href="#contact"
            className="text-sm hover:text-primary transition-colors"
          >
            Contact
          </Link>
          <Button
            variant="outline"
            className="group hover:border-primary transition-colors"
            asChild
          >
            <Link
              href="/CV/Amanullah_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </Link>
          </Button>
          <ModeToggle />
        </nav>
      </div>
    </header>
  );
}

