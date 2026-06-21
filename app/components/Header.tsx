"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Phone } from "lucide-react";
import { contact, navItems } from "../data/site";

export function Header() {
  const pathname = usePathname();
  const detailsRef = useRef<HTMLDetailsElement>(null);

  const closeMenu = () => {
    if (detailsRef.current) {
      detailsRef.current.removeAttribute("open");
    }
  };

  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="Interpaint početna" onClick={closeMenu}>
        <Image src="/images/Logo Trans.png" alt="Interpaint" width={500} height={500} priority />
      </Link>
      <nav aria-label="Glavna navigacija">
        {navItems.map((item) => (
          <Link 
            key={item.href} 
            href={item.href}
            className={pathname === item.href ? "active" : ""}
          >
            {item.label}
          </Link>
        ))}
      </nav>
      <div className="header-actions">
        <a className="header-phone" href={contact.phoneHref}>
          <Phone size={15} />
          {contact.phone}
        </a>
        <details className="mobile-menu" ref={detailsRef}>
          <summary aria-label="Otvori meni">
            <Menu size={22} />
          </summary>
          <div>
            {navItems.map((item) => (
              <Link 
                key={item.href} 
                href={item.href}
                className={pathname === item.href ? "active" : ""}
                onClick={closeMenu}
              >
                {item.label}
              </Link>
            ))}
            <a href={contact.phoneHref} onClick={closeMenu}>{contact.phone}</a>
          </div>
        </details>
      </div>
    </header>
  );
}
