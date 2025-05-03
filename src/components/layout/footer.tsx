
import Link from "next/link";
import { Facebook, Instagram, Twitter, Circle } from "lucide-react";

import { Button } from "@/components/ui/button";

const socialLinks = [
  { Icon: Facebook, href: "#", label: "Facebook" },
  { Icon: Instagram, href: "#", label: "Instagram" },
  { Icon: Twitter, href: "#", label: "Twitter" },
];

const tourLinks = [
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact Us" },
];

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground py-8 mt-16">
      <div className="container flex flex-col md:flex-row items-center justify-between">
        {/* Logo */}
        <div className="mb-6 md:mb-0">
          <Link href="/" className="font-bold text-xl">
            Sphere News
          </Link>
        </div>

        {/* Tour Links */}
        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-6 md:mb-0 text-sm">
          {tourLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="hover:text-accent transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Social & Community Icons */}
        <div className="flex items-center space-x-4">
          {socialLinks.map((link) => (
            <Button
              key={link.label}
              variant="ghost"
              size="icon"
              className="text-secondary-foreground hover:text-accent hover:bg-secondary/80"
              asChild
            >
              <a href={link.href} target="_blank" rel="noopener noreferrer">
                <link.Icon className="h-5 w-5" />
                <span className="sr-only">{link.label}</span>
              </a>
            </Button>
          ))}
          <Circle className="h-6 w-6 stroke-1 text-secondary-foreground" /> {/* Thin line frame circular icon */}
        </div>
      </div>
      <div className="container text-center text-xs text-muted-foreground mt-8">
        © {new Date().getFullYear()} Sphere News. All rights reserved.
      </div>
    </footer>
  );
}
