/**
 * BlogBreadcrumb Component
 * Design: Advocacia Digital Contemporânea
 * Componente de navegação breadcrumb para as páginas do blog
 */

import { ChevronRight, Home } from "lucide-react";
import { Link } from "wouter";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BlogBreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function BlogBreadcrumb({ items }: BlogBreadcrumbProps) {
  return (
    <nav className="bg-ice py-3 px-4 lg:px-0" aria-label="Breadcrumb">
      <div className="container max-w-4xl mx-auto">
        <ol className="flex items-center gap-2 text-sm">
          {/* Home Link */}
          <li>
            <Link href="/" className="flex items-center gap-1 text-navy hover:text-petrol transition-colors">
              <Home className="w-4 h-4" />
              <span>Início</span>
            </Link>
          </li>

          {/* Blog Link */}
          <li className="flex items-center gap-2">
            <ChevronRight className="w-4 h-4 text-muted-foreground" />
            <Link href="/blog" className="text-navy hover:text-petrol transition-colors">
              Blog
            </Link>
          </li>

          {/* Additional Items */}
          {items.map((item, index) => (
            <li key={index} className="flex items-center gap-2">
              <ChevronRight className="w-4 h-4 text-muted-foreground" />
              {item.href ? (
                <Link href={item.href} className="text-navy hover:text-petrol transition-colors">
                  {item.label}
                </Link>
              ) : (
                <span className="text-muted-foreground">{item.label}</span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}
