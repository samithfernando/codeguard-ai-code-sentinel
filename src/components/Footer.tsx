import { Github, Twitter, Mail } from "lucide-react";

const Footer = () => {
  const links = [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
  ];

  const socials = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Mail, href: "mailto:hello@codeguard.dev", label: "Email" },
  ];

  return (
    <footer className="border-t border-border bg-card/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo & Copyright */}
          <div>
            <div className="flex items-center space-x-2 mb-3">
              <span className="text-xl font-display font-bold text-foreground">
                CodeSentinelAI
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              Stop debugging AI code
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              © 2025 CodeSentinelAI. All rights reserved.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex gap-4 justify-start md:justify-end">
            {socials.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-secondary hover:bg-primary/20 rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary transition-all hover:scale-110"
                >
                  <Icon size={20} />
                </a>
              );
            })}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-xs text-muted-foreground">
            Built with ❤️ for developers who deserve better AI tools
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
