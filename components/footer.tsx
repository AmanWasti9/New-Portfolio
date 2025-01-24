import { Github, Linkedin, Mail, Twitter } from "lucide-react"
import Link from "next/link"
import { Button } from "./ui/button"

export function Footer() {
  return (
    <footer id="contact" className="py-12 border-t">
      <div className="container px-5 md:px-16">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Syed Amanullah Wasti</h3>
            <p className="text-sm text-muted-foreground">
              Building digital experiences with passion and precision.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <nav className="space-y-2">
              <Link
                href="#about"
                className="block text-sm text-muted-foreground hover:text-primary"
              >
                About
              </Link>
              <Link
                href="#skills"
                className="block text-sm text-muted-foreground hover:text-primary"
              >
                Skills
              </Link>
              <Link
                href="#projects"
                className="block text-sm text-muted-foreground hover:text-primary"
              >
                Projects
              </Link>
              <Link
                href="#contact"
                className="block text-sm text-muted-foreground hover:text-primary"
              >
                Contact
              </Link>
              <Link
                href="https://aman-portfolio-dusky1.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm text-muted-foreground hover:text-primary"
              >
                View My Old Portfolio
              </Link>
            </nav>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-2">
              <a
                href="mailto:contact@example.com"
                className="block text-sm text-muted-foreground hover:text-primary"
              >
                amanwasti5@gmail.com
              </a>
              <a
                href="tel:+92 336 0348013"
                className="block text-sm text-muted-foreground hover:text-primary"
              >
                +92 336 0348013
              </a>
              <div className="flex gap-2 pt-2">
                <Button variant="ghost" size="icon" asChild>
                  <Link href="https://github.com/AmanWasti9" target="_blank">
                    <Github className="w-4 h-4" />
                    <span className="sr-only">GitHub</span>
                  </Link>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <Link
                    href="https://www.linkedin.com/in/aman-wasti/"
                    target="_blank"
                  >
                    <Linkedin className="w-4 h-4" />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <Link href="https://twitter.com" target="_blank">
                    <Twitter className="w-4 h-4" />
                    <span className="sr-only">Twitter</span>
                  </Link>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <Link href="mailto:amanwasti5@gmail.com">
                    <Mail className="w-4 h-4" />
                    <span className="sr-only">Email</span>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>© 2025 Syed Amanullah Wasti. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

