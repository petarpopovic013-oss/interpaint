import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Factory, ShieldCheck, Sparkles, Truck } from "lucide-react";
import { galleryImages, partners, references, services } from "../data/site";
import { ContactStrip, CTAButton, Eyebrow, SectionHeading, CheckList } from "./Shared";
import { Gallery } from "./Gallery";

export function HomePage() {
  return (
    <>
      <section className="hero section-dark">
        <div className="hero-bg">
          <Image
            className="hero-bg-desktop"
            src="/images/web wide.png"
            alt=""
            fill
            priority
            sizes="100vw"
          />
          <Image
            className="hero-bg-mobile"
            src="/images/Phone home.png"
            alt=""
            fill
            priority
            sizes="100vw"
          />
        </div>
        <div className="container hero-inner">
          <div className="hero-copy">
            <Eyebrow>Interpaint EcoBlasting Srbija</Eyebrow>
            <h1>
              Peskarenje
              <span>bez prašine</span>
            </h1>
            <CTAButton />
          </div>
          <p className="hero-text">
            Profesionalna priprema i zaštita površina: EcoBlasting, peskarenje, antikorozivna i
            protivpožarna zaštita za industriju, objekte i specijalne radove.
          </p>
          <div className="hero-stat">
            <strong>20+</strong>
            <span>godina iskustva u pripremi i zaštiti površina</span>
          </div>
          <div className="hero-cards">
            <article><Truck size={21} /><span>Izlazak na teren</span></article>
            <article><Factory size={21} /><span>Industrijski projekti</span></article>
            <article><ShieldCheck size={21} /><span>AKZ i PZ prema standardima</span></article>
          </div>
        </div>
      </section>

      <section className="intro section-light">
        <div className="container intro-grid">
          <div>
            <SectionHeading
              eyebrow="Dobrodošli na Interpaint"
              title="Površina spremna"
              accent="za dugotrajnu zaštitu"
              text="Interpaint je preduzeće specijalizovano za izvođenje radova pripreme i obrade materijala peskarenjem i zaštitom adekvatnim premaznim sredstvima."
            />
            <CheckList
              items={[
                "Iskusni stručni radnici",
                "Mobilne ekipe i rad na terenu",
                "Savremene mašine i pouzdana realizacija",
                "Priprema za bojenje, AKZ i protivpožarne premaze",
              ]}
            />
          </div>
          <div className="image-stack">
            <Image src="/images/interpaint/metal.jpg" alt="Peskarenje metala" width={620} height={460} />
            <Image src="/images/interpaint/akz-1.jpg" alt="Antikorozivna zaštita" width={260} height={360} />
          </div>
        </div>
      </section>

      <ServicesPreview />
      <EcoFeature />
      <ReferencesPreview />
      <GallerySection />
      <ContactStrip />
    </>
  );
}

export function ServicesPreview() {
  return (
    <section className="services section-ice">
      <div className="container services-head">
        <SectionHeading
          eyebrow="Interpaint usluge"
          title="Peskarenje, zaštita"
          accent="i završna priprema"
          text="Usluge su organizovane kao na aktuelnom Interpaint sajtu, sa jasnijim objašnjenjima i direktnim putanjama ka detaljima."
        />
        <CTAButton href="/nase-usluge" dark>Pregled usluga</CTAButton>
      </div>
      <div className="container service-list">
        {services.map((service) => (
          <Link className="service-row" href={`/${service.slug}`} key={service.slug}>
            <span>{service.number}</span>
            <div>
              <h3>{service.title}</h3>
              <p>{service.excerpt}</p>
            </div>
            <b>{service.kicker}</b>
            <ArrowRight size={20} />
          </Link>
        ))}
      </div>
    </section>
  );
}

export function EcoFeature() {
  return (
    <section className="eco-feature section-dark">
      <div className="container eco-grid">
        <div>
          <Eyebrow>Glavna usluga</Eyebrow>
          <h2 className="heading dark">
            Dustless Blasting
            <span>za čistiji rad na terenu</span>
          </h2>
          <p>
            EcoBlasting koristi kombinaciju vode, vazduha i abraziva za uklanjanje korozije,
            starih premaza i nečistoća uz znatno manje prašine.
          </p>
          <CheckList
            items={[
              "Manje prašine u odnosu na suvo peskarenje",
              "Efikasno uklanjanje rđe, boje i nečistoća",
              "Pogodno za rad na lokaciji klijenta",
            ]}
          />
          <CTAButton href="/eco-blasting" className="cta-button-spaced">Saznajte više</CTAButton>
        </div>
        <div className="eco-media">
          <Image src="/images/interpaint/project-wide.jpg" alt="EcoBlasting radovi" width={720} height={520} />
          <div>
            <Sparkles size={22} />
            <strong>Bez prašine</strong>
            <span>Preciznija i čistija priprema površine</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ReferencesPreview() {
  return (
    <section className="references section-light">
      <div className="container references-head">
        <SectionHeading
          eyebrow="Reference"
          title="Industrijski radovi"
          accent="i dugoročni partneri"
          text="Izdvojeni projekti pokrivaju silose, rezervoare, konstrukcije, kranske mostove, cevovode i antenske stubove."
        />
        <CTAButton href="/reference" dark>Pogledajte reference</CTAButton>
      </div>
      <div className="container partner-grid">
        {partners.map((partner) => (
          <div key={partner.name} className="partner-card">
            <Image src={partner.logo} alt={partner.name} width={160} height={90} />
          </div>
        ))}
      </div>
      <div className="container reference-list compact">
        {references.slice(0, 6).map((item) => (
          <article key={item}>{item}</article>
        ))}
      </div>
    </section>
  );
}

export function GallerySection() {
  return (
    <section className="work-gallery section-ice">
      <div className="container">
        <SectionHeading
          eyebrow="Radovi u praksi"
          title="Materijali, teksture"
          accent="i završni rezultati"
          text="Galerija koristi lokalne Interpaint fotografije i prikazuje metal, drvo, AKZ i terenske radove."
        />
        <Gallery images={galleryImages} />
      </div>
    </section>
  );
}

export function ServicesPage() {
  return (
    <>
      <section className="service-overview section-light">
        <div className="container card-grid">
          {services.map((service) => (
            <Link className="service-card" href={`/${service.slug}`} key={service.slug}>
              <Image src={service.image} alt={service.title} width={520} height={380} />
              <span>{service.number}</span>
              <h2>{service.title}</h2>
              <p>{service.excerpt}</p>
              <b>Detaljnije <ArrowRight size={16} /></b>
            </Link>
          ))}
        </div>
      </section>
      <EcoFeature />
      <GallerySection />
      <ContactStrip />
    </>
  );
}

export function ReferencesPage() {
  return (
    <>
      <section className="references section-light page-section">
        <div className="container partner-grid large">
          {partners.map((partner) => (
            <div key={partner.name} className="partner-card">
              <Image src={partner.logo} alt={partner.name} width={180} height={110} />
            </div>
          ))}
        </div>
        <div className="container reference-list">
          {references.map((item) => (
            <article key={item}>{item}</article>
          ))}
        </div>
      </section>
      <GallerySection />
      <ContactStrip />
    </>
  );
}
