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
    <nav className="border-b border-navy/10 bg-white py-3" aria-label="Breadcrumb">
      <div className="container max-w-5xl">
        <ol className="flex min-w-0 flex-wrap items-center gap-2 text-xs sm:text-sm">
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
                <span className="max-w-[220px] truncate text-muted-foreground sm:max-w-[460px]">{item.label}</span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}
