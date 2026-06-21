import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check, Mail, MapPin, Menu, Phone } from "lucide-react";
import { contact, navItems } from "../data/site";

export function Header() {
  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="Interpaint početna">
        <Image src="/images/Logo Trans.png" alt="Interpaint" width={500} height={500} priority />
      </Link>
      <nav aria-label="Glavna navigacija">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>
      <div className="header-actions">
        <a className="header-phone" href={contact.phoneHref}>
          <Phone size={15} />
          {contact.phone}
        </a>
        <details className="mobile-menu">
          <summary aria-label="Otvori meni">
            <Menu size={22} />
          </summary>
          <div>
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
            <a href={contact.phoneHref}>{contact.phone}</a>
          </div>
        </details>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="footer section-dark">
      <div className="container footer-grid">
        <div>
          <Image src="/images/Logo Trans.png" alt="Interpaint" width={500} height={500} />
          <p>
            Interpaint je firma specijalizovana za usluge peskarenja, EcoBlasting obrade,
            antikorozivne i protivpožarne zaštite.
          </p>
        </div>
        <div>
          <h3>Kontakt</h3>
          <a href={contact.phoneHref}><Phone size={16} /> {contact.phone}</a>
          <a href={contact.emailHref}><Mail size={16} /> {contact.email}</a>
          <span><MapPin size={16} /> {contact.address}</span>
        </div>
        <div>
          <h3>Navigacija</h3>
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>{item.label}</Link>
          ))}
        </div>
        <div>
          <h3>Usluge</h3>
          <Link href="/peskarenje-metala">Peskarenje metala</Link>
          <Link href="/eco-blasting">EcoBlasting</Link>
          <Link href="/antikorozivna-zastita">Antikorozivna zaštita</Link>
          <Link href="/protivpozarna-zastita">Protivpožarna zaštita</Link>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>Copyright © 2026 Interpaint. Sva prava zadržana.</span>
        <span>Peskarenje i zaštita površina Novi Sad</span>
      </div>
    </footer>
  );
}

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return <span className="eyebrow">{children}</span>;
}

export function CTAButton({
  children = "Pozovite nas",
  href = contact.phoneHref,
  dark = false,
  className = "",
}: {
  children?: React.ReactNode;
  href?: string;
  dark?: boolean;
  className?: string;
}) {
  return (
    <a
      className={`${dark ? "cta-button cta-button-dark" : "cta-button"} ${className}`.trim()}
      href={href}
    >
      <span>{children}</span>
      <ArrowUpRight size={16} />
    </a>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  accent,
  text,
  dark = false,
}: {
  eyebrow: string;
  title: string;
  accent?: string;
  text?: string;
  dark?: boolean;
}) {
  return (
    <div className="section-heading">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className={dark ? "heading dark" : "heading"}>
        {title}
        {accent ? <span>{accent}</span> : null}
      </h2>
      {text ? <p>{text}</p> : null}
    </div>
  );
}

export function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="check-list">
      {items.map((item) => (
        <li key={item}>
          <Check size={17} />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function PageHero({
  eyebrow,
  title,
  text,
  image,
}: {
  eyebrow: string;
  title: string;
  text: string;
  image: string;
}) {
  return (
    <section className="page-hero section-dark">
      <div className="page-hero-bg">
        <Image src={image} alt="" fill priority sizes="100vw" />
      </div>
      <div className="container page-hero-inner">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1>{title}</h1>
        <p>{text}</p>
        <CTAButton />
      </div>
    </section>
  );
}

export function ContactStrip() {
  return (
    <section className="contact-strip section-dark">
      <div className="container contact-strip-inner">
        <div>
          <Eyebrow>Potrebne su Vam naše usluge?</Eyebrow>
          <h2>Naš tim je spreman da proceni posao i predloži pravi postupak obrade.</h2>
        </div>
        <div className="contact-strip-actions">
          <CTAButton />
          <a href={contact.emailHref}>{contact.email}</a>
        </div>
      </div>
    </section>
  );
}
